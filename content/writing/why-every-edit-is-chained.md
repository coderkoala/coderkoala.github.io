---
title: Why every edit in Kaede leaves a fingerprint
date: 2026-10-03
project: kaede
summary: An air waybill is a contract. Here's how Kaede makes a quiet edit to its history show up, using nothing more exotic than SHA-256.
---

An air waybill is a contract between a shipper and a carrier. Once it's executed, its routing, rating, declared values and parties shouldn't change. Leave balances and payroll are the same: money and people's time.

Most systems keep an audit log. The trouble with an ordinary audit log is that it's just another table. Anyone who can edit the data can usually edit the log too, and nothing would look wrong.

## Chaining the history

In Kaede, every entry in the audit trail carries a hash of itself and of the entry before it:

```
row_hash = sha256(prev_hash || canonical(row))
```

So each hash depends on every entry before it. Change a number, delete a row, or back-date an entry, and the hash at that point stops matching. So does every hash after it.

A few details matter more than the hashing itself:

- **Hash the facts, not the housekeeping.** The hash covers what the record says happened: who, which record, the values, the effective date. It leaves out columns that routine maintenance is allowed to touch, like `updated_at`, so normal operations never look like tampering.
- **Canonical form.** The row is serialised the same way every time, so the same facts always produce the same hash.
- **Same transaction.** The stamp is written in the same database transaction as the change it records. There's no window where one exists without the other.

## Checking it every night

A chain nobody checks is decoration. Kaede walks the chain every night and alerts the developers the moment one entry doesn't match.

It doesn't re-check everything from the start each night. Each successful run records where it stopped, and the next run starts there, first confirming that row is still there with the same hash. So the nightly cost is one day's rows, and the part already verified can't be edited without the next walk noticing. A break doesn't move the checkpoint either: it's reported every night until somebody deals with it.

## Evidence, not prevention

It's worth being honest about what this does. Someone with full database access could rewrite a row and recompute every hash after it. What they can't do is change history *by accident*, or quietly, without leaving a trace a nightly check will catch. That's what nearly all real tampering looks like: a quick fix to a number, under pressure, by someone who didn't think anyone would look.

For a freight forwarder, that means that when a customer, an airline or an auditor asks "who changed this, and when?", there's an answer they can trust.
