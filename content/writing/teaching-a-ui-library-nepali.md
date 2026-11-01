---
title: Teaching a UI library to speak Nepali
date: 2024-01-09
summary: I translated Syncfusion's Essential JS 2, 64 components and over four thousand strings, into Nepali. These are the choices that made it read like Nepali and not like a dictionary.
---

Syncfusion's Essential JS 2 is a big UI library: grids, schedulers, a spreadsheet, a word processor, a PDF viewer. It shipped in a few dozen languages. Nepali wasn't one of them.

I needed it for a product used by people who think in Nepali. So in January 2024 I translated it: 64 components and 4,355 strings, about three thousand lines, on my own. Syncfusion took it into the library, and `ne-NP` now ships with it.

## The hard part isn't vocabulary

Any dictionary will give you a word for *Insert*. The hard part is choosing the word a Nepali speaker would actually expect to see on a button. I set myself a few rules before writing a line.

**Use the words people already use.** Nepali has borrowed a lot of computing words from English, and many are now just Nepali. A file is *फाइल*, not a coined Sanskrit term nobody says. Where the borrowed word is the everyday one, I used it, spelt the established way.

**Use the formal register for technical terms.** Mathematical, scientific and technical words came from their established Sanskrit-derived forms. A spreadsheet function or a statistics term should read like a textbook, not like slang.

**Translate the meaning, not the words.** Some English UI strings make no sense word for word. Where a literal translation would confuse someone, I rewrote it to say what the control does. The grid's empty state, *"No records to display"*, became *प्रदर्शन गर्न कुनै रेकर्ड छैन*, which is how you'd actually say it.

## What I deliberately left alone

Knowing what not to translate mattered as much:

- **Key names** in tooltips and shortcuts: Space, Alt, A, B. People read them off the keyboard.
- **Formulas and their parameters.** A spreadsheet formula is code.
- **Units and their symbols**, and paper sizes. A4 is A4.
- **Abbreviations**, apart from a few that are well known.
- **Font names**, other than everyday ones like Times New Roman.
- **Compound CamelCase identifiers** like `ThinThickSmallGap`, where any translation would be guesswork.

## Why it was worth it

Localisation is usually treated as a chore you hand to a vendor at the end. It's really product work: every string is a tiny bit of interface design. Doing it by hand across a whole library taught me more about how these components behave than reading their docs ever did.

I also tightened the Nepali messages in vee-validate, the Vue form library ([#4642](https://github.com/logaretm/vee-validate/pull/4642)), so validation errors read formally and correctly.

Source: [syncfusion/ej2-locale#192](https://github.com/syncfusion/ej2-locale/pull/192).
