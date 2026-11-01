---
title: Designing a freight rate engine that four modes can share
seoTitle: Designing a multimodal freight rate engine
date: 2026-07-02
project: kaede
seo: How a multimodal freight rate engine works: chargeable weight, rate bands and minimums, surcharges, distribution chains and immutable rate cards.
summary: Air, sea, road and rail price freight in different units by different rules. How I built one engine for all four, and the rules that kept it correct.
---

Pricing freight sounds like a lookup: origin, destination, weight, price. It isn't. Air charges by the greater of actual and volumetric weight. Sea less-than-container charges by tonne or cubic metre, whichever is more. A full truck is a flat price. A US road shipment may be priced per hundred pounds. On top of that come minimums, weight breaks, fuel and security surcharges, and the margin each party in a chain of agents adds before the customer sees a number.

Kaede's rate engine prices all of it with one calculator. This is how it's put together.

## Start with "what are we charging for?"

Everything hangs off one question: what is the chargeable quantity? It's an enum, and the calculation dispatches on it:

| Basis | Used for | Quantity |
|---|---|---|
| Greater of gross and volumetric | Air | max(kg, L×W×H×pieces ÷ divisor) |
| Weight or measure | Sea LCL | max(tonnes, m³) |
| CBM | Sea LCL | cubic metres |
| Per container | Sea FCL, rail | 1 per container |
| Flat | Road FTL, door to door | 1 per shipment |
| Per piece | Courier | piece count |
| CWT | US road LTL | hundreds of pounds, rounded up |

Getting this right first means everything after it, bands, minimums and surcharges, works in "units" without caring which mode it is.

## The calculation, in order

```
1. find the rate card    route first, then zone-to-zone as a fallback
2. chargeable quantity   by the card's basis
3. weight band           e.g. 0–45 kg, 45–100, 100–300… with a minimum charge
4. round                 by the card's own rule
5. surcharges            fuel, security, handling…
6. distribution chain    each tier's margin, up to the buyer
7. taxes, currency       pinned sell currency, tax lines
→ a breakdown, line by line
```

The calculator is **pure**: given the same input and the same rate data, it returns the same breakdown, and it writes nothing. That makes it safe to call for a quick quote, for a booking, and for a waybill, and trivial to test with fixtures.

### Find the card: specific beats general

A rate card applies to a route (airport to airport, port to port) or, failing that, to zones ("Kathmandu to any EU hub"). Route-specific wins. Zones exist so one card can cover hundreds of lanes without hundreds of rows.

### Bands and minimums

Freight is priced in weight breaks: the rate per kilo drops as weight rises. A shipment is priced at its band's rate, then checked against the card's minimum charge, which can be a hard floor or a minimum that replaces the calculated price entirely.

### Rounding is a business rule

Round half up, always round up, truncate, or round weight to the nearest half kilo: different carriers and markets do different things, and the difference is real money across thousands of shipments. So rounding is a setting on the card, never hard-coded.

### Surcharges have their own basis

A fuel surcharge might be per chargeable kilo, a security fee per shipment, a handling charge a percentage of freight. Each surcharge type declares its own basis, and the engine applies it. One early bug: a "percentage of freight" surcharge calculated against a base that hadn't been set yet, so it came out as zero. Ordering the steps explicitly, and testing each one, is what found it.

### The distribution chain

A rate often passes through several hands: a general agent, a forwarder, a sub-agent, the customer. Each link adds its margin. The engine walks the chain in order and stops at the buyer's position, so a sub-agent sees its own buy price and the customer sees theirs, from the same card.

## Every price leaves a receipt

When a quote, booking or waybill uses a price, the full breakdown is stored as a snapshot: every line, every rate, every surcharge, the card version it came from. Later edits to the card don't change what a customer was quoted. Manual changes, such as an extra charge or a negotiated spot price, are recorded on top as adjustments with who and why, never written over the calculated number.

## Published cards are immutable

Editing a published rate card creates a new version; the old one becomes "superseded". Deleting is for mistakes, not for expiry. This is what makes an audit possible: "what was the rate on 12 March, and why did we charge that?" always has an answer.

## Mode-specific columns, enforced by the database

Air carriers and sea, road and rail carriers live in different tables. A card points at one or the other, never both, and a database check constraint enforces it. An early design had a `carrier_type` text column next to a single id. It drifted out of sync within weeks, and it went.

## What I'd keep

1. **Model the unit first.** Once "chargeable quantity" is right, the rest is arithmetic.
2. **Keep the calculator pure** and put persistence and permissions around it, not inside it.
3. **Make rounding, bases and fallbacks data**, because every market does them differently.
4. **Snapshot every price you show,** and record overrides alongside it, never instead of it.
5. **Version, don't edit,** anything a customer or an auditor might ask about later.
