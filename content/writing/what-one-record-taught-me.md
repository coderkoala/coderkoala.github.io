---
title: What building IATA ONE Record taught me about linked data
seoTitle: What IATA ONE Record taught me
date: 2026-11-01
project: kaede
seo: Lessons from implementing IATA ONE Record JSON-LD in a cargo ERP: stable URIs, one data source, idempotent events and honest errors.
summary: Air cargo is moving from messages to linked data. Lessons from serving ONE Record from a real cargo system, beyond what the spec tells you.
---

For forty years air cargo has run on messages. A forwarder sends the airline an FWB (the waybill), the airline sends back FSUs (status updates), each one a block of fixed-format text or, more recently, XML. Since January 2026 IATA prefers something different: **ONE Record**. Instead of sending each other copies, every party publishes its data as linked objects on its own server. Partners read them, subscribe to changes, and add events.

The spec is JSON-LD over a small REST API. A waybill becomes a `cargo:Waybill` at a permanent URI, linked to a `cargo:Shipment`, its `cargo:Piece`s, the `cargo:Company`s involved, and a stream of `cargo:LogisticsEvent`s. Serving that from Kaede taught me more than the spec does.

## 1. An identifier is a promise you can't take back

A ONE Record object's URI must never change. The tempting choice is the AWB number: it's what everyone calls the shipment. But an AWB number can change before the waybill is executed (a typo, a carrier switch, a reissue), and a URI that moves breaks every partner that stored it.

So Kaede's ids are the database's, prefixed by kind:

```
/logistics-objects/waybill-48213
/logistics-objects/shipment-48213
/logistics-objects/piece-90551
/logistics-objects/movement-48213-2   ← the second flight leg
```

The business number is a property on the object, not its name. The lesson generalises: never put a mutable business key in a URL you publish.

## 2. One source of truth, many renderings

Kaede already sends Cargo-IMP and Cargo-XML. The worst outcome would be ONE Record saying one weight while the FWB says another. So all three read the same mapped shipment data, and ONE Record is just another renderer of it.

Parties come from the waybill's frozen snapshot, not the live contact record. An executed waybill is a legal document; if a customer later changes their address, the waybill should still say what it said when it flew.

## 3. JSON-LD has three shapes, and partners use all of them

JSON-LD can arrive compacted, expanded or flattened, with prefixes or full IRIs, values as plain strings or as `{"@value": …}` objects. A partner posting an event can use any of them. Pulling in a full JSON-LD processor for a handful of fields felt heavy, so Kaede reads the shapes it needs directly and refuses what it can't read with a clear error. It doesn't guess.

Going out, we always serve one predictable compacted form with a fixed `@context`. Be strict in what you emit and tolerant, but explicit, in what you accept.

## 4. Events need idempotency, and the spec doesn't give you a key

Partners post events ("arrived", "departed", "delivered") to a shipment. Networks retry. Without care, a retried "departed" becomes two departures.

ONE Record has no idempotency header, so repeats are recognised by **content**: the same status code for the same pieces at the same moment is the event already recorded. An undated event, meaning "now", repeats a recent one only if the code, pieces and station all match. The check and the write happen under a per-shipment lock, so two copies of one event arriving together can't both pass the check.

## 5. Several codes, one milestone, and the code still has to round-trip

IATA status codes don't map one-to-one onto a system's milestones. "Received from shipper" and "freight on hand" can both move a shipment to the same internal state. But a partner who posted one code expects to read that code back, not its sibling. So the code that arrived is stored with the status row, and reported back unchanged in ONE Record and in the classic messages alike.

## 6. Every inbound event goes through the same door

It's tempting to let an integration write status directly: it's "trusted". Instead, every ONE Record event goes through the same status service a person's click does. Backward moves are refused, routing rules hold, a master's house waybills follow, and webhooks fire. An integration that bypasses your rules is a second, worse version of your product.

## 7. Errors are part of the contract

The spec defines an `api:Error` shape. Every failure on the ONE Record routes is rewritten into it, including the ones raised by generic middleware: bad key, rate limit, maintenance. Each has a stable, named code (`one_record_event_for_mismatch`, `one_record_piece_retired`, …) so a partner's developer can tell "fix your request" from "retry later" without reading our logs.

Two small rules made a big difference:

- **A miss is 404, never 403.** Telling a stranger "that exists but isn't yours" leaks the existence of other companies' shipments.
- **Times must carry an offset.** An event dated `2026-10-30T14:00` with no zone is refused, not read as local time. In a business that crosses twelve time zones in a day, a guessed offset is a wrong record.

## 8. Unknown is left out, never guessed

If Kaede doesn't know a value (an unmapped code, a free-text station, a missing weight), the property is absent. Linked data makes it easy to fill gaps with defaults that look authoritative. A missing value is honest. A plausible wrong one gets copied into three other companies' systems.

## Where it goes next

Revisions and historical reads (`?at=`), subscriptions both ways, dangerous goods and security declarations, ULD build-up and the first step of change requests are served now. Every time, the hard part was never JSON-LD itself. It was deciding what the record is, who may change it, and what happens when two people say different things about it at the same time.
