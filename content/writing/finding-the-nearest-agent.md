---
title: Finding the nearest agent among millions
date: 2021-05-25
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
