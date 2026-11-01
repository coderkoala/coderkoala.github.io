// One source for the résumé: the PDF (scripts/cv.mjs), the Word file (scripts/cv_docx.py) and /cv.
export const summary = "Built Kaede, a cargo ERP for freight forwarders, end to end: IATA ONE Record and Cargo-XML, AWB stock under concurrency, carrier-portal automation, and a learning engine that suggests from the office's own history. Laravel contributor; author of Syncfusion's Nepali locale. Full-stack developer in Kathmandu, shipping production software since 2018."

export const projects = [
  {
    name: 'Kaede', kind: 'Cargo ERP for freight forwarders', when: '2022 – present', role: 'Creator and lead engineer',
    points: [
      'Runs a forwarder end to end: quotes, air waybills and stock, pickup and delivery, billing, leave and payroll; air, sea and road.',
      'Reads booking emails, invoices and packing lists and drafts the waybill for a person to confirm; full-text search and OCR over every document.',
      'Learning engine suggests parties, HS codes and routings from the office’s own history; rate builder suggests prices from rate tables.',
      'Native IATA ONE Record and Cargo-XML; browser automation for airline portals (Cathay Cargo, Etihad Cargo, iCargo).',
      'WhatsApp, Viber, Telegram, LINE, WeChat, Teams, Slack, SMS, email and web chat in one desk; driver and warehouse app with scan batches.',
      'Plain-language analytics with the shipments behind every number; SHA-256 hash-chained audit trail verified nightly; multi-tenant with billing.',
    ],
    stack: 'Laravel 13, PHP 8.4, Vue 3, PostgreSQL, Reverb (WebSockets), Syncfusion, Playwright · English, Nepali, Japanese',
  },
  {
    name: 'Kalimati Market', kind: 'kalimatimarket.gov.np', when: '2021 – 2025', role: 'Sole developer',
    points: [
      'Platform for Nepal’s largest wholesale produce market (60–70% of Kathmandu valley supply): website, ad-free Android app and staff admin.',
      'Daily prices for 100+ commodities and arrivals, with history and comparisons; notices, tenders and pesticide reports; Nepali and English.',
      'Online dues payments via eSewa, Khalti and bank: exact-amount checks, single-use references, queued server-to-server verification, daily rollover.',
      'Payment API for gateway providers: per-provider HS512 JWTs, IP allow-listing, quarterly key rotation, named errors, maintenance-safe retries.',
      'Nightly sync with the market’s office system: transactional CSV imports with checksums and one-per-day guards, payment exports, libsodium encryption.',
    ],
    stack: 'Laravel, MySQL, queues, libsodium, JWT, Android',
  },

]

export const roles = [
  { org: 'Independent', title: 'Software Engineer and Consultant · Freelance', when: 'Jan 2020 – present', points: [
    'Design, build and run ERP, CRM and operations systems for clients, from schema to deployment. Kaede and Kalimati Market above.',
  ] },
  { org: 'Code for Nepal', title: 'Data Science Fellow · Part-time', when: 'Dec 2021 – May 2022', points: [] },
  { org: 'United Real Estate (US)', title: 'Software Engineer · Freelance', when: 'May 2020 – Apr 2021', points: [
    'Migrated the brokerage from Zoho CRM to Microsoft Dynamics 365, with tooling for records and the document store (to SharePoint).',
    'Node.js microservice over the Dynamics Web API (Azure AD) that finds agents near a lead among millions of records and maps them in seconds.',
    'C# plugins (Leads, Opportunity, Super Obituaries), schema tooling to replay customisations, Power Automate flows for mail and Planner.',
  ] },
  { org: 'Proshore', title: 'Software Engineer · Full-time', when: 'Oct 2020 – Feb 2021', points: [
    'Led the build of Affiliatefeed, a Shopify app forked from Exportfeed into a standalone PWA, including company-wide demos.',
    'Refactoring within Joomla MVC; pushed for test-driven development; remote Agile team.',
  ] },
  { org: 'TechSathi', title: 'Platform Architect · Part-time', when: 'Jun 2020 – Nov 2020', points: [
    'AWS operations and continuous delivery for a news portal; cut query times with views and stored procedures.',
  ] },
  { org: 'ThemeGrill (WPEverest)', title: 'WordPress Plugin Developer · Full-time', when: 'Nov 2019 – Jun 2020', points: [
    '28 merged pull requests to Everest Forms and User Registration: WPML support, PHPUnit setup, conditional logic, email validation.',
    'Rebuilt the PDF Submission add-on: render time at least halved, size from 12 MB to 5.6 MB.',
    'Found a file-upload validation bypass in Everest Forms Pro (fixed in 1.7) and closed a server-side email validation gap in the core plugin.',
    'Wrote the WPEverest developer documentation.',
  ] },
  { org: 'Gurkha Technology', title: 'Software Engineer · Full-time', when: 'Jul 2019 – Nov 2019', points: [
    'Exam system for Presidential Business School: randomised entrance papers; a scraper that gathered 17k questions, replacing manual entry.',
    'Two-person team for nimbusnepal.com and its Laravel CMS with an applicant tracking system.',
  ] },
  { org: 'Google Developer Group (GDG) Dang', title: 'Organizer and Speaker · Volunteer', when: '2019', points: [
    'Volunteer organizer; deployed the chapter’s DevFest 2019 site, a Vue PWA on Firebase.',
    'Spoke on Google Vision AI, with an open-source Lumen demo app for attendees to start from.',
  ] },
  { org: 'The Open Institute for Social Science', title: 'Software Engineer · Internship', when: 'Nov 2018 – Feb 2019', points: [
    'Contributed to ERPNext and Zulip under Dr. Peter Graif; Linux administration on DigitalOcean.',
  ] },
]

