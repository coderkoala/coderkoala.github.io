---
title: Kalimati Market
order: 2
kind: Government platform
years: 2021–2025
role: Solo, from design to deployment
summary: Nepal's largest wholesale produce market, run online. Daily prices for everyone, an ad-free Android app, and dues that traders pay from their phones through eSewa, Khalti or the bank.
stack: Laravel, MySQL, Queues, libsodium, JWT, Android
facts:
  - Dues paid online, fraud-checked
  - Payment API for gateways
  - Ad-free Android app
link: https://kalimatimarket.gov.np
linkLabel: kalimatimarket.gov.np
cover: /media/work/kalimati.jpg
shots:
  - /media/kalimati/prices.jpg :: Today's wholesale prices, 108 commodities, and the app one tap away. :: 4x2
  - /media/kalimati/phone.jpg :: Built for the phone in a trader's pocket. :: 2x3
  - /media/kalimati/arrivals.jpg :: What came into the market today, commodity by commodity. :: 4x1
steps:
  - Market office closes the day :: Prices, arrivals and dues sync from the market's own system.
  - The board goes live :: Minimum, maximum and average, published for everyone.
  - Prices reach your pocket :: An ad-free Android app and a daily price newsletter.
  - A trader checks their dues :: Shop number in, today's invoice out.
  - They pay from their phone :: eSewa, Khalti or bank. Amounts and references are verified.
  - The ledger squares itself :: Payments flow back to the market's books overnight.
---

Kalimati supplies 60 to 70 percent of the Kathmandu valley's fruit and vegetables. Its morning price board decides what a kilo of tomatoes costs across half the city.

I built and have run its platform on my own since 2021: the public site, the Android app, the admin the market's staff use every morning, and the parts nobody outside sees, which is where most of the work is.

## The public side

- **Daily prices** for over a hundred commodities: minimum, maximum and average, with history, trends and day-to-day comparisons.
- **Arrivals:** how much of each vegetable, fruit and fish came in, with six-month trends.
- **Notices:** tenders, public bills, right-to-information reports and daily pesticide residue results.
- **Nepali and English** throughout.
- **An Android app** with no ads, because the public has a right to this information, and a newsletter that sends only one thing: the day's prices.

## Paying dues without a queue

Traders rent stalls and owe dues daily. They used to settle them in person. Now they enter their shop number, see today's invoice, and pay through **eSewa**, **Khalti** or a bank transfer.

Money on a government site gets attacked, so the checks are strict:

- The amount paid must equal the invoice to the paisa, or it's refused.
- Every gateway reference can be used once. A replayed receipt is rejected.
- A payment is recorded as unverified until a queued job confirms it with the gateway, server to server. The browser's word is never enough.
- Invoices roll over at midnight Nepal time. A payment started against yesterday's invoice is refused rather than applied to the wrong day.

## An API for payment providers

For gateways that integrate directly, I designed and documented a small API. It has two calls: fetch a shop's invoice, and complete it.

- Requests are signed with short **JWTs** (HS512), keyed per provider, and accepted only from **allow-listed IPs**.
- Signing keys rotate quarterly, with providers ready to switch within 24 hours.
- Completing an invoice cross-checks the shop, the amount and the provider's reference. Any mismatch is refused, with a named error.
- During maintenance, the server tells providers to queue and retry instead of silently losing a payment.

## The nightly handshake

The market keeps its books in its own office system. Every day it pushes prices, arrivals and dues to the website as signed CSV uploads, and pulls the day's online payments back.

- Each upload replaces that day's data inside a single transaction, so a half-finished import never shows.
- Checksums and totals are verified, and a second upload for the same day is ignored.
- Exports are byte-exact CSV with Windows line endings, because that's what the office software reads.
- Sensitive values are encrypted with **libsodium**, and every import reports back through telemetry.

## The admin

Role-based permissions, two-factor sign-in, impersonation for support, menu and notice management, and searchable tables over everything. Staff who aren't technical publish the day's numbers without calling anyone.

## What I'd do differently

When the new site launched I wrote publicly that it delivered little in terms of looks, and I meant it. A solo build for a government board gets the data and the money right first. If I built it today, the price board would be the homepage, readable on a cheap phone in direct sunlight. I'd also still like to add Nepal Bhasa.
