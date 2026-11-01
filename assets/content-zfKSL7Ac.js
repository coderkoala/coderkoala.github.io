var e=`---
title: GenericProperties
order: 3
kind: Real estate CRM
years: 2020–21
role: Engineer, United Real Estate
summary: Moved a US brokerage from Zoho to Microsoft Dynamics, then built what Dynamics was missing.
stack: Node.js, Dynamics 365, C#, PHP, Azure AD, Power Automate
facts:
  - Millions of agent records
  - Matches mapped in seconds
  - Open sourced with permission
link: https://github.com/coderkoala/GenericProperties
linkLabel: coderkoala/GenericProperties
loop: /media/work/generic-properties
youtube: cxSg2U6NzUE
steps:
  - Zoho moves to Dynamics :: Every record migrated by tools I wrote, not by hand.
  - Documents follow :: Years of files carried from Zoho into SharePoint.
  - A new lead arrives :: It lands in Dynamics with the fields the team actually uses.
  - Nearby agents are found :: A Node service searches millions of agent records by location.
  - The map draws itself :: Every match on one map, in a few seconds.
  - Someone is told :: Power Automate sends the email and opens a Planner card.
---

A brokerage with millions of agent records needed to answer one question fast: who is closest to this lead?

Dynamics 365 held the data but couldn't answer that quickly. I wrote a Node microservice that talks to the Dynamics Web API through Azure AD, does the geography itself, and draws the result on a map.

## Around it

- C# plugins for Leads, Opportunity and Super Obituaries
- Schema tooling that replays customisations, so changes survive between environments
- A PHP (Slim) server for Azure AD sign-in against Dynamics
- Migration tools for records and documents out of Zoho
`,t=`---
title: Kaede
order: 1
schema: SoftwareApplication
seoTitle: Kaede, freight forwarding software built in Nepal
seo: Kaede is cargo and freight forwarding software built in Nepal: air waybills and AWB stock, IATA ONE Record, rates, door-to-door delivery and payroll.
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
cover: /media/work/kaede.jpg
shots:
  - /media/kaede/routing-suggest.webp :: Learned from the office's own history: its usual routings, one click away. :: 6x2
  - /media/kaede/routing-applied.webp :: One click later: both legs, distances, flying time, the connection and what's still missing. :: 6x3
  - /media/kaede/kaede-map.webp :: Real flown legs, every hop, weighted by chargeable weight. :: 4x2
  - /media/kaede/kaede-cargomsg-panel.webp :: Cargo-IMP and Cargo-XML, built and checked line by line before they leave. :: 2x2
  - /media/kaede/kaede-outlook.webp :: Outlook: next month's forecast, customers to call, and what moved. :: 3x2
  - /media/kaede/kaede-pdf-awb.webp :: All twelve IATA air waybill copies, printed exactly. :: 3x2
  - /media/kaede/kaede-pivot-drill.webp :: Every number opens the shipments behind it. :: 6x1
  - /media/kaede/kaede-designer.webp :: Design your own courier waybill, block by block, from the keyboard. :: 4x2
  - /media/kaede/kaede-letterhead-designs.webp :: Nine letterhead designs for every printed document. :: 2x2
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
`,n=`---
title: Kalimati Market
order: 2
kind: Government platform
years: 2021–2025
role: Solo, from design to deployment
seo: Kalimati Market's platform: daily prices, an ad-free Android app, and dues paid online via eSewa and Khalti. Built solo.
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
`,r=`---
title: A date that didn't fit in an integer
date: 2022-01-31
project: laravel
summary: The year 4123 crashed Laravel's date validation on 32-bit PHP. Here's how I found it, and the four-line fix that shipped in Laravel 8.
---

Every validator has one job: say yes or no. It should never fall over.

In January 2022 I found an input that made Laravel's \`date\` rule do exactly that. Type \`12-2-4123\` into a date field that relied only on server-side validation, and on some servers you didn't get "The date is not a valid date." You got a 500 error.

## Finding it

It turned up on an Apache and PHP stack running a 32-bit build. Laravel's \`validateDate\` asked PHP's \`strtotime()\` whether the string was a date it understood:

\`\`\`php
if ((! is_string($value) && ! is_numeric($value)) || strtotime($value) === false) {
    return false;
}
\`\`\`

\`strtotime\` returns a Unix timestamp, a count of seconds since 1970. A 32-bit integer runs out in January 2038, which is the famous Year 2038 problem. Ask for a date past that and, instead of quietly returning \`false\`, PHP raised:

\`\`\`
ErrorException: strtotime(): Epoch doesn't fit in a PHP integer
\`\`\`

Laravel turns PHP warnings into exceptions, so a bad date from a form brought down the whole request. Any public form with a date field could be made to throw, just by typing a year a little too far away.

## The fix

The rule should behave the same everywhere: an unparseable date is invalid, not fatal. So I wrapped the check and treated a failure to parse as what it is, a no:

\`\`\`php
try {
    if ((! is_string($value) && ! is_numeric($value)) || strtotime($value) === false) {
        return false;
    }
} catch (Exception $e) {
    return false;
}
\`\`\`

I opened the issue ([#40686](https://github.com/laravel/framework/issues/40686)) and the pull request ([#40690](https://github.com/laravel/framework/pull/40690)) the same day. It was merged into Laravel 8.x that afternoon.

## Why a tiny fix matters

- **Validators are a security boundary.** Anything that turns user input into a 500 is a cheap way to fill logs, trip alerts and find soft spots.
- **Environment is input too.** The same code was fine on 64-bit PHP. Your users don't choose your servers, and a library doesn't get to choose its users' servers.
- **Fail closed, quietly.** The right answer to "I can't read this date" is "invalid", with the same message as any other bad date.

It's four lines. It's also in every Laravel 8 app that updated after January 2022, which is a nice thing to have helped with.
`,i=`---
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

\`\`\`
1. find the rate card    route first, then zone-to-zone as a fallback
2. chargeable quantity   by the card's basis
3. weight band           e.g. 0–45 kg, 45–100, 100–300… with a minimum charge
4. round                 by the card's own rule
5. surcharges            fuel, security, handling…
6. distribution chain    each tier's margin, up to the buyer
7. taxes, currency       pinned sell currency, tax lines
→ a breakdown, line by line
\`\`\`

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

Air carriers and sea, road and rail carriers live in different tables. A card points at one or the other, never both, and a database check constraint enforces it. An early design had a \`carrier_type\` text column next to a single id. It drifted out of sync within weeks, and it went.

## What I'd keep

1. **Model the unit first.** Once "chargeable quantity" is right, the rest is arithmetic.
2. **Keep the calculator pure** and put persistence and permissions around it, not inside it.
3. **Make rounding, bases and fallbacks data**, because every market does them differently.
4. **Snapshot every price you show,** and record overrides alongside it, never instead of it.
5. **Version, don't edit,** anything a customer or an auditor might ask about later.
`,a=`---
title: Integrating eSewa and Khalti in Laravel without trusting the redirect
seoTitle: eSewa and Khalti integration in Laravel, done safely
date: 2026-11-01
project: kalimati
seo: How to integrate eSewa and Khalti payments in Laravel safely: server-side verification, exact amounts, single-use references, queues and daily rollover.
summary: Most eSewa and Khalti tutorials stop when the success page loads. That's exactly where the fraud starts. A production pattern from a government payment page, for any Laravel app in Nepal.
---

eSewa and Khalti are how Nepal pays online. Integrating either into a Laravel app takes an afternoon: redirect the customer to the gateway, wait for them to come back, mark the order paid.

That last step is where most integrations go wrong. I built online payments for Kalimati Market's traders, on a government site where the people paying have every reason to want their dues to be cheaper. This is the pattern that held up.

## The one rule

**The redirect back to your site is a claim, not a proof.**

When the customer returns from eSewa or Khalti, the URL carries an amount, a reference and a status. All of it passed through the customer's browser, so all of it can be edited. A success page that marks an order paid from those query parameters can be fooled by anyone who copies a URL and changes a number.

So the return trip only **starts** verification. Your server finishes it by asking the gateway directly.

## The shape of a safe flow

\`\`\`
1. Create a payment row     status = pending, amount = invoice total, our own uuid
2. Send the customer        to eSewa / Khalti with our uuid as the product id
3. Customer comes back      we read the gateway's reference from the request
4. Record it as unverified  never "paid" yet
5. Queue a verification     server → gateway: "did this reference pay this amount?"
6. Gateway says yes         status = verified, mark the dues paid
\`\`\`

Steps 4 and 5 are the ones tutorials skip.

## The four checks

### 1. The amount must match exactly

Compare the amount the gateway reports with the invoice **you** stored, not with anything from the request. Compare as money, not as floats:

\`\`\`php
// Store paisa as integers. Never compare floats for money.
if ((int) round($reported * 100) !== $payment->amount_paisa) {
    $payment->markRefused('amount_mismatch');
    return;
}
\`\`\`

Khalti already works in paisa. eSewa works in rupees. Convert once, at the boundary.

### 2. A reference can be used once

Every successful payment has a gateway reference: eSewa's reference id, Khalti's \`pidx\` or transaction id. Before accepting one, make sure you've never seen it, and let the database enforce it:

\`\`\`php
Schema::table('payments', function (Blueprint $t) {
    $t->string('gateway')->index();
    $t->string('gateway_reference')->nullable();
    $t->unique(['gateway', 'gateway_reference']);
});
\`\`\`

A replayed receipt from last week, or from someone else's order, hits the unique index and goes nowhere.

### 3. Verify server to server, in a queue

Both gateways offer a server-side lookup: eSewa's transaction verification or status check, and Khalti's lookup by \`pidx\`. Call it from a queued job, not from the controller handling the redirect:

\`\`\`php
class VerifyGatewayPayment implements ShouldQueue, ShouldBeUnique
{
    public $tries = 5;
    public $backoff = [10, 30, 60, 300, 900];

    public function __construct(public Payment $payment) {}
    public function uniqueId(): string { return $this->payment->uuid; }

    public function handle(GatewayClient $gateway): void
    {
        $result = $gateway->lookup($this->payment);   // server → gateway, with your secret key

        match (true) {
            $result->isComplete() && $result->amountPaisa === $this->payment->amount_paisa
                => $this->payment->markVerified($result->reference),
            $result->isPending() => $this->release(60),   // gateway still settling: try again
            default => $this->payment->markFailed($result->status),
        };
    }
}
\`\`\`

Why a queue:

- **Gateways are slow sometimes.** A customer shouldn't stare at a spinner while you wait, and a timeout shouldn't lose a payment.
- **Retries are free.** If the gateway is down, the job tries again later instead of the payment silently staying unpaid.
- **One verification per payment.** \`ShouldBeUnique\` stops two refreshes of the success page from verifying twice.

The customer sees "payment received, confirming" until the job finishes. That's honest, and in practice it takes seconds.

### 4. Know which day it belongs to

If invoices are daily, as Kalimati's dues are, a payment started at 11:58 p.m. and finished at 12:01 a.m. belongs to an invoice that no longer exists. Refuse it rather than apply it to the wrong day. In Nepal that boundary is midnight Nepal time (UTC+5:45), not your server's UTC.

## Things that bite in Nepal specifically

- **Sandbox and live keys differ in more than the key.** The test endpoints and merchant codes are different hosts and values. Keep them in config, not in code, and fail loudly if production is pointed at a sandbox.
- **Amounts include service charges.** A gateway can report a total that includes its own fee or tax fields. Decide which number must equal your invoice, write it down, and test it in the sandbox with a real-looking amount, not 10 rupees.
- **The return URL can arrive twice.** People press back, refresh, or double-tap. Make the return handler idempotent: look up by your own uuid, and if it's already verified or queued, just show the status.
- **Bank transfer is still a payment method.** Many traders pay at a bank. Give staff a way to record those against the same invoice, so online and counter payments reconcile in one place.

## If a provider integrates with you

Sometimes a wallet or bank wants to build the payment into its own app and call your API instead. Then you're the one being called, so turn the rules around:

- Give each provider its own signing key and accept short-lived signed tokens (JWT, HS512 at minimum), only from their allow-listed IPs.
- Rotate keys on a schedule, and agree in advance how fast they'll switch.
- Make the completion call re-check the shop or order, the amount and their reference, and answer every refusal with a named error.
- During maintenance, say so explicitly, so they queue and retry instead of losing the payment.

## The checklist

1. Treat the redirect as a claim. Verify server to server.
2. Store money as integers, and compare against your own invoice.
3. Make the gateway reference unique in the database.
4. Verify in a unique, retrying queue job.
5. Respect your business day boundary, in Nepal time.
6. Make the return handler safe to hit twice.

If you'd like this built into your Laravel app, [I do this for a living](/hire).
`,o=`---
title: Finding the nearest agent among millions
date: 2021-05-25
project: generic-properties
summary: A US brokerage moved from Zoho to Microsoft Dynamics. The data moved fine; the question it couldn't answer quickly was "who is closest to this lead?"
---

United Real Estate is a US brokerage with a very large network of agents. In 2020 they were moving their CRM from Zoho to Microsoft Dynamics, and I was brought in as a freelancer to design it, customise it and move everything across.

## Moving house

A CRM migration is mostly unglamorous work, and it's where most of the risk is.

- **Records.** I wrote tools to carry leads, contacts and opportunities from Zoho into Dynamics. Nobody re-keyed anything.
- **Documents.** Years of files lived in Zoho's file store. Another tool moved them into SharePoint and linked them to the right records.
- **Customisations.** Dynamics needed custom entities and fields. Rather than click them in by hand per environment, I wrote schema tools that applied them from code, so the same change could be replayed reliably.
- **Plugins.** C# plugins for the Leads, Opportunity and Super Obituaries modules held the business rules.
- **Automation.** Power Automate flows sent the emails and notifications and created Planner cards, so a new lead turned into someone's task without anyone copying it over.

## The question Dynamics couldn't answer fast

A lead comes in for a house. Which agents are nearest?

Dynamics held every agent, but answering a geographic question over millions of records through its standard views was slow. So I built a small service beside it:

1. A Node.js microservice signs in through Azure Active Directory and reads agent records over the Dynamics Web API.
2. It does the geography itself: given a lead's location, it works out which agents are close.
3. The results are drawn on a map, all of them, in a few seconds.

A small PHP server handled the Azure AD side for other tools that needed to read from Dynamics.

## Working with the people who use it

I worked directly with the data administrators and agents. The best changes came from watching them use it: a field in the wrong place, a step that needed one click too many. Small things, but they're the difference between a system people use and one they work around.

With the client's permission, the tools are open source: [GenericProperties](https://github.com/coderkoala/GenericProperties), [MSVProperties-php](https://github.com/coderkoala/MSVProperties-php), [DynamicsWebApi](https://github.com/coderkoala/DynamicsWebApi), and the [Leads](https://github.com/coderkoala/DynamicsCRMLeads), [Opportunity](https://github.com/coderkoala/DynamicsCRMOpportunity) and [Super Obituaries](https://github.com/coderkoala/DynamicsCRMSuperObituaries) plugins. There's a [demo video](https://www.youtube.com/watch?v=cxSg2U6NzUE) too.
`,s=`---
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

\`\`\`
157 - 4012101 2
│     │       └ check digit
│     └ serial
└ airline prefix
\`\`\`

The check digit is the serial modulo 7:

\`\`\`php
function awbIsValid(string $raw): bool
{
    $digits = preg_replace('/\\D/', '', $raw);          // "157-4012 1012" → "15740121012"
    if (strlen($digits) !== 11) return false;

    $serial = (int) substr($digits, 3, 7);
    return $serial % 7 === (int) $digits[10];
}
\`\`\`

Mod 7 catches most single-digit typos and many transpositions, which is exactly the class of error a person makes when copying a number off a sheet. It is not a security check: anyone can compute it. It just stops \`157-40121013\` reaching an airline.

People write AWB numbers in half a dozen ways: \`157-40121012\`, \`157-4012 1012\`, sometimes with the origin airport wedged in after the prefix. Normalise first, validate once, and use one implementation everywhere. A second, slightly different check-digit function somewhere else in the codebase is how a bad number slips in.

When a block arrives from the airline, the first and last numbers are validated and the range is expanded into individual stock rows. Each one is checked again on the way in, because a typo in the range is a block of numbers that all look valid but don't belong to you.

## A number has a life

Each stock row moves through a small set of states:

\`\`\`
ready ──▶ assigned ──▶ issued ──▶ executed
  │          │            │
  └──────────┴────────────┴──▶ voided / cancelled
\`\`\`

- **Ready**: on the shelf, owned by the business.
- **Assigned**: given to a branch or sub-agent to draw from.
- **Issued**: on a waybill being prepared.
- **Executed**: the waybill is a legal document. This is a one-way door.

The transitions are a table, not a set of \`if\` statements scattered across controllers. A number cannot go from executed back to ready, and one that is assigned to branch A cannot be pulled by branch B. When we first measured, there were 17 code paths writing a stock status. Several knocked executed numbers back to "assigned" or let expired numbers be issued. Funnelling every change through one service with a legality table fixed whole categories of bugs at once.

Two more rules turned out to matter in practice:

- **Expiry is part of availability.** A number past its valid-to date is refused at the airline counter, so it must never be offered. When we checked, about one in six "ready" numbers had already expired.
- **Freezing is not a status.** A disputed block or an audit takes numbers out of circulation without rewriting their state, so the history stays true.

## Two people, one number

Here is the bug every stock system has at least once. Two users press "new waybill" at the same moment:

\`\`\`
A: SELECT first ready number  → 4012101 2
B: SELECT first ready number  → 4012101 2
A: UPDATE … SET status = issued
B: UPDATE … SET status = issued      ← same number, twice
\`\`\`

Both reads were correct when they ran. The fix is to make the read and the write one decision, inside a transaction, with the row locked:

\`\`\`php
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
\`\`\`

Now B waits on A's lock, re-reads after A commits, and gets the next number. Postgres's \`SKIP LOCKED\` would let B take the next free row without waiting, which is faster under heavy load. We chose plain waiting on purpose: airlines audit sequences, and issuing strictly in order with no gaps is worth a few milliseconds when a forwarder issues dozens of numbers an hour, not thousands a second.

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
`,c=`---
title: Most waybills are the usual one
date: 2026-10-03
project: kaede
seo: How I built a learning suggestion engine for a cargo ERP from its own data, with no ML model: recall, decay, verdicts and a Wilson score.
summary: 3,142 air waybills used just 149 routings, and five of them covered 87%. How that one number turned a data-entry form into a learning engine, without a model.
---

Entering an air waybill's routing used to mean six fields per flight leg: origin, destination, carrier, flight number, date, and again for the next leg. It was built like an authoring tool, as if every shipment invented a new journey.

Before redesigning it, I counted.

## The number that changed the design

Across 3,142 waybills there were 4,682 flight legs. Those legs described only **149 distinct routings**. The five most common covered **87% of all waybills**; the top twenty covered 94%. The single most common one, Kathmandu to Narita on one carrier's flight, appeared 1,728 times.

The same query found the mess that free entry creates: 9.4% of legs saved with no flight number, 8.6% with a zero-padded one ("0898" next to "898"), and five legs that landed before they took off.

So routing was never an authoring problem. It was a **recall** problem: the right answer was almost always one the office had already typed. That reframing is the whole design.

## From form to shortlist

The routing field now opens on an empty waybill with the office's most likely routings as chips.

![The routing field on a new waybill, offering the office's frequent routings as chips with how often each was used, a box to paste a routing, and a one-line leg entry.](/media/kaede/routing-suggest.webp) One click applies a whole multi-leg journey, with airport and airline names looked up fresh, so old free-text labels never come back. Pick an origin and destination and it hints the usual carriers, the usual flight and the median transit time for that lane.

![The same field after clicking one chip: a two-leg routing via Hong Kong with total distance, flying time, each leg's distance and usual duration, a small route map, and warnings that departure dates are still missing.](/media/kaede/routing-applied.webp)

One click fills every leg, and the field does the arithmetic people used to do in their heads: distance, flying time, where the connection is, and what's still missing before the waybill can go.

For people who'd rather type, a routing can be pasted as one line: \`KTM-DEL(RA)\`, \`KTM-DEL/RA433/2026-09-09\`, \`KTM DEL RA 433 09SEP\`. Codes resolve only on an exact IATA match. A guess here becomes a wrong flight on a legal document.

## Then it spread: a learning engine

Routings were the first field. The same idea, that an office's own history is the best predictor of its next entry, now runs across the waybill: a shipper's usual agent, issuer and bill-to, the HS codes for their goods, the consignee's notify party, the currency by destination. It also runs in quotes, rates and the carrier-portal automation.

There is **no machine-learning model**. Everything below is counting, done carefully.

### 1. Harvest, nightly

Each night, each organisation's saved records are read into its own private layer: values, the context they were used in, and how often. Nothing leaves the organisation's database.

### 2. Recent beats old

Every count decays with a 90-day half-life:

\`\`\`
weight = uses × 0.5^(age_in_days / 90)
\`\`\`

The routing a forwarder used 500 times two years ago, before an airline dropped the route, fades. The one it started using last month rises. Without decay, a learning system is a museum.

### 3. Suggest where people already type

Suggestions appear as grey text and chips in the fields people already use. There's no new screen and no "AI" button. The organisation's own values come first, always.

### 4. Judge at save, not per keystroke

When the form is saved, the browser reports, for each suggestion, whether it was **offered**, **taken**, **overridden** or **ignored**. One small payload with the normal save, never keystroke tracking.

### 5. Let the evidence decide, honestly

Each suggestion source earns or loses trust from those verdicts. The naive way is to look at the take rate: 2 of 5 is 40%, 200 of 500 is 40%. But those are not equally certain, and treating them the same promotes lucky guesses.

So the engine uses the **lower bound of the Wilson score interval** at 95% confidence:

\`\`\`php
function wilsonLower(float $taken, float $offered, float $z = 1.96): float
{
    if ($offered <= 0) return 0.0;
    $p = $taken / $offered;
    $d = 1 + $z * $z / $offered;
    $c = $p + $z * $z / (2 * $offered);
    $m = $z * sqrt(($p * (1 - $p) + $z * $z / (4 * $offered)) / $offered);
    return ($c - $m) / $d;
}
\`\`\`

At 2 of 5 the lower bound is about 0.12. At 200 of 500 it's about 0.36. A source whose lower bound clears 0.5 becomes **trusted** and is weighted up. One below 0.2 is **retired** and stops being offered. The counts decay too, so a source can earn its way back.

### 6. Share only what's safe to share

Some knowledge belongs to everyone: public codes, standard trade wording, common HS classifications. A weekly job harvests candidates across organisations into a staging area, and a value only qualifies if it appears in **at least three organisations and five waybills**. Anything shaped like a name, a phone number or an address is refused at harvest and checked again at load. Then a person reviews the result and commits it to the repository like code, so every deployment ships the same reviewed knowledge.

A company's customers, lanes and prices never leave it.

## What it taught me

1. **Count before you design.** The ratio of distinct values to rows tells you whether a field needs a better form or a shortlist.
2. **Recall beats prediction** when the past is this repetitive. Offering the office's own answers is faster and more trusted than generating new ones.
3. **Decay everything.** Business changes, and a learner that can't forget is wrong in slow motion.
4. **Measure acceptance with confidence, not ratios.** The Wilson lower bound is a few lines of code and stops small samples from looking certain.
5. **You often don't need a model.** Rules and counts over your own data, reviewed by people, go a very long way, and run with no data leaving the building.
`,l=`---
title: mTLS and OAuth2 on the same call, step by step
date: 2026-10-05
project: kaede
seo: A practical walkthrough of integrating with an API that requires both mutual TLS and OAuth2 client credentials, and every way it fails.
summary: Some partner APIs want a client certificate on the connection and a bearer token on the request. Every way that goes wrong, in the order it went wrong for me.
---

Most APIs ask you to prove who you are once. Some cargo community systems ask twice: **mutual TLS** on the connection, so the server knows which machine is calling, and an **OAuth2 bearer token** on each request, so it knows which application. I built that integration for Kaede. None of the steps is hard on its own. The pain is that each one fails in a way that looks like a different problem.

Here they are in the order they bit me.

## 1. The certificate request

The partner wants a certificate signed by a CA they trust, issued for a key only you hold. So you generate the key yourself and send them a CSR (certificate signing request), never the key:

\`\`\`bash
openssl req -new -newkey rsa:4096 -nodes \\
  -keyout client.key -out client.csr \\
  -subj "/C=NP/O=Your Company/CN=your-system.example.com"
\`\`\`

**Trap:** the key never leaves your side. If a partner's onboarding form asks you to upload a private key, stop and ask why.

## 2. The certificate comes back, and it isn't the whole story

You get a PEM certificate. Sometimes it includes intermediate certificates, sometimes it doesn't. The server needs the chain to verify you, so the file you present should be the leaf followed by its intermediates.

**Trap:** a certificate and key that don't belong together fail the TLS handshake with an error that tells you nothing. So check the pair the moment it's entered, not on the first real call:

\`\`\`php
$cert = openssl_x509_read($certPem);
$key  = openssl_pkey_get_private($keyPem, $passphrase);
if (! openssl_x509_check_private_key($cert, $key)) {
    throw new InvalidCredential('This key does not belong to this certificate.');
}
\`\`\`

While you're there, read the expiry date and keep it. Certificates expire on a Saturday night, and you want a warning weeks ahead, not an outage.

## 3. Don't write the key to disk

The easy way to give curl a client certificate is a file path. That means a private key sitting in \`/tmp\`, in backups, maybe in a crash dump. Since curl 7.71 you can hand it the certificate and key as in-memory blobs instead:

\`\`\`php
curl_setopt_array($ch, [
    CURLOPT_SSLCERT_BLOB => $certPem,
    CURLOPT_SSLKEY_BLOB  => $keyPem,
    CURLOPT_SSLCERTTYPE  => 'PEM',
]);
\`\`\`

In Kaede the credentials live encrypted in the database, decrypted only for the request, and never touch the filesystem.

## 4. Trust only their CA

Partners, especially in test environments, often sit behind a private CA. The lazy fix is to turn verification off. Don't. Pin their CA bundle and turn the system store **off** for that request, so no public CA can vouch for an impostor:

\`\`\`php
curl_setopt($ch, CURLOPT_CAINFO_BLOB, $partnerCaBundle);   // only this
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
\`\`\`

**Trap:** the identity provider that issues tokens is often a *different* host with an ordinary public certificate. Pinning the partner's private CA there breaks the token call. The pin has to be configurable per endpoint.

## 5. The token request needs the certificate too

The OAuth2 client credentials grant (RFC 6749 §4.4) trades a client id and secret for an access token. What the docs rarely say: if the token endpoint sits behind the same mutual TLS gateway, **it also wants your certificate**. Without it, the handshake fails before your credentials are even read, and the error looks exactly like a bad certificate.

So the certificate is a transport layer under every call, token request included. Configured with one and not the other is an error, never a silent fallback to a plain connection.

## 6. Three ways to send a client secret

RFC 6749 says send the id and secret with HTTP Basic auth. Some servers want them in the form body instead. Some want a JSON body:

\`\`\`
Authorization: Basic base64(id:secret)        ← the RFC default
grant_type=client_credentials&client_id=…     ← form body
{"grant_type":"client_credentials", …}         ← JSON, despite the RFC
\`\`\`

All three exist in the wild. Make it a setting, default to the RFC, and expect to need the other two.

## 7. Cache the token, but not too long

Tokens last minutes to hours. Fetching one per message is slow and can trip rate limits, so cache it. Two rules:

- **Stop using it a minute early.** A token that expires while the request is in flight fails the request.
- **Key the cache to the credentials that minted it.** When someone rotates the secret, the old token must not outlive it.

And when the API answers 401 to a cached token, drop it and fetch a new one once. Not in a loop.

## 8. Know what "it worked" looks like

The nastiest one. When mutual TLS is required and your certificate isn't accepted, a common gateway setup answers **HTTP 400** with an HTML page saying no client certificate was sent. A connection test that only checks "did we get a response?" reports success.

So the connection test in Kaede reads the answer:

- any response means DNS, TCP and TLS worked;
- 401 or 403 means the certificate was fine and the token was refused;
- that specific 400 page means the certificate wasn't taken, and says so in words.

## 9. Make every failure say which layer failed

By the end, every error in the integration names its layer: certificate unreadable, key mismatch, certificate expired, handshake refused, token endpoint refused, token rejected by the API, or the API refused the message itself. Most of these look identical from curl. Separating them turns a two-day support thread into a one-line answer.

## The checklist

1. Generate the key yourself and send only the CSR.
2. Validate the certificate, the key and the pair on entry, and record the expiry.
3. Keep keys encrypted at rest and in memory on the wire.
4. Pin the partner's CA per endpoint, and turn the system store off where you pin.
5. Present the certificate on the token request too.
6. Support all three ways of sending the client secret.
7. Cache tokens with a safety margin, keyed to the credential.
8. Test connections by reading the response, not just receiving one.
9. Name the layer in every error.
`,u=`---
title: One developer, one market, no ads
date: 2022-07-19
project: kalimati
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
`,d=`---
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
`,f=`---
title: Teaching a UI library to speak Nepali
date: 2024-01-09
project: syncfusion
seo: How I translated Syncfusion's Essential JS 2, 64 components and 4,355 strings, into Nepali that reads like Nepali.
summary: I translated Syncfusion's Essential JS 2, 64 components and over four thousand strings, into Nepali. These are the choices that made it read like Nepali and not like a dictionary.
---

Syncfusion's Essential JS 2 is a big UI library: grids, schedulers, a spreadsheet, a word processor, a PDF viewer. It shipped in a few dozen languages. Nepali wasn't one of them.

I needed it for a product used by people who think in Nepali. So in January 2024 I translated it: 64 components and 4,355 strings, about three thousand lines, on my own. Syncfusion took it into the library, and \`ne-NP\` now ships with it.

## The hard part isn't vocabulary

Any dictionary will give you a word for *Insert*. The hard part is choosing the word a Nepali speaker would actually expect to see on a button. I set myself a few rules before writing a line.

**Use the words people already use.** Nepali has borrowed a lot of computing words from English, and many are now just Nepali. A file is *फाइल*, not a coined Sanskrit term nobody says. Where the borrowed word is the everyday one, I used it, spelt the established way.

**Use the formal register for technical terms.** Mathematical, scientific and technical words came from their established Sanskrit-derived forms. A spreadsheet function or a statistics term should read like a textbook, not like slang.

**Translate the meaning, not the words.** Some English UI strings make no sense word for word. Where a literal translation would confuse someone, I rewrote it to say what the control does. The grid's empty state, *"No records to display"*, became *प्रदर्शन गर्न कुनै रेकर्ड छैन*, which is how you'd actually say it.

## What I deliberately left alone

Knowing what not to translate mattered as much:

- **Key names** in tooltips and shortcuts: Space, Alt, A, B. People read them off the keyboard.
- **Formulas and their parameters.** A spreadsheet formula is code.
- **Units and their symbols**, and paper sizes. A4 is A4.
- **Abbreviations**, apart from a few that are well known.
- **Font names**, other than everyday ones like Times New Roman.
- **Compound CamelCase identifiers** like \`ThinThickSmallGap\`, where any translation would be guesswork.

## Why it was worth it

Localisation is usually treated as a chore you hand to a vendor at the end. It's really product work: every string is a tiny bit of interface design. Doing it by hand across a whole library taught me more about how these components behave than reading their docs ever did.

I also tightened the Nepali messages in vee-validate, the Vue form library ([#4642](https://github.com/logaretm/vee-validate/pull/4642)), so validation errors read formally and correctly.

Source: [syncfusion/ej2-locale#192](https://github.com/syncfusion/ej2-locale/pull/192).
`,p=`---
title: The check that only lived in the browser
date: 2020-05-01
project: everest-forms
summary: How an email field in Everest Forms trusted the browser, how I closed it, and the regression I shipped and fixed along the way.
---

In early 2020 I was working on Everest Forms, a popular WordPress form builder. While tidying the email notifications I noticed something about the email field: the server never checked that it held an email address.

The form rendered \`<input type="email">\`, and the browser refused anything that didn't look like \`name@domain\`. So in normal use, everything looked fine. But the browser is the visitor's, not yours.

## The gap

Here is roughly what the server did with an email field on submit, before the fix:

\`\`\`php
// includes/fields/class-evf-field-email.php, before
public function validate( $field_id, $field_submit, $form_data ) {
    // Required check.
    if ( ! empty( $fields[ $field_id ]['required'] ) && empty( $field_submit ) ) {
        evf()->task->errors[ $form_id ][ $field_id ] = $required;
    }
    // ...and that was it. No format check.
}
\`\`\`

It asked one question, *is it empty?*, and never asked *is it an email address?* Anyone who skipped the browser could put anything there:

\`\`\`bash
curl -X POST https://example.com/contact/ \\
  -d 'everest_forms[id]=42' \\
  -d 'everest_forms[form_fields][email]=not an email<b>at all</b>' \\
  -d 'everest_forms[form_fields][name]=Test'
\`\`\`

The entry was accepted and saved, and the value went wherever the form sent it: the entries screen, the admin's notification email, and smart tags like \`{field_id="email"}\` that site owners often drop into the *Reply-To* of that notification.

On its own that is a validation hole rather than a break-in. WordPress escapes most output, and \`wp_mail\` has its own guards. But "most" and "has its own guards" are other people's promises. A field labelled *Email* that will store any string is a gap waiting for the next feature to step into it.

## The fix

The rule I hold myself to: **the browser checks for convenience, the server checks for truth.** WordPress already ships a decent validator, \`is_email()\`, so the fix was small. I added a server-side format check for both shapes of the field, the plain one and the one with a "confirm your email" box:

\`\`\`php
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
\`\`\`

It shipped, and crafted submissions came back with a proper error.

## The regression I caused

Two months later the bug reports started. Forms with an **optional** email field were refusing to submit, with "Please enter a valid email address" under a box nobody had typed into.

The culprit was one word: \`isset\`. An empty optional field still arrives in \`$_POST\` as an empty string, and \`isset('')\` is true. So my check ran on blank values too, and \`is_email('')\` is false. I had made every email field effectively required.

I wrote the fix with an apology in the pull request, because a form that won't submit costs the site owner real leads. The fix (#430) did three things.

**1. Check format only when there is something to check.**

\`\`\`php
if ( ! empty( $field_submit['primary'] ) && ! is_email( $field_submit['primary'] ) ) {
\`\`\`

**2. Give the field one shape.** The plain field posted a string and the confirmation field posted an array, and each branch had its own copy of the rules. I normalised the input first, so the format and match checks exist once:

\`\`\`php
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
\`\`\`

**3. Stop echoing raw arrays back into the form.** When a submission failed, the form re-filled itself from \`$_POST\`. A crafted request could send a field as an array where a string was expected and trip PHP's array-to-string handling. The re-fill now accepts only non-empty scalars:

\`\`\`php
$defaults = isset( $_POST['everest_forms']['form_fields'][ $field_id ] )
    && ! is_array( $_POST['everest_forms']['form_fields'][ $field_id ] )
    && ! empty( $_POST['everest_forms']['form_fields'][ $field_id ] )
        ? $_POST['everest_forms']['form_fields'][ $field_id ]
        : '';
\`\`\`

## What I took from it

- **Validate on the server, always.** HTML5 attributes are a courtesy to honest users. Anything a browser enforces, \`curl\` ignores.
- **\`isset\` is not \`! empty\`.** For form input the question is almost never "was this key sent?" but "did the person give me a value?"
- **Normalise first, then validate once.** Two input shapes with two copies of the rules is how one copy ends up wrong.
- **Optional fields are a test case.** I tested the field that was filled in and not the one left blank. Now the first test I write for a validator is the blank, optional case.

The same habit, poking at what the server accepts rather than what the form allows, is how I found a more serious file-upload validation bypass in the Pro add-on that same year. That one was reported privately and fixed in Everest Forms Pro 1.7.

Pull requests: [#376](https://github.com/themegrill/everest-forms/pull/376), [#430](https://github.com/themegrill/everest-forms/pull/430).
`,m=`---
title: What building IATA ONE Record taught me about linked data
seoTitle: What IATA ONE Record taught me
date: 2026-11-01
project: kaede
seo: Lessons from implementing IATA ONE Record JSON-LD in a cargo ERP: stable URIs, one data source, idempotent events and honest errors.
summary: Air cargo is moving from messages to linked data. Lessons from serving ONE Record from a real cargo system, beyond what the spec tells you.
---

For forty years air cargo has run on messages. A forwarder sends the airline an FWB (the waybill), the airline sends back FSUs (status updates), each one a block of fixed-format text or, more recently, XML. Since January 2026 IATA prefers something different: **ONE Record**. Instead of sending each other copies, every party publishes its data as linked objects on its own server. Partners read them, subscribe to changes, and add events.

The spec is JSON-LD over a small REST API. A waybill becomes a \`cargo:Waybill\` at a permanent URI, linked to a \`cargo:Shipment\`, its \`cargo:Piece\`s, the \`cargo:Company\`s involved, and a stream of \`cargo:LogisticsEvent\`s. Serving that from Kaede taught me more than the spec does.

## 1. An identifier is a promise you can't take back

A ONE Record object's URI must never change. The tempting choice is the AWB number: it's what everyone calls the shipment. But an AWB number can change before the waybill is executed (a typo, a carrier switch, a reissue), and a URI that moves breaks every partner that stored it.

So Kaede's ids are the database's, prefixed by kind:

\`\`\`
/logistics-objects/waybill-48213
/logistics-objects/shipment-48213
/logistics-objects/piece-90551
/logistics-objects/movement-48213-2   ← the second flight leg
\`\`\`

The business number is a property on the object, not its name. The lesson generalises: never put a mutable business key in a URL you publish.

## 2. One source of truth, many renderings

Kaede already sends Cargo-IMP and Cargo-XML. The worst outcome would be ONE Record saying one weight while the FWB says another. So all three read the same mapped shipment data, and ONE Record is just another renderer of it.

Parties come from the waybill's frozen snapshot, not the live contact record. An executed waybill is a legal document; if a customer later changes their address, the waybill should still say what it said when it flew.

## 3. JSON-LD has three shapes, and partners use all of them

JSON-LD can arrive compacted, expanded or flattened, with prefixes or full IRIs, values as plain strings or as \`{"@value": …}\` objects. A partner posting an event can use any of them. Pulling in a full JSON-LD processor for a handful of fields felt heavy, so Kaede reads the shapes it needs directly and refuses what it can't read with a clear error. It doesn't guess.

Going out, we always serve one predictable compacted form with a fixed \`@context\`. Be strict in what you emit and tolerant, but explicit, in what you accept.

## 4. Events need idempotency, and the spec doesn't give you a key

Partners post events ("arrived", "departed", "delivered") to a shipment. Networks retry. Without care, a retried "departed" becomes two departures.

ONE Record has no idempotency header, so repeats are recognised by **content**: the same status code for the same pieces at the same moment is the event already recorded. An undated event, meaning "now", repeats a recent one only if the code, pieces and station all match. The check and the write happen under a per-shipment lock, so two copies of one event arriving together can't both pass the check.

## 5. Several codes, one milestone, and the code still has to round-trip

IATA status codes don't map one-to-one onto a system's milestones. "Received from shipper" and "freight on hand" can both move a shipment to the same internal state. But a partner who posted one code expects to read that code back, not its sibling. So the code that arrived is stored with the status row, and reported back unchanged in ONE Record and in the classic messages alike.

## 6. Every inbound event goes through the same door

It's tempting to let an integration write status directly: it's "trusted". Instead, every ONE Record event goes through the same status service a person's click does. Backward moves are refused, routing rules hold, a master's house waybills follow, and webhooks fire. An integration that bypasses your rules is a second, worse version of your product.

## 7. Errors are part of the contract

The spec defines an \`api:Error\` shape. Every failure on the ONE Record routes is rewritten into it, including the ones raised by generic middleware: bad key, rate limit, maintenance. Each has a stable, named code (\`one_record_event_for_mismatch\`, \`one_record_piece_retired\`, …) so a partner's developer can tell "fix your request" from "retry later" without reading our logs.

Two small rules made a big difference:

- **A miss is 404, never 403.** Telling a stranger "that exists but isn't yours" leaks the existence of other companies' shipments.
- **Times must carry an offset.** An event dated \`2026-10-30T14:00\` with no zone is refused, not read as local time. In a business that crosses twelve time zones in a day, a guessed offset is a wrong record.

## 8. Unknown is left out, never guessed

If Kaede doesn't know a value (an unmapped code, a free-text station, a missing weight), the property is absent. Linked data makes it easy to fill gaps with defaults that look authoritative. A missing value is honest. A plausible wrong one gets copied into three other companies' systems.

## Where it goes next

Revisions and historical reads (\`?at=\`), subscriptions both ways, dangerous goods and security declarations, ULD build-up and the first step of change requests are served now. Every time, the hard part was never JSON-LD itself. It was deciding what the record is, who may change it, and what happens when two people say different things about it at the same time.
`,h=`---
title: Kaede
year: 2022–now
kind: Cargo ERP
tag: Systems
image: /media/work/kaede.jpg
link: /work/kaede
featured: true
summary: Reads the paperwork, learns your office, talks to airlines in ONE Record.
---
`,g=`---
title: Kalimati Market
year: 2021–25
kind: Government platform
tag: Websites
image: /media/work/kalimati.jpg
link: /work/kalimati
featured: true
summary: Prices for the public, dues paid by phone through eSewa and Khalti. Built solo.
---
`,_=`---
title: GenericProperties
year: 2021
kind: Real estate CRM
tag: Systems
image: /media/work/generic-properties.jpg
loop: /media/work/generic-properties-tile
link: /work/generic-properties
featured: true
summary: Finds the agents nearest a lead among millions, in seconds.
---
`,ee=`---
title: Dynamics CRM plugins
year: 2020
kind: C# plugins
tag: Open source
image: /media/work/dynamics-plugins.jpg
link: https://github.com/coderkoala/DynamicsCRMLeads
featured: false
summary: Leads, Opportunity and Obituaries modules for a US brokerage.
---
`,te=`---
title: Syncfusion in Nepali
year: 2024
kind: Localisation
tag: Open source
image: /media/work/syncfusion-nepali.jpg
link: https://github.com/syncfusion/ej2-locale/pull/192
featured: false
summary: Translated a whole UI library into Nepali, alone. It ships upstream now.
---
`,ne=`---
title: Affiliatefeed
year: 2021
kind: Shopify app
tag: Systems
image: /media/work/affiliatefeed.jpg
link: https://affiliatefeed.exportfeed.com/
featured: false
summary: Took a web app apart and shipped it as a standalone Shopify PWA.
---
`,re=`---
title: WPEverest developer docs
year: 2020
kind: Documentation
tag: Open source
image: /media/work/wpeverest-dev-docs.jpg
link: https://themegrill.github.io/dev-docs/
featured: false
summary: The docs every Everest Forms add-on developer starts from. I wrote them.
---
`,ie=`---
title: Everest Forms
year: 2020
kind: WordPress plugins
tag: Open source
image: /media/work/everest-forms.png
link: https://github.com/themegrill/everest-forms/pulls?q=is%3Apr+author%3Acoderkoala+is%3Amerged
featured: false
summary: 28 merged PRs, WPML support, PHPUnit, and a PDF add-on twice as fast.
---
`,ae=`---
title: Rapti CRM
year: 2020
kind: ERPNext customisation
tag: Systems
image:
logo: /media/work/rapti-logo.png
link: https://www.raptigas.com/
featured: false
summary: ERPNext bent to fit a gas distributor's sales.
---
`,oe=`---
title: Taskmon
year: 2019
kind: Task manager
tag: Systems
image: /media/portfolio-images/portfolio1.png
link: 
featured: false
summary: Create, hand off, chase and close tasks across a team.
---
`,se=`---
title: GDG Dang
year: 2019
kind: Community portal and talk
tag: Open source
image: /media/work/gdg-vision.png
link: https://github.com/gdgdang
featured: false
summary: Volunteer organizer. Shipped the DevFest 2019 site and spoke on Google Vision AI.
---
`,ce=`---
title: Presidential Business School EMS
year: 2019
kind: Exam system
tag: Systems
image: /media/portfolio-images/portfolio3.png
link: 
featured: false
summary: Random entrance papers, and a scraper that filled the question bank.
---
`,le=`---
title: Nimbus Nepal
year: 2019
kind: CMS and backend
tag: Websites
image: /media/portfolio-images/portfolio6.png
link: https://nimbusnepal.com
featured: false
summary: A Laravel CMS with an applicant tracker and Analytics built in.
---
`,ue=`---
title: Loksewa Aayog Quiz
year: 2019
kind: Facebook Instant game
tag: Games
image: /media/portfolio-images/portfolio5.png
link: http://fb.gg/play/464364207493058
featured: false
summary: Ten civil-service questions, then brag to your friends.
---
`,de=`---
title: Debendra Manandhar
year: 2019
kind: Website · archived copy
tag: Websites
image: /media/portfolio-images/portfolio4.png
link: https://web.archive.org/web/20200806075149/https://debendramanandhar.com/
featured: false
summary: A coach's site with programmes, an academy and PayPal.
---
`,fe=`---
title: Four Seasons Engineering
year: 2019
kind: Website
tag: Websites
image: /media/portfolio-images/portfolio8.png
link: 
featured: false
summary: A builder's website, start to finish in three days.
---
`,pe=`---
title: Travel Time Nepal
year: 2019
kind: Website · archived copy
tag: Websites
image: /media/portfolio-images/portfolio7.png
link: https://web.archive.org/web/20200122104033/http://traveltimenepal.com:80/
featured: false
summary: A Thamel travel agency with payments, deals and auto-replies. I wrote the copy too.
---
`,me=`---
title: Indiabix scraper
year: 2019
kind: Python
tag: Open source
image: /media/work/indiabix-scraper.jpg
link: https://github.com/coderkoala/indiabix-scraper
featured: false
summary: Thousands of aptitude questions, pulled while I slept.
---
`,he=`---
title: In Cod We Trust
year: 2018
kind: Level design
tag: Games
image:
cover: pixel
link: https://megacatstudios.com/
featured: false
summary: Hand-built maps for a new NES game from Mega Cat Studios.
---
`,ge=`---
title: Adventures of Joy
year: 2017
kind: C++ game
tag: Games
image: /media/portfolio-images/portfolio2.png
link: https://github.com/coderkoala/RoguelikeRPG
featured: false
summary: A top-down RPG on my own engine, written in C++ and SFML.
---
`;function v(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var y=v();function _e(e){y=e}var b={exec:()=>null};function x(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function S(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(C.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var ve=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),C={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:x(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:x(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:x(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:x(e=>RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:x(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:x(e=>RegExp(`^ {0,${e}}(?:</?(?:${O})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:x(e=>RegExp(`^ {0,${e}}>`))},ye=/^(?:[ \t]*(?:\n|$))+/,be=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,xe=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,w=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Se=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,T=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Ce=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,we=S(Ce).replace(/bull/g,T).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Te=S(Ce).replace(/bull/g,T).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),E=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Ee=/^[^\n]+/,D=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,De=S(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,D).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Oe=S(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,T).getRegex(),O=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,k=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ke=S(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,k).replace(`tag`,O).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ae=e=>S(E).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,O).getRegex(),je=Ae(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Me=Ae(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),A={blockquote:S(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Me).getRegex(),code:be,def:De,fences:xe,heading:Se,hr:w,html:ke,lheading:we,list:Oe,newline:ye,paragraph:je,table:b,text:Ee},Ne=S(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,O).getRegex(),Pe={...A,lheading:Te,table:Ne,paragraph:S(E).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Ne).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,O).getRegex()},Fe={...A,html:S(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,k).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:b,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:S(E).replace(`hr`,w).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,we).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Ie=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Le=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Re=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,ze=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,j=/[\p{P}\p{S}]/u,M=/[\s\p{P}\p{S}]/u,N=/[^\s\p{P}\p{S}]/u,Be=S(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,M).getRegex(),Ve=/[\p{Pi}\p{Ps}"']/u,He=/(?!~)[\p{P}\p{S}]/u,Ue=/(?!~)[\s\p{P}\p{S}]/u,We=/(?:[^\s\p{P}\p{S}]|~)/u,Ge=S(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,ve?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Ke=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,qe=S(Ke,`u`).replace(/punct/g,j).getRegex(),Je=S(Ke,`u`).replace(/punct/g,He).getRegex(),Ye=S(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Ve).replace(/punct/g,j).getRegex(),Xe=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Ze=S(Xe,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),Qe=S(Xe,`gu`).replace(/notPunctSpace/g,We).replace(/punctSpace/g,Ue).replace(/punct/g,He).getRegex(),$e=S(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),et=S(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),tt=S(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),nt=S(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,j).getRegex(),rt=S(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),it=S(/\\(punct)/,`gu`).replace(/punct/g,j).getRegex(),at=S(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,j).getRegex(),ot=S(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),st=S(k).replace(`(?:-->|$)`,`-->`).getRegex(),ct=S(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,st).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),lt=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,P=S(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,lt).getRegex(),ut=S(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,P).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dt=S(/^!?\[(label)\]\[(ref)\]/).replace(`label`,P).replace(`ref`,D).getRegex(),ft=S(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,D).getRegex(),pt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,mt=S(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,lt).getRegex(),ht=S(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,S(/^!?\[(label)\]\[(ref)\]/).replace(`label`,mt).replace(`ref`,pt).getRegex()).replace(`nolink`,S(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,pt).getRegex()).getRegex(),gt=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,_t=S(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),F={_backpedal:b,anyPunctuation:it,anyPunctuationOutsideCode:at,autolink:ot,blockSkip:Ge,br:Re,code:Le,del:b,delLDelim:b,delRDelim:b,emStrongLDelim:qe,emStrongRDelimAst:Ze,emStrongRDelimUnd:et,escape:Ie,link:ut,nolink:ft,punctuation:Be,reflink:dt,reflinkSearch:ht,tag:ct,text:ze,url:b},vt={...F,emStrongLDelim:Ye,emStrongRDelimAst:$e,emStrongRDelimUnd:tt,link:S(/^!?\[(label)\]\((.*?)\)/).replace(`label`,P).getRegex(),reflink:S(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,P).getRegex()},I={...F,emStrongRDelimAst:Qe,emStrongLDelim:Je,delLDelim:nt,delRDelim:rt,url:S(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,_t).replace(`protocol`,gt).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:S(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,gt).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},yt={...I,br:S(Re).replace(`{2,}`,`*`).getRegex(),text:S(I.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},L={normal:A,gfm:Pe,pedantic:Fe},R={normal:F,gfm:I,breaks:yt,pedantic:vt},bt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},xt=e=>bt[e];function z(e,t){if(t){if(C.escapeTest.test(e))return e.replace(C.escapeReplace,xt)}else if(C.escapeTestNoEncode.test(e))return e.replace(C.escapeReplaceNoEncode,xt);return e}function St(e){return C.numericCharacterReference.test(e)?e.replace(C.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return`&amp;`;let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function Ct(e){try{e=encodeURI(e).replace(C.percentDecode,`%`)}catch{return null}return e}function wt(e,t){let n=e.replace(C.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(C.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(C.slashPipe,`|`);return n}function B(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Tt(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&C.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function V(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function Et(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function H(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Dt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=r.state.inLink,u=r.state.linkEmitted,d=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let f=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=d;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:f}}function Ot(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function kt(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var U=class{options;rules;lexer;constructor(e){this.options=e||y}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Tt(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ot(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=B(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:B(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:B(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=B(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteMarkerWhitespace,(e,t,n)=>t+H(n,t.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`||u?.type===`heading`||u?.type===`hr`||u?.type===`html`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s;let c=o.substring(s.raw.length).replace(/^\n/,``),l=c?c.split(`
`).length:0,d=l?e.slice(0,-l):e;d.length>0&&(n=`${n}
${d.join(`
`)}`),r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o;let s=o.raw.length>t.raw.length?a.slice(t.raw.length+1,o.raw.length).split(`
`).length:0;if(s>0){let t=e.slice(0,s).join(`
`);n=`${n}
${t}`,r=`${r}
${t}`}e=e.slice(s)}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,r=()=>n.length-e.length,i=t[1].trim(),a=i.length>1,o={type:`list`,raw:``,ordered:a,start:a?+i.slice(0,-1):``,loose:!1,items:[]};i=a?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=a?i:`[*+-]`);let s=this.rules.other.listItemRegex(i),c=!1;for(;e;){let i=!1,a=``;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;let l=r();e=e.substring(t[0].length);let u=t[2].split(`
`,1)[0],d=t[1].length,f=this.options.pedantic?H(u,d):u.replace(this.rules.other.leadingSpaceTab,e=>H(e,d)),p=e.split(`
`,1)[0],m=!f.trim(),h=0;if(this.options.pedantic?(h=2,a=f.trimStart()):m?h=d+1:(h=f.search(this.rules.other.nonSpaceChar),h=h>4?1:h,a=f.slice(h),h+=d),m&&this.rules.other.blankLine.test(p)&&(e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(h),n=this.rules.other.hrRegex(h),r=this.rules.other.fencesBeginRegex(h),i=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(h):this.rules.other.headingBeginRegex(h),o=this.rules.other.htmlBeginRegex(h),s=this.rules.other.blockquoteBeginRegex(h);for(;e;){let c=e.split(`
`,1)[0],l;if(p=c,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,`  `),l=p):l=p.replace(this.rules.other.leadingSpaceTab,e=>H(e)),r.test(p)||i.test(p)||o.test(p)||s.test(p)||t.test(p)||n.test(p))break;if(l.search(this.rules.other.nonSpaceChar)>=h||!p.trim())a+=`
`+l.slice(h);else{if(m||f.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||r.test(f)||i.test(f)||n.test(f))break;let e=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(p)&&this.rules.block.lheading.test(`${f}
${p}`)?`    ${l.replace(/^ {0,3}/,``)}`:p;a+=`
`+e}m=!p.trim(),e=e.substring(c.length+1),f=l.slice(h)}}let g=n.slice(l,r());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(c=!0)),o.items.push({type:`list_item`,raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(a),loose:!1,text:a,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,r()).trimEnd();for(let e of o.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!o.loose){let t=e.tokens.filter(e=>e.type===`space`);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of o.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,o.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Tt(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&Et(t[2],`()`)!==-1)return;let e=V(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:B(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=wt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:B(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(wt(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:B(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&kt(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=B(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=Et(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),Dt(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&kt(e,n[1],r,this.rules))return;let i=t[V((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Dt(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||!r[1]&&!r[2]&&!r[3]&&!r[4])return;let i=r[0][0],a=n===i,o=t.length-e.length,s=o;for(;!this.options.pedantic&&s>0&&t[s-1]===i;)s--;let c=[...t.slice(Math.max(0,s-2),s)].at(-1)??``,l=c===`*`||c===`_`||!!this.rules.inline.punctuation.exec(c);s<o&&(n=c);let u=s<o?l:!!this.rules.inline.punctuation.exec(n);if(r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let d=r[1]||r[3]||``;if(!d||!n||u){let n=[...r[0]].length-1,u,f,p=n,m=0,h=o-s+n,g=!this.options.pedantic&&!!c.trim()&&(!!d||i===`*`&&!l),_=i===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,t=t.slice(-1*e.length+n);(r=_.exec(t))!==null;){if(u=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!u)continue;if(f=[...u].length,r[3]||r[4]){p+=f;continue}if(r[5]||r[6]||g){if(a&&(r[5]||r[6]))break;if(h%3&&!((h+f)%3)){m+=f;continue}}if(p-=f,p>0)continue;f=Math.min(f,f+p+m);let t=[...r[0]][0].length,i=e.slice(0,n+r.index+t+f);if(Math.min(n,f)%2){let e=i.slice(1,-1);return{type:`em`,raw:i,text:e,tokens:this.lexer.inlineTokens(e)}}let o=i.slice(2,-2);return{type:`strong`,raw:i,text:o,tokens:this.lexer.inlineTokens(o)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:St(t[0]),escaped:e}}}},W=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||y,this.options.tokenizer=this.options.tokenizer||new U,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:C,block:L.normal,inline:R.normal};this.options.pedantic?(t.block=L.pedantic,t.inline=R.pedantic):this.options.gfm&&(t.block=L.gfm,t.inline=this.options.breaks?R.breaks:R.gfm),this.tokenizer.rules=t}static get rules(){return{block:L,inline:R}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(C.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.state.inRawBlock=!1,this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(C.tabCharGlobal,`    `).replace(C.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if((i=this.tokenizer.fences(e))||(i=this.tokenizer.heading(e))||(i=this.tokenizer.hr(e))||(i=this.tokenizer.blockquote(e))||(i=this.tokenizer.list(e))||(i=this.tokenizer.html(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):(this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}),t.push(i));continue}if((i=this.tokenizer.table(e))||(i=this.tokenizer.lheading(e))){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length)}else if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,V(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=this.state.linkParenPossible;this.state.linkParenPossible=n&&e.includes(`)`);try{return this.#e(e,t)}finally{this.state.linkParenPossible=n}}#e(e,t){let n=e.includes(`*`)||e.includes(`_`)||e.includes(`~`)||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==U.prototype.emStrong||this.tokenizer.del!==U.prototype.del?this.#t(e):e,r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,n,i))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e,n,i))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o)}else if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}#t(e){let t=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,n=t=>{let r=t.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,V(t.slice(r+1,-1))))return t;if(r>1&&t.charAt(0)!==`!`){let i=t.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,n)+`][`+`a`.repeat(t.length-r-2)+`]`}return`[`+`a`.repeat(t.length-2)+`]`};t=t.replace(e,n)}return t=t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(e,t,n)=>n?`+`.repeat(e.length):t?t+e.slice(t.length,-t.length).replace(/`/g,`+`)+t:e),t=t.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t,t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},G=class{options;parser;constructor(e){this.options=e||y}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(C.notSpaceStart)?.[0],i=e?e.replace(C.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+z(r)+`">`+(n?i:z(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:z(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${z(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?z(n,!0):this.parser.parseInline(r),o=Ct(e);if(o===null)return a;e=z(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+z(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ct(e);if(i===null)return z(n);e=i;let a=`<img src="${z(e)}" alt="${z(n)}"`;return t&&(a+=` title="${z(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:z(e.text)}},K=class{parser;strong({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}em({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}codespan({text:e}){return e}del({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}html({text:e}){return e}text({text:e}){return e}link({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}image({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}br(){return``}checkbox({raw:e}){return e}},q=class e{options;renderer;textRenderer;constructor(e){this.options=e||y,this.options.renderer=this.options.renderer||new G,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new K,this.textRenderer.parser=this}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},J=class{options;block;constructor(e){this.options=e||y}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?W.lex:W.lexInline}provideParser(e=this.block){return e?q.parse:q.parseInline}};function Y(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var X=new class{defaults=v();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=q;Renderer=G;TextRenderer=K;Lexer=W;Tokenizer=U;Hooks=J;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(Y(n,t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)Y(n,this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)Y(n,this.walkTokens(e.tokens,t));break}case`list`:{let e=r;Y(n,this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);Y(n,this.walkTokens(i,t))}):e.tokens&&Y(n,this.walkTokens(e.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new G(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new U(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new J;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=J.passThroughHooks.has(n)?e=>{if(t.options.async&&J.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(t.options.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&Y(n,t.call(this,e)),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return W.lex(e,t??this.defaults)}parser(e,t){return q.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?W.lex:W.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?q.parse:q.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?W.lex:W.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?q.parse:q.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+z(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Z(e,t){return X.parse(e,t)}Z.options=Z.setOptions=function(e){return X.setOptions(e),Z.defaults=X.defaults,_e(Z.defaults),Z},Z.getDefaults=v,Z.defaults=y;function At(...e){return X.use(...e),Z.defaults=X.defaults,_e(Z.defaults),Z}Z.use=At,Z.walkTokens=function(e,t){return X.walkTokens(e,t)},Z.parseInline=X.parseInline,Z.Parser=q,Z.parser=q.parse,Z.Renderer=G,Z.TextRenderer=K,Z.Lexer=W,Z.lexer=W.lex,Z.Tokenizer=U,Z.Hooks=J,Z.parse=Z,Z.options,Z.setOptions,Z.walkTokens,Z.parseInline,q.parse,W.lex;function jt(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},body:e};let n={},r=null;for(let e of t[1].split(/\r?\n/)){let t=e.match(/^\s+-\s+(.*)$/);if(t&&r){n[r].push(t[1].trim());continue}let i=e.match(/^([\w-]+):\s*(.*)$/);if(!i)continue;let[,a,o]=i;o===``?(n[a]=[],r=a):(r=null,n[a]=o===`true`||o!==`false`&&o)}return{data:n,body:t[2]}}function Q(e,t){return Object.entries(e).map(([e,n])=>{let r=e.split(`/`).pop().replace(/\.md$/,``),{data:i,body:a}=jt(n);return{...i,slug:r,url:`/${t}/${r}`,html:Z.parse(a)}}).filter(e=>!e.draft||!1)}var Mt=Object.assign({"/content/work/generic-properties.md":e,"/content/work/kaede.md":t,"/content/work/kalimati.md":n}),Nt=Object.assign({"/content/writing/a-date-that-did-not-fit.md":r,"/content/writing/designing-a-rate-engine.md":i,"/content/writing/esewa-khalti-laravel.md":a,"/content/writing/finding-the-nearest-agent.md":o,"/content/writing/handing-out-air-waybill-numbers.md":s,"/content/writing/most-waybills-are-the-usual-one.md":c,"/content/writing/mtls-and-oauth2-together.md":l,"/content/writing/one-developer-one-market.md":u,"/content/writing/taking-money-on-a-government-website.md":d,"/content/writing/teaching-a-ui-library-nepali.md":f,"/content/writing/the-check-that-only-lived-in-the-browser.md":p,"/content/writing/what-one-record-taught-me.md":m}),Pt=Q(Mt,`work`).map(e=>({...e,stack:String(e.stack||``).split(`,`).map(e=>e.trim()).filter(Boolean),shots:(Array.isArray(e.shots)?e.shots:[]).map(e=>{let[t,n,r=`3x2`]=e.split(`::`).map(e=>e.trim()),[i,a]=r.split(`x`).map(Number);return{src:t,caption:n,cols:i,rows:a}}),steps:(e.steps||[]).map(e=>{let[t,n]=e.split(`::`).map(e=>e.trim());return{title:t,text:n}})})).sort((e,t)=>Number(e.order)-Number(t.order)),Ft=Q(Nt,`writing`).sort((e,t)=>String(t.date).localeCompare(String(e.date)));function It(e){return new Date(e).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`})}var Lt=Object.assign({"/content/gallery/01-kaede.md":h,"/content/gallery/02-kalimati.md":g,"/content/gallery/03-generic-properties.md":_,"/content/gallery/04-dynamics-plugins.md":ee,"/content/gallery/04a-syncfusion-nepali.md":te,"/content/gallery/05-affiliatefeed.md":ne,"/content/gallery/05a-wpeverest-dev-docs.md":re,"/content/gallery/06-everest-forms-pdf.md":ie,"/content/gallery/07-rapti-crm.md":ae,"/content/gallery/08-taskmon.md":oe,"/content/gallery/08a-gdg-dang.md":se,"/content/gallery/09-pbs-ems.md":ce,"/content/gallery/10-nimbus.md":le,"/content/gallery/11-loksewa-quiz.md":ue,"/content/gallery/12-debendra-manandhar.md":de,"/content/gallery/13-four-seasons.md":fe,"/content/gallery/14-travel-time.md":pe,"/content/gallery/15-indiabix-scraper.md":me,"/content/gallery/16-in-cod-we-trust.md":he,"/content/gallery/17-adventures-of-joy.md":ge}),$=e=>typeof e==`string`?e:``,Rt=Q(Lt,`gallery`).map(e=>({...e,link:$(e.link),image:$(e.image),logo:$(e.logo),loop:$(e.loop),cover:$(e.cover),year:String(e.year)})).sort((e,t)=>e.slug.localeCompare(t.slug)),zt=[`All`,...new Set(Rt.map(e=>e.tag))];export{Ft as a,Pt as i,Rt as n,zt as r,It as t};