---
title: Handing out air waybill numbers without handing out the same one twice
seoTitle: Allocating air waybill numbers safely
date: 2026-10-29
project: kaede
seo: How IATA air waybill check digits work, how AWB stock moves between states, and how to allocate numbers safely under concurrency.
summary: An air waybill number is a scarce, audited resource that two people will try to take at the same second. Check digits, stock states, and the locks that keep it honest.
---

Every air shipment travels under an air waybill (AWB) number. Airlines sell those numbers to forwarders in blocks, and they expect every number in every block to be accounted for: used, voided, returned or still on the shelf. Lose one and the airline asks where it went. Hand the same one to two shipments and you have two legal documents with one identity.

So in Kaede the AWB number is not a string field. It is stock.

## The number checks itself

An AWB number has 11 digits: a 3-digit airline prefix, a 7-digit serial, and a check digit.

```
157 - 4012101 2
│     │       └ check digit
│     └ serial
└ airline prefix
```

The check digit is the serial modulo 7:

```php
function awbIsValid(string $raw): bool
{
    $digits = preg_replace('/\D/', '', $raw);          // "157-4012 1012" → "15740121012"
    if (strlen($digits) !== 11) return false;

    $serial = (int) substr($digits, 3, 7);
    return $serial % 7 === (int) $digits[10];
}
```

Mod 7 catches most single-digit typos and many transpositions, which is exactly the class of error a person makes when copying a number off a sheet. It is not a security check: anyone can compute it. It just stops `157-40121013` reaching an airline.

People write AWB numbers in half a dozen ways: `157-40121012`, `157-4012 1012`, sometimes with the origin airport wedged in after the prefix. Normalise first, validate once, and use one implementation everywhere. A second, slightly different check-digit function somewhere else in the codebase is how a bad number slips in.

When a block arrives from the airline, the first and last numbers are validated and the range is expanded into individual stock rows. Each one is checked again on the way in, because a typo in the range is a block of numbers that all look valid but don't belong to you.

## A number has a life

Each stock row moves through a small set of states:

```
ready ──▶ assigned ──▶ issued ──▶ executed
  │          │            │
  └──────────┴────────────┴──▶ voided / cancelled
```

- **Ready**: on the shelf, owned by the business.
- **Assigned**: given to a branch or sub-agent to draw from.
- **Issued**: on a waybill being prepared.
- **Executed**: the waybill is a legal document. This is a one-way door.

The transitions are a table, not a set of `if` statements scattered across controllers. A number cannot go from executed back to ready, and one that is assigned to branch A cannot be pulled by branch B. When we first measured, there were 17 code paths writing a stock status. Several knocked executed numbers back to "assigned" or let expired numbers be issued. Funnelling every change through one service with a legality table fixed whole categories of bugs at once.

Two more rules turned out to matter in practice:

- **Expiry is part of availability.** A number past its valid-to date is refused at the airline counter, so it must never be offered. When we checked, about one in six "ready" numbers had already expired.
- **Freezing is not a status.** A disputed block or an audit takes numbers out of circulation without rewriting their state, so the history stays true.

## Two people, one number

Here is the bug every stock system has at least once. Two users press "new waybill" at the same moment:

```
A: SELECT first ready number  → 4012101 2
B: SELECT first ready number  → 4012101 2
A: UPDATE … SET status = issued
B: UPDATE … SET status = issued      ← same number, twice
```

Both reads were correct when they ran. The fix is to make the read and the write one decision, inside a transaction, with the row locked:

```php
DB::transaction(function () use ($pool, $type) {
    $number = AwbStock::query()
        ->ready()->notExpired()->notFrozen()
        ->where('pool_id', $pool)->where('type', $type)
        ->orderBy('serial')            // issue in sequence, as airlines expect
        ->lockForUpdate()               // SELECT … FOR UPDATE
        ->first();

    if (! $number) throw new OutOfStock();

    $number->update(['status' => 'issued']);
    return $number;
});
```

Now B waits on A's lock, re-reads after A commits, and gets the next number. Postgres's `SKIP LOCKED` would let B take the next free row without waiting, which is faster under heavy load. We chose plain waiting on purpose: airlines audit sequences, and issuing strictly in order with no gaps is worth a few milliseconds when a forwarder issues dozens of numbers an hour, not thousands a second.

### The race moves; follow it

Locking the pick is the obvious part. The less obvious races came later:

- **Decisions made on a stale copy.** Release, reassign and status changes checked the state on the model the request had loaded, then wrote inside a transaction. By then another request could have moved it. The rule now: lock the row and re-read it inside the transaction, then decide.
- **Releasing what is no longer yours.** Two "give this number back" clicks both loaded a case holding a number. The first released it; another case took it; the second release freed *that* case's number. Re-reading the holder under the lock makes the second release a no-op.
- **The database as the last word.** A unique index allows one live assignment per number. If two creates still slip past the application check, the second hits the index. We catch that specific violation and answer it in plain language, the same message the application check would have given, instead of a 500.

## What I'd tell anyone building this

1. Treat scarce identifiers as inventory with states, not strings.
2. One validator, one transition table, one service that writes status.
3. Lock, re-read, decide, write. In that order, every time.
4. Let a unique index be the backstop, and make its refusal readable.
5. Measure the real data. The worst bugs here were found by counting rows, not by reading code.
