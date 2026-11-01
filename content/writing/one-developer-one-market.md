---
title: One developer, one market, no ads
date: 2022-07-19
summary: Building the website and Android app for Kalimati, the market that sets vegetable prices for half of Kathmandu, on my own.
---

Kalimati Fruits and Vegetables Market supplies 60 to 70 percent of the Kathmandu valley's produce. Its morning price board decides what a kilo of tomatoes costs in a huge number of shops that day. Traders, journalists, shoppers and economists all want those numbers.

I built the new website and its Android app on my own: design, backend, admin, content, deployment.

## What it does

- **Daily prices.** Each morning staff enter the minimum, maximum and average price for every commodity, and it's public within minutes.
- **Arrivals.** How much of each vegetable, fruit and fish came in that day.
- **History.** Price and arrival trends over time, and side-by-side comparisons between dates.
- **Traders.** Dues and notices, without a trip to the office.
- **A notice centre.** Tenders, public bills, right-to-information reports, and daily pesticide residue test results.
- **Nepali and English** throughout.
- **A newsletter** that sends only one thing: the day's prices.

## No ads, on purpose

The Android app is minimal and has no ads. Price information from a public market is something consumers have a right to, and an ad-stuffed app gets in the way of that. The app opens to the day's prices and doesn't ask for anything.

## The admin is the real product

The public site is what people see. The admin is what decides whether the numbers go up at 7 a.m. or at noon. It had to work for staff who are not technical and who have a queue of traders in front of them:

- Role-based permissions, so each person sees only the parts they handle
- Two-factor sign-in, because it's a government site
- User impersonation, so I could see exactly what a staff member saw when something went wrong
- Sortable, searchable tables over everything

## What I'd do differently

When it launched I wrote publicly that it delivered little in terms of looks and interaction, and I meant it. A solo build on a deadline gets the data right first. Since then, design has become half of what I care about. If I built it today, the price board would be the homepage, readable on a cheap phone in direct sunlight, and nothing else would compete with it.

I also wanted Nepal Bhasa alongside Nepali and English, and that still matters to me. Language is part of access.

See it: [kalimatimarket.gov.np](https://kalimatimarket.gov.np) · [the case study](/work/kalimati)
