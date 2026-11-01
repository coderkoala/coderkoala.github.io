---
title: The check that only lived in the browser
date: 2020-05-01
summary: How an email field in Everest Forms trusted the browser, how I closed it, and the regression I shipped and fixed along the way.
---

In early 2020 I was working on Everest Forms, a popular WordPress form builder. While tidying the email notifications I noticed something about the email field: the server never checked that it held an email address.

The form rendered `<input type="email">`, and the browser refused anything that didn't look like `name@domain`. So in normal use, everything looked fine. But the browser is the visitor's, not yours.

## The gap

Here is roughly what the server did with an email field on submit, before the fix:

```php
// includes/fields/class-evf-field-email.php, before
public function validate( $field_id, $field_submit, $form_data ) {
    // Required check.
    if ( ! empty( $fields[ $field_id ]['required'] ) && empty( $field_submit ) ) {
        evf()->task->errors[ $form_id ][ $field_id ] = $required;
    }
    // ...and that was it. No format check.
}
```

It asked one question, *is it empty?*, and never asked *is it an email address?* Anyone who skipped the browser could put anything there:

```bash
curl -X POST https://example.com/contact/ \
  -d 'everest_forms[id]=42' \
  -d 'everest_forms[form_fields][email]=not an email<b>at all</b>' \
  -d 'everest_forms[form_fields][name]=Test'
```

The entry was accepted and saved, and the value went wherever the form sent it: the entries screen, the admin's notification email, and smart tags like `{field_id="email"}` that site owners often drop into the *Reply-To* of that notification.

On its own that is a validation hole rather than a break-in. WordPress escapes most output, and `wp_mail` has its own guards. But "most" and "has its own guards" are other people's promises. A field labelled *Email* that will store any string is a gap waiting for the next feature to step into it.

## The fix

The rule I hold myself to: **the browser checks for convenience, the server checks for truth.** WordPress already ships a decent validator, `is_email()`, so the fix was small. I added a server-side format check for both shapes of the field, the plain one and the one with a "confirm your email" box:

```php
// PR #376, merged February 2020
$invalid_email = esc_html__( 'Please enter a valid email address.', 'everest-forms' );

// Standard configuration, confirmation disabled.
if ( isset( $field_submit ) && ! is_email( $field_submit ) ) {
    evf()->task->errors[ $form_id ][ $field_id ] = $invalid_email;
    update_option( 'evf_validation_error', 'yes' );
    return;
}

// With confirmation: check the primary address too.
if ( isset( $field_submit['primary'] ) && ! is_email( $field_submit['primary'] ) ) {
    evf()->task->errors[ $form_id ][ $field_id ]['primary'] = $invalid_email;
    update_option( 'evf_validation_error', 'yes' );
    return;
}
```

It shipped, and crafted submissions came back with a proper error.

## The regression I caused

Two months later the bug reports started. Forms with an **optional** email field were refusing to submit, with "Please enter a valid email address" under a box nobody had typed into.

The culprit was one word: `isset`. An empty optional field still arrives in `$_POST` as an empty string, and `isset('')` is true. So my check ran on blank values too, and `is_email('')` is false. I had made every email field effectively required.

I wrote the fix with an apology in the pull request, because a form that won't submit costs the site owner real leads. The fix (#430) did three things.

**1. Check format only when there is something to check.**

```php
if ( ! empty( $field_submit['primary'] ) && ! is_email( $field_submit['primary'] ) ) {
```

**2. Give the field one shape.** The plain field posted a string and the confirmation field posted an array, and each branch had its own copy of the rules. I normalised the input first, so the format and match checks exist once:

```php
// If confirmation is disabled, treat it as the primary email.
if ( ! is_array( $field_submit ) && ! empty( $field_submit ) ) {
    $field_submit = array( 'primary' => $field_submit );
}

if ( ! empty( $field_submit['primary'] ) && ! is_email( $field_submit['primary'] ) ) {
    // invalid address, reported on the right input
} elseif ( isset( $field_submit['primary'], $field_submit['secondary'] )
    && $field_submit['secondary'] !== $field_submit['primary'] ) {
    // confirmation doesn't match
}
```

**3. Stop echoing raw arrays back into the form.** When a submission failed, the form re-filled itself from `$_POST`. A crafted request could send a field as an array where a string was expected and trip PHP's array-to-string handling. The re-fill now accepts only non-empty scalars:

```php
$defaults = isset( $_POST['everest_forms']['form_fields'][ $field_id ] )
    && ! is_array( $_POST['everest_forms']['form_fields'][ $field_id ] )
    && ! empty( $_POST['everest_forms']['form_fields'][ $field_id ] )
        ? $_POST['everest_forms']['form_fields'][ $field_id ]
        : '';
```

## What I took from it

- **Validate on the server, always.** HTML5 attributes are a courtesy to honest users. Anything a browser enforces, `curl` ignores.
- **`isset` is not `! empty`.** For form input the question is almost never "was this key sent?" but "did the person give me a value?"
- **Normalise first, then validate once.** Two input shapes with two copies of the rules is how one copy ends up wrong.
- **Optional fields are a test case.** I tested the field that was filled in and not the one left blank. Now the first test I write for a validator is the blank, optional case.

The same habit, poking at what the server accepts rather than what the form allows, is how I found a more serious file-upload validation bypass in the Pro add-on that same year. That one was reported privately and fixed in Everest Forms Pro 1.7.

Pull requests: [#376](https://github.com/themegrill/everest-forms/pull/376), [#430](https://github.com/themegrill/everest-forms/pull/430).
