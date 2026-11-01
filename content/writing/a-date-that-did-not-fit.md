---
title: A date that didn't fit in an integer
date: 2022-01-31
project: laravel
summary: The year 4123 crashed Laravel's date validation on 32-bit PHP. Here's how I found it, and the four-line fix that shipped in Laravel 8.
---

Every validator has one job: say yes or no. It should never fall over.

In January 2022 I found an input that made Laravel's `date` rule do exactly that. Type `12-2-4123` into a date field that relied only on server-side validation, and on some servers you didn't get "The date is not a valid date." You got a 500 error.

## Finding it

It turned up on an Apache and PHP stack running a 32-bit build. Laravel's `validateDate` asked PHP's `strtotime()` whether the string was a date it understood:

```php
if ((! is_string($value) && ! is_numeric($value)) || strtotime($value) === false) {
    return false;
}
```

`strtotime` returns a Unix timestamp, a count of seconds since 1970. A 32-bit integer runs out in January 2038, which is the famous Year 2038 problem. Ask for a date past that and, instead of quietly returning `false`, PHP raised:

```
ErrorException: strtotime(): Epoch doesn't fit in a PHP integer
```

Laravel turns PHP warnings into exceptions, so a bad date from a form brought down the whole request. Any public form with a date field could be made to throw, just by typing a year a little too far away.

## The fix

The rule should behave the same everywhere: an unparseable date is invalid, not fatal. So I wrapped the check and treated a failure to parse as what it is, a no:

```php
try {
    if ((! is_string($value) && ! is_numeric($value)) || strtotime($value) === false) {
        return false;
    }
} catch (Exception $e) {
    return false;
}
```

I opened the issue ([#40686](https://github.com/laravel/framework/issues/40686)) and the pull request ([#40690](https://github.com/laravel/framework/pull/40690)) the same day. It was merged into Laravel 8.x that afternoon.

## Why a tiny fix matters

- **Validators are a security boundary.** Anything that turns user input into a 500 is a cheap way to fill logs, trip alerts and find soft spots.
- **Environment is input too.** The same code was fine on 64-bit PHP. Your users don't choose your servers, and a library doesn't get to choose its users' servers.
- **Fail closed, quietly.** The right answer to "I can't read this date" is "invalid", with the same message as any other bad date.

It's four lines. It's also in every Laravel 8 app that updated after January 2022, which is a nice thing to have helped with.
