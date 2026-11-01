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
`,a=`---
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
`,o=`---
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
`,s=`---
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
`,c=`---
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
`,l=`---
title: Why every edit in Kaede leaves a fingerprint
date: 2026-10-03
project: kaede
summary: An air waybill is a contract. Here's how Kaede makes a quiet edit to its history show up, using nothing more exotic than SHA-256.
---

An air waybill is a contract between a shipper and a carrier. Once it's executed, its routing, rating, declared values and parties shouldn't change. Leave balances and payroll are the same: money and people's time.

Most systems keep an audit log. The trouble with an ordinary audit log is that it's just another table. Anyone who can edit the data can usually edit the log too, and nothing would look wrong.

## Chaining the history

In Kaede, every entry in the audit trail carries a hash of itself and of the entry before it:

\`\`\`
row_hash = sha256(prev_hash || canonical(row))
\`\`\`

So each hash depends on every entry before it. Change a number, delete a row, or back-date an entry, and the hash at that point stops matching. So does every hash after it.

A few details matter more than the hashing itself:

- **Hash the facts, not the housekeeping.** The hash covers what the record says happened: who, which record, the values, the effective date. It leaves out columns that routine maintenance is allowed to touch, like \`updated_at\`, so normal operations never look like tampering.
- **Canonical form.** The row is serialised the same way every time, so the same facts always produce the same hash.
- **Same transaction.** The stamp is written in the same database transaction as the change it records. There's no window where one exists without the other.

## Checking it every night

A chain nobody checks is decoration. Kaede walks the chain every night and alerts the developers the moment one entry doesn't match.

It doesn't re-check everything from the start each night. Each successful run records where it stopped, and the next run starts there, first confirming that row is still there with the same hash. So the nightly cost is one day's rows, and the part already verified can't be edited without the next walk noticing. A break doesn't move the checkpoint either: it's reported every night until somebody deals with it.

## Evidence, not prevention

It's worth being honest about what this does. Someone with full database access could rewrite a row and recompute every hash after it. What they can't do is change history *by accident*, or quietly, without leaving a trace a nightly check will catch. That's what nearly all real tampering looks like: a quick fix to a number, under pressure, by someone who didn't think anyone would look.

For a freight forwarder, that means that when a customer, an airline or an auditor asks "who changed this, and when?", there's an answer they can trust.
`,u=`---
title: Kaede
year: 2022–now
kind: Cargo ERP
tag: Systems
image: /media/work/kaede.jpg
link: /work/kaede
featured: true
summary: Reads the paperwork, learns your office, talks to airlines in ONE Record.
---
`,d=`---
title: Kalimati Market
year: 2021–25
kind: Government platform
tag: Websites
image: /media/work/kalimati.jpg
link: /work/kalimati
featured: true
summary: Prices for the public, dues paid by phone through eSewa and Khalti. Built solo.
---
`,f=`---
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
`,p=`---
title: Dynamics CRM plugins
year: 2020
kind: C# plugins
tag: Open source
image: /media/work/dynamics-plugins.jpg
link: https://github.com/coderkoala/DynamicsCRMLeads
featured: false
summary: Leads, Opportunity and Obituaries modules for a US brokerage.
---
`,m=`---
title: Syncfusion in Nepali
year: 2024
kind: Localisation
tag: Open source
image: /media/work/syncfusion-nepali.jpg
link: https://github.com/syncfusion/ej2-locale/pull/192
featured: false
summary: Translated a whole UI library into Nepali, alone. It ships upstream now.
---
`,h=`---
title: Affiliatefeed
year: 2021
kind: Shopify app
tag: Systems
image: /media/work/affiliatefeed.jpg
link: https://affiliatefeed.exportfeed.com/
featured: false
summary: Took a web app apart and shipped it as a standalone Shopify PWA.
---
`,g=`---
title: WPEverest developer docs
year: 2020
kind: Documentation
tag: Open source
image: /media/work/wpeverest-dev-docs.jpg
link: https://themegrill.github.io/dev-docs/
featured: false
summary: The docs every Everest Forms add-on developer starts from. I wrote them.
---
`,_=`---
title: Everest Forms
year: 2020
kind: WordPress plugins
tag: Open source
image: /media/work/everest-forms.png
link: https://github.com/themegrill/everest-forms/pulls?q=is%3Apr+author%3Acoderkoala+is%3Amerged
featured: false
summary: 28 merged PRs, WPML support, PHPUnit, and a PDF add-on twice as fast.
---
`,ee=`---
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
`,te=`---
title: Taskmon
year: 2019
kind: Task manager
tag: Systems
image: /media/portfolio-images/portfolio1.png
link: 
featured: false
summary: Create, hand off, chase and close tasks across a team.
---
`,ne=`---
title: GDG Dang
year: 2019
kind: Community portal and talk
tag: Open source
image: /media/work/gdg-vision.png
link: https://github.com/gdgdang
featured: false
summary: Volunteer organizer. Shipped the DevFest 2019 site and spoke on Google Vision AI.
---
`,re=`---
title: Presidential Business School EMS
year: 2019
kind: Exam system
tag: Systems
image: /media/portfolio-images/portfolio3.png
link: 
featured: false
summary: Random entrance papers, and a scraper that filled the question bank.
---
`,ie=`---
title: Nimbus Nepal
year: 2019
kind: CMS and backend
tag: Websites
image: /media/portfolio-images/portfolio6.png
link: https://nimbusnepal.com
featured: false
summary: A Laravel CMS with an applicant tracker and Analytics built in.
---
`,ae=`---
title: Loksewa Aayog Quiz
year: 2019
kind: Facebook Instant game
tag: Games
image: /media/portfolio-images/portfolio5.png
link: http://fb.gg/play/464364207493058
featured: false
summary: Ten civil-service questions, then brag to your friends.
---
`,oe=`---
title: Debendra Manandhar
year: 2019
kind: Website · archived copy
tag: Websites
image: /media/portfolio-images/portfolio4.png
link: https://web.archive.org/web/20200806075149/https://debendramanandhar.com/
featured: false
summary: A coach's site with programmes, an academy and PayPal.
---
`,se=`---
title: Four Seasons Engineering
year: 2019
kind: Website
tag: Websites
image: /media/portfolio-images/portfolio8.png
link: 
featured: false
summary: A builder's website, start to finish in three days.
---
`,ce=`---
title: Travel Time Nepal
year: 2019
kind: Website · archived copy
tag: Websites
image: /media/portfolio-images/portfolio7.png
link: https://web.archive.org/web/20200122104033/http://traveltimenepal.com:80/
featured: false
summary: A Thamel travel agency with payments, deals and auto-replies. I wrote the copy too.
---
`,le=`---
title: Indiabix scraper
year: 2019
kind: Python
tag: Open source
image: /media/work/indiabix-scraper.jpg
link: https://github.com/coderkoala/indiabix-scraper
featured: false
summary: Thousands of aptitude questions, pulled while I slept.
---
`,ue=`---
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
`,de=`---
title: Adventures of Joy
year: 2017
kind: C++ game
tag: Games
image: /media/portfolio-images/portfolio2.png
link: https://github.com/coderkoala/RoguelikeRPG
featured: false
summary: A top-down RPG on my own engine, written in C++ and SFML.
---
`;function v(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var y=v();function fe(e){y=e}var b={exec:()=>null};function x(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function S(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(C.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var pe=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),C={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:x(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:x(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:x(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:x(e=>RegExp(`^ {0,${e}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:x(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:x(e=>RegExp(`^ {0,${e}}(?:</?(?:${O})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,`i`)),blockquoteBeginRegex:x(e=>RegExp(`^ {0,${e}}>`))},me=/^(?:[ \t]*(?:\n|$))+/,he=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ge=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,w=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,_e=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,T=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ve=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ye=S(ve).replace(/bull/g,T).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),be=S(ve).replace(/bull/g,T).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),E=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,xe=/^[^\n]+/,D=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Se=S(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,D).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ce=S(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,T).getRegex(),O=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,k=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,we=S(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,k).replace(`tag`,O).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Te=e=>S(E).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,O).getRegex(),Ee=Te(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),De=Te(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),A={blockquote:S(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace(`paragraph`,De).getRegex(),code:he,def:Se,fences:ge,heading:_e,hr:w,html:we,lheading:ye,list:Ce,newline:me,paragraph:Ee,table:b,text:xe},Oe=S(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,O).getRegex(),ke={...A,lheading:be,table:Oe,paragraph:S(E).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Oe).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,` {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`).replace(`tag`,O).getRegex()},Ae={...A,html:S(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,k).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:b,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:S(E).replace(`hr`,w).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ye).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},je=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Me=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ne=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,Pe=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,j=/[\p{P}\p{S}]/u,M=/[\s\p{P}\p{S}]/u,N=/[^\s\p{P}\p{S}]/u,Fe=S(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,M).getRegex(),Ie=/[\p{Pi}\p{Ps}"']/u,Le=/(?!~)[\p{P}\p{S}]/u,Re=/(?!~)[\s\p{P}\p{S}]/u,ze=/(?:[^\s\p{P}\p{S}]|~)/u,Be=S(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,pe?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Ve=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,He=S(Ve,`u`).replace(/punct/g,j).getRegex(),Ue=S(Ve,`u`).replace(/punct/g,Le).getRegex(),We=S(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Ie).replace(/punct/g,j).getRegex(),Ge=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Ke=S(Ge,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),qe=S(Ge,`gu`).replace(/notPunctSpace/g,ze).replace(/punctSpace/g,Re).replace(/punct/g,Le).getRegex(),Je=S(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),Ye=S(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),Xe=S(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),Ze=S(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,j).getRegex(),Qe=S(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,N).replace(/punctSpace/g,M).replace(/punct/g,j).getRegex(),$e=S(/\\(punct)/,`gu`).replace(/punct/g,j).getRegex(),et=S(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,`gu`).replace(/punct/g,j).getRegex(),tt=S(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nt=S(k).replace(`(?:-->|$)`,`-->`).getRegex(),rt=S(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,nt).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),it=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,P=S(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,it).getRegex(),at=S(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace(`label`,P).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ot=S(/^!?\[(label)\]\[(ref)\]/).replace(`label`,P).replace(`ref`,D).getRegex(),st=S(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,D).getRegex(),ct=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,lt=S(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,it).getRegex(),ut=S(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,S(/^!?\[(label)\]\[(ref)\]/).replace(`label`,lt).replace(`ref`,ct).getRegex()).replace(`nolink`,S(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,ct).getRegex()).getRegex(),dt=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ft=S(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),F={_backpedal:b,anyPunctuation:$e,anyPunctuationOutsideCode:et,autolink:tt,blockSkip:Be,br:Ne,code:Me,del:b,delLDelim:b,delRDelim:b,emStrongLDelim:He,emStrongRDelimAst:Ke,emStrongRDelimUnd:Ye,escape:je,link:at,nolink:st,punctuation:Fe,reflink:ot,reflinkSearch:ut,tag:rt,text:Pe,url:b},pt={...F,emStrongLDelim:We,emStrongRDelimAst:Je,emStrongRDelimUnd:Xe,link:S(/^!?\[(label)\]\((.*?)\)/).replace(`label`,P).getRegex(),reflink:S(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,P).getRegex()},I={...F,emStrongRDelimAst:qe,emStrongLDelim:Ue,delLDelim:Ze,delRDelim:Qe,url:S(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,ft).replace(`protocol`,dt).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:S(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,dt).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},mt={...I,br:S(Ne).replace(`{2,}`,`*`).getRegex(),text:S(I.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},L={normal:A,gfm:ke,pedantic:Ae},R={normal:F,gfm:I,breaks:mt,pedantic:pt},ht={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},gt=e=>ht[e];function z(e,t){if(t){if(C.escapeTest.test(e))return e.replace(C.escapeReplace,gt)}else if(C.escapeTestNoEncode.test(e))return e.replace(C.escapeReplaceNoEncode,gt);return e}function _t(e){return C.numericCharacterReference.test(e)?e.replace(C.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return`&amp;`;let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:r===38?`&amp;`:String.fromCodePoint(r)}):e}function vt(e){try{e=encodeURI(e).replace(C.percentDecode,`%`)}catch{return null}return e}function yt(e,t){let n=e.replace(C.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(C.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(C.slashPipe,`|`);return n}function B(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function bt(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&C.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function V(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function xt(e,t){if(e.indexOf(t[0])===-1&&e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function H(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function St(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`,l=r.state.inLink,u=r.state.linkEmitted,d=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let f=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=d;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:f}}function Ct(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function wt(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var U=class{options;rules;lexer;constructor(e){this.options=e||y}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:bt(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ct(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=B(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:B(t[0],`
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
`+e}m=!p.trim(),e=e.substring(c.length+1),f=l.slice(h)}}let g=n.slice(l,r());o.loose||(c?o.loose=!0:this.rules.other.doubleBlankLine.test(g)&&(c=!0)),o.items.push({type:`list_item`,raw:g,task:!!this.options.gfm&&this.rules.other.listIsTask.test(a),loose:!1,text:a,tokens:[]})}let l=o.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;o.raw=n.slice(0,r()).trimEnd();for(let e of o.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!o.loose){let t=e.tokens.filter(e=>e.type===`space`);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of o.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,o.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(o.loose)for(let e of o.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=bt(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&xt(t[2],`()`)!==-1)return;let e=V(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:B(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=yt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:B(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(yt(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:B(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&wt(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=B(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=xt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),St(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&wt(e,n[1],r,this.rules))return;let i=t[V((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return St(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||!r[1]&&!r[2]&&!r[3]&&!r[4])return;let i=r[0][0],a=n===i,o=t.length-e.length,s=o;for(;!this.options.pedantic&&s>0&&t[s-1]===i;)s--;let c=[...t.slice(Math.max(0,s-2),s)].at(-1)??``,l=c===`*`||c===`_`||!!this.rules.inline.punctuation.exec(c);s<o&&(n=c);let u=s<o?l:!!this.rules.inline.punctuation.exec(n);if(r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let d=r[1]||r[3]||``;if(!d||!n||u){let n=[...r[0]].length-1,u,f,p=n,m=0,h=o-s+n,g=!this.options.pedantic&&!!c.trim()&&(!!d||i===`*`&&!l),_=i===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,t=t.slice(-1*e.length+n);(r=_.exec(t))!==null;){if(u=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!u)continue;if(f=[...u].length,r[3]||r[4]){p+=f;continue}if(r[5]||r[6]||g){if(a&&(r[5]||r[6]))break;if(h%3&&!((h+f)%3)){m+=f;continue}}if(p-=f,p>0)continue;f=Math.min(f,f+p+m);let t=[...r[0]][0].length,i=e.slice(0,n+r.index+t+f);if(Math.min(n,f)%2){let e=i.slice(1,-1);return{type:`em`,raw:i,text:e,tokens:this.lexer.inlineTokens(e)}}let o=i.slice(2,-2);return{type:`strong`,raw:i,text:o,tokens:this.lexer.inlineTokens(o)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:_t(t[0]),escaped:e}}}},W=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||y,this.options.tokenizer=this.options.tokenizer||new U,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:C,block:L.normal,inline:R.normal};this.options.pedantic?(t.block=L.pedantic,t.inline=R.pedantic):this.options.gfm&&(t.block=L.gfm,t.inline=this.options.breaks?R.breaks:R.gfm),this.tokenizer.rules=t}static get rules(){return{block:L,inline:R}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(C.carriageReturn,`
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${z(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?z(n,!0):this.parser.parseInline(r),o=vt(e);if(o===null)return a;e=z(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+z(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=vt(e);if(i===null)return z(n);e=i;let a=`<img src="${z(e)}" alt="${z(n)}"`;return t&&(a+=` title="${z(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:z(e.text)}},K=class{parser;strong({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}em({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}codespan({text:e}){return e}del({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}html({text:e}){return e}text({text:e}){return e}link({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}image({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}br(){return``}checkbox({raw:e}){return e}},q=class e{options;renderer;textRenderer;constructor(e){this.options=e||y,this.options.renderer=this.options.renderer||new G,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new K,this.textRenderer.parser=this}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},J=class{options;block;constructor(e){this.options=e||y}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?W.lex:W.lexInline}provideParser(e=this.block){return e?q.parse:q.parseInline}};function Y(e,t){if(Array.isArray(t))for(let n=0;n<t.length;n++)e.push(t[n]);else e.push(t)}var X=new class{defaults=v();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=q;Renderer=G;TextRenderer=K;Lexer=W;Tokenizer=U;Hooks=J;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(Y(n,t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)Y(n,this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)Y(n,this.walkTokens(e.tokens,t));break}case`list`:{let e=r;Y(n,this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);Y(n,this.walkTokens(i,t))}):e.tokens&&Y(n,this.walkTokens(e.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new G(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new U(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new J;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=J.passThroughHooks.has(n)?e=>{if(t.options.async&&J.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(t.options.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&Y(n,t.call(this,e)),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return W.lex(e,t??this.defaults)}parser(e,t){return q.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?W.lex:W.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?q.parse:q.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?W.lex:W.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?q.parse:q.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+z(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Z(e,t){return X.parse(e,t)}Z.options=Z.setOptions=function(e){return X.setOptions(e),Z.defaults=X.defaults,fe(Z.defaults),Z},Z.getDefaults=v,Z.defaults=y;function Tt(...e){return X.use(...e),Z.defaults=X.defaults,fe(Z.defaults),Z}Z.use=Tt,Z.walkTokens=function(e,t){return X.walkTokens(e,t)},Z.parseInline=X.parseInline,Z.Parser=q,Z.parser=q.parse,Z.Renderer=G,Z.TextRenderer=K,Z.Lexer=W,Z.lexer=W.lex,Z.Tokenizer=U,Z.Hooks=J,Z.parse=Z,Z.options,Z.setOptions,Z.walkTokens,Z.parseInline,q.parse,W.lex;function Et(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},body:e};let n={},r=null;for(let e of t[1].split(/\r?\n/)){let t=e.match(/^\s+-\s+(.*)$/);if(t&&r){n[r].push(t[1].trim());continue}let i=e.match(/^([\w-]+):\s*(.*)$/);if(!i)continue;let[,a,o]=i;o===``?(n[a]=[],r=a):(r=null,n[a]=o===`true`||o!==`false`&&o)}return{data:n,body:t[2]}}function Q(e,t){return Object.entries(e).map(([e,n])=>{let r=e.split(`/`).pop().replace(/\.md$/,``),{data:i,body:a}=Et(n);return{...i,slug:r,url:`/${t}/${r}`,html:Z.parse(a)}}).filter(e=>!e.draft||!1)}var Dt=Object.assign({"/content/work/generic-properties.md":e,"/content/work/kaede.md":t,"/content/work/kalimati.md":n}),Ot=Object.assign({"/content/writing/a-date-that-did-not-fit.md":r,"/content/writing/finding-the-nearest-agent.md":i,"/content/writing/one-developer-one-market.md":a,"/content/writing/taking-money-on-a-government-website.md":o,"/content/writing/teaching-a-ui-library-nepali.md":s,"/content/writing/the-check-that-only-lived-in-the-browser.md":c,"/content/writing/why-every-edit-is-chained.md":l}),kt=Q(Dt,`work`).map(e=>({...e,stack:String(e.stack||``).split(`,`).map(e=>e.trim()).filter(Boolean),shots:(Array.isArray(e.shots)?e.shots:[]).map(e=>{let[t,n,r=`3x2`]=e.split(`::`).map(e=>e.trim()),[i,a]=r.split(`x`).map(Number);return{src:t,caption:n,cols:i,rows:a}}),steps:(e.steps||[]).map(e=>{let[t,n]=e.split(`::`).map(e=>e.trim());return{title:t,text:n}})})).sort((e,t)=>Number(e.order)-Number(t.order)),At=Q(Ot,`writing`).sort((e,t)=>String(t.date).localeCompare(String(e.date)));function jt(e){return new Date(e).toLocaleDateString(`en-GB`,{day:`numeric`,month:`long`,year:`numeric`})}var Mt=Object.assign({"/content/gallery/01-kaede.md":u,"/content/gallery/02-kalimati.md":d,"/content/gallery/03-generic-properties.md":f,"/content/gallery/04-dynamics-plugins.md":p,"/content/gallery/04a-syncfusion-nepali.md":m,"/content/gallery/05-affiliatefeed.md":h,"/content/gallery/05a-wpeverest-dev-docs.md":g,"/content/gallery/06-everest-forms-pdf.md":_,"/content/gallery/07-rapti-crm.md":ee,"/content/gallery/08-taskmon.md":te,"/content/gallery/08a-gdg-dang.md":ne,"/content/gallery/09-pbs-ems.md":re,"/content/gallery/10-nimbus.md":ie,"/content/gallery/11-loksewa-quiz.md":ae,"/content/gallery/12-debendra-manandhar.md":oe,"/content/gallery/13-four-seasons.md":se,"/content/gallery/14-travel-time.md":ce,"/content/gallery/15-indiabix-scraper.md":le,"/content/gallery/16-in-cod-we-trust.md":ue,"/content/gallery/17-adventures-of-joy.md":de}),$=e=>typeof e==`string`?e:``,Nt=Q(Mt,`gallery`).map(e=>({...e,link:$(e.link),image:$(e.image),logo:$(e.logo),loop:$(e.loop),cover:$(e.cover),year:String(e.year)})).sort((e,t)=>e.slug.localeCompare(t.slug)),Pt=[`All`,...new Set(Nt.map(e=>e.tag))];export{At as a,kt as i,Nt as n,Pt as r,jt as t};