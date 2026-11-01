---
title: Keeping PHPJasper alive for a cargo ERP
seoTitle: Maintaining a PHPJasper fork in production
date: 2026-01-16
project: kaede
seo: Why I forked PHPJasper, and the fixes a production cargo ERP needed: headless Java, Japanese and Devanagari fonts, passwords off the command line, and shell-safe parameters.
summary: Kaede prints air waybills, invoices and payslips through JasperReports. The PHP wrapper everyone uses had gone quiet, so I forked it and fixed what production kept finding.
---

Kaede prints a lot of paper: all twelve copies of an IATA air waybill, labels, manifests, invoices, payslips. Freight runs on documents that must look exactly right, in English, Nepali and Japanese. Under the hood, those documents are JasperReports templates, rendered from PHP through **PHPJasper**, which shells out to **JasperStarter**, a small Java command-line runner.

PHPJasper is a good library. But by late 2025 its last release was two years old, an upgrade to JasperStarter 3.6.2 had sat in a contributor's fork since 2022, and Kaede kept hitting problems that needed changes inside the package. So in December 2025 I forked it as [`coderkoala/phpjasper`](https://github.com/coderkoala/phpjasper) and started maintaining it the way a production system needs.

## Why fork instead of patch around it

The tempting fix for a library you depend on is a patch file, or a workaround in your own code. Both rot. A patch breaks on the next update; a workaround hides the problem from the next person.

A fork with its own package name, tagged releases, and a changelog of why each change exists is honest about what it is: the version Kaede actually runs. Kaede pins an exact tag, so a render never changes because someone pushed to a branch.

The first commit was merging that long-waiting JasperStarter 3.6.2 upgrade. Then production started teaching me things.

## 1. Java wanted a screen

The first failure on a fresh server was an `AWTError`: assistive technology not found. JasperReports uses Java's AWT to measure text, and on a server with no display, AWT goes looking for a desktop accessibility bridge that isn't there.

The fix is one flag, in the launcher script the fork ships:

```sh
java -Djava.awt.headless=true -jar "$HOME_FOLDER/lib/jasperstarter.jar" "$@"
```

The README now explains the other half, for hosts where a system-wide Java accessibility setting still gets in the way. It's a small change that every server running this needs, so it belongs in the package, not in each server's notes.

## 2. Japanese, and every script after it

Kaede's users write consignee addresses in Japanese. JasperReports doesn't fall back to a system font the way a browser does: if the font named in the template has no glyph for a character, the PDF prints a blank square. On an air waybill, a blank address is a shipment that doesn't arrive.

The fork ships **Noto Sans JP** as a font extension on JasperStarter's classpath, so Japanese prints out of the box.

Kaede went further on its own side: one bundled font family that the templates name, mapping to DejaVu Sans for Latin and to a separate face for each script DejaVu lacks: Arabic, Hebrew, Thai, Devanagari, Korean and Chinese, with Japanese coming from the fork. Getting Thai and Devanagari to shape correctly also needed the ICU classes JasperReports uses to tell scripts apart, plus a couple of renderer settings. Now a template asks for one font and gets the right one for every character.

## 3. The database password was on the command line

PHPJasper builds one shell command and passes the database login as `-u user -p password`. That works. It also means the password sits in `/proc/<pid>/cmdline`, readable by any user on the machine, for the whole render. And because it isn't quoted, a password with a space or a quote in it simply broke rendering.

JasperStarter can read arguments from a file, one per line, passed as `@path`. So Kaede now writes the connection details to a file only the worker can read (`0600`), points the command at it, and deletes it when the render finishes, whatever happens:

```php
$file = $this->writeArgumentFile($connection);    // 0600, private directory
try {
    $this->runJasperWith("@{$file}");
} finally {
    @unlink($file);
}
```

A render killed mid-way (out of memory, a worker timeout) never reaches `finally`. So a sweeper removes leftover files when a queue worker starts and once an hour.

## 4. Parameters went into a shell

The same command string carries each report parameter as `key="value"`, without escaping. Inside double quotes the shell still expands `$`, backticks and backslashes, and a `"` ends the quote. A parameter value with any of those could run a command on the server.

No real AWB number, batch id, leave period or menu choice contains shell metacharacters. So the last check before a render **refuses** such values rather than trying to escape them: escaping correctly is easy to get subtly wrong, and a mangled value would print the wrong document anyway. The error names the parameter but never echoes its value.

## 5. Knowing it still works

Reports are the kind of feature nobody checks until month-end, when payslips won't print. So there's a canary: a tiny built-in template that Kaede compiles, fills and exports to PDF on a schedule, in a temporary folder, calling JasperStarter directly with an argument list, with no shell and no change of working directory.

It proves Java starts, the classpath loads, a template compiles and a PDF comes out, and how long that fixed cost is. It's honest about what it can't prove: no database, no business template, no queue. A green canary means the engine works; it doesn't promise every report does.

## What maintaining a fork actually means

- **Pin exact versions.** The application names a tag, never a branch.
- **Fix it where it belongs.** If every server needs the change, it goes in the package. If only your application needs it, it goes in your code.
- **Write down why.** Every change in the fork and every guard in Kaede says what broke and why the fix is shaped the way it is.
- **Treat a shell-out as an attack surface.** Anything that builds a command string needs an argument file, an allow-list, or both.
- **Watch it in production.** A library you own is a library you're on call for.

The fork is public: [coderkoala/phpjasper](https://github.com/coderkoala/phpjasper).
