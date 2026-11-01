---
title: Taking money on a government website
date: 2022-12-14
project: kalimati
summary: How Kalimati's traders came to pay their dues from their phones through eSewa and Khalti, and the checks that keep a public payment page honest.
---

Kalimati's traders rent stalls and owe dues every day. For years that meant a queue at the market office, cash in hand. In the second half of 2022 I added online payment to the market's website: a trader enters their shop number, sees today's invoice, and pays through **eSewa**, **Khalti** or a bank transfer.

Building a payment button is easy. Building one on a government site that will be poked at by people who'd like their dues to be cheaper is not.

## The rule: the browser is never the source of truth

A payment flow has an awkward shape. The trader leaves your site, pays on the gateway's site, and comes back carrying a receipt. Everything about that return trip is in the trader's hands: the URL, the query string, the amount, the reference number.

So the return trip only ever starts a check. It never finishes one.

## Four checks

**1. The amount must match the invoice, to the paisa.**

When the trader comes back, the amount the gateway reports is compared with the invoice the server already holds. Anything else, including a rounding difference, is refused rather than "mostly" accepted.

**2. A reference can be used once.**

Every gateway issues a reference for a payment. Before accepting one, the server checks it has never seen that reference before, against both the reference column and the stored gateway payload. A replayed receipt from last week, or from someone else's shop, gets nowhere.

**3. Unverified until the gateway says otherwise.**

A returning payment is saved with the status *unverified*, and a queued job asks the gateway directly, server to server, whether the payment really happened and for how much. Only that answer marks the dues as paid. If the gateway is slow or down, the job retries; the trader sees "being confirmed", not a false "paid".

**4. Invoices belong to a day.**

Dues are daily, and each day's invoice rolls over at midnight Nepal time. A payment started against yesterday's invoice and finished after midnight is refused instead of being applied to the wrong day's books. It's a rare case, but money in the wrong day is a reconciliation headache that lands on a clerk months later.

## When providers integrate directly

Some payment providers wanted to build the flow into their own apps. For them I designed a small API with two calls: fetch the invoice for a shop, and complete it.

- Each provider signs its requests with a short-lived JWT using its own key, and requests are accepted only from that provider's allow-listed servers.
- Keys rotate every quarter, and providers commit to switching within 24 hours.
- Completing an invoice cross-checks the shop, the amount and the provider's own reference. Each failure has a named error, so the provider knows whether to fix their request, retry later, or call someone.
- During maintenance the API says so explicitly and asks providers to queue and retry. A dropped payment is the worst outcome, so the API never fails silently.

## Back to the books

The market's accounts live in its own office software, not on the website. Every night the day's online payments are exported back to that system as CSV, byte for byte in the format it expects, down to the Windows line endings. The office closes the day with the online and counter payments in one place.

## What it changed

Traders can pay from a phone instead of a queue, and the office no longer has to count cash for every due. The people most likely to probe the payment page, traders who'd like their dues to be cheaper, have no way to make that happen.

[The Kalimati case study](/work/kalimati)
