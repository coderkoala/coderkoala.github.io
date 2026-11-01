---
title: Kaede
order: 1
kind: Cargo ERP
years: 2022–now
role: Designed and built it, end to end
summary: The system a freight forwarder runs on. It reads the paperwork, learns how your office works, and talks to airlines, customers and drivers for you.
stack: Laravel, Vue 3, PostgreSQL, WebSockets, Flutter, Playwright
facts:
  - Native IATA ONE Record
  - Learns from your own history
  - Twelve chat channels, one desk
link: https://dahal.tech/kaede/index.html
linkLabel: dahal.tech/kaede
steps:
  - Booking email lands :: Kaede reads the attachment and drafts the waybill. You confirm.
  - Routing suggests itself :: Learned from your history. The right lane is nearly always top five.
  - Boxes scanned onto flight :: The warehouse app scans in batches. Nothing moves without a person.
  - Airline told in ONE Record :: Native ONE Record and Cargo-XML. Carrier portals updated by robot.
  - Customer asks on WhatsApp :: Every chat app lands in one desk, answered with live tracking.
  - Ask the numbers anything :: Which lanes lost margin last month? Plain words, rows attached.
---

Freight forwarding runs on paper pretending to be software: waybills retyped three times, rates in a spreadsheet one person understands, drivers on the phone, customers on WhatsApp.

Kaede started as a fix for one office's air waybills. Now it runs the whole forwarder, and it does the reading, remembering and chasing that used to take people hours.

## It reads the paperwork

Drop a booking email, an invoice or a packing list onto Kaede and it extracts what matters and drafts a fill plan for the waybill. Every value is shown with where it came from, and nothing is saved until a person confirms it.

Every uploaded document is read once, stored as text and searchable from the file explorer. Kaede recognises the kind of document on upload, refuses to treat identity documents as anything else, and runs OCR in the browser on a model fine-tuned on cargo paperwork.

## It learns how your office works

A learning engine harvests every saved record. It learns a shipper's usual agent, issuer, bill-to and HS codes, the consignee's notify party, the currency by destination, and the routings your office actually flies. Suggestions appear where people already type, as chips they can accept or ignore, and the right routing is in the top five almost every time.

Rates work the same way. The rate builder suggests prices from your rate tables, with your own quoting history beside them for reference.

## It talks for you

- **Airlines.** Native **IATA ONE Record**, alongside Cargo-XML. Where a carrier only offers a web portal, Kaede drives the portal itself: it reads tracking from Cathay Cargo and Etihad Cargo, and does the daily booking entry on iCargo portals in minutes instead of hours. Anything a person must decide at the carrier stays with a person.
- **Customers.** WhatsApp, Viber, Telegram, Messenger, Instagram, LINE, WeChat, SMS, email, Teams, Slack and a web chat all land in one Cargo Desk. A chat becomes a case, a case becomes a quote, and tracking links are shared from the same thread. Every reply goes out in English, Nepali or Japanese.
- **Drivers and the warehouse.** A Flutter app for drivers and floor staff: dispatch runs, scan batches that load a flight box by box, shift check-in with location, and sign-in by QR code.

## It answers questions

Cargo Insights answers questions about your operation in plain words, such as "which lanes lost margin last month?" or "who shipped the most to Narita this quarter?", and shows the shipments behind every number. It's tested against a fixed set of known questions before every change.

## Beyond air

Sea and road run on the same spine: voyages and sailing schedules, container free-time and detention clocks, and through routes priced leg by leg. Leave and payroll are built for South Asia, not adapted from the US: festival and home leave are first class, and attendance feeds payroll directly.

## Built to be trusted

- Executed waybills lock. Every change keeps who, when, before and after, chained with SHA-256 and verified every night.
- Public tracking links use unguessable, hashed, expiring tokens, so a stranger can't walk your shipments.
- A full integration API with per-tenant keys, IP allowlists and OData reads, for partners who want to plug in.
- Multi-tenant from the ground up, with billing, so one install serves many forwarders.
