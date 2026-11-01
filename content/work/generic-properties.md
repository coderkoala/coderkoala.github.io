---
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
video: cxSg2U6NzUE
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
