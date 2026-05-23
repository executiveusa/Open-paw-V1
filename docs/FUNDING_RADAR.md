# Open Paw Funding Radar

## Purpose

Funding Radar is a first-class module that helps animal welfare organizations find grants, determine eligibility, draft applications, track deadlines, manage funder relationships, and generate impact reports.

This is a core differentiator. Most animal welfare tools track animals. Open Paw should also help organizations survive financially.

## Core user stories

- As a rescue director, I want to find grants that match my organization so I do not miss funding.
- As a grant writer, I want to draft narratives using real animal outcome data.
- As a fiscal sponsor, I want to track programs, opportunities, applications, reports, and compliance.
- As a small shelter, I want reminders for grant deadlines and reporting obligations.
- As a donor relations lead, I want a resource directory and funder CRM.

## Data model

```txt
funders
  id
  tenant_id
  name
  website_url
  contact_name
  contact_email
  focus_areas
  geographic_scope
  notes
  created_at
  updated_at

grant_opportunities
  id
  funder_id
  title
  description
  focus_area
  award_min
  award_max
  deadline_at
  recurring
  eligibility_summary
  application_url
  report_requirements
  status
  source_url
  last_checked_at

grant_applications
  id
  tenant_id
  opportunity_id
  status
  requested_amount
  project_title
  narrative_draft
  budget_json
  submitted_at
  awarded_amount
  reporting_due_at
  notes

resource_providers
  id
  tenant_id
  name
  type
  location
  website_url
  contact_email
  phone
  services
  notes
```

## Opportunity types

- shelter operations
- spay/neuter
- community cats/TNR
- emergency veterinary care
- disaster response
- foster program support
- transport
- adoption events
- facility improvement
- capacity building
- technology
- equine welfare
- wildlife rehabilitation
- municipal animal services
- community foundation grants
- corporate giving

## Grant workflow

```txt
Organization completes profile
  -> Funding Radar ranks matching opportunities
  -> User reviews eligibility
  -> Application workspace is created
  -> AI drafts outline and narrative
  -> Budget builder creates line items
  -> User attaches documents
  -> Checklist verifies readiness
  -> Submission is logged manually
  -> Reporting reminders are scheduled
  -> Impact report is generated after award period
```

## Organization profile fields

- legal name
- DBA/program name
- EIN or fiscal sponsor status
- city/state/country
- service area
- species served
- annual intake
- annual adoptions
- annual spay/neuter count
- annual budget
- population served
- programs
- insurance/compliance notes
- fiscal sponsor contact
- grant writer contact

## AI-assisted grant writer

AI may generate:

- letter of inquiry draft
- project summary
- needs statement
- program description
- outcome metrics
- budget narrative
- sustainability plan
- reporting draft
- thank-you letter draft

AI may not:

- submit grants automatically
- fabricate statistics
- invent partnerships
- claim nonprofit status without source data
- alter financial numbers without approval

## Impact metrics

Funding Radar should pull from live Open Paw records where possible:

- animals intaken
- animals adopted
- animals reunited
- animals transferred
- animals fostered
- vaccinations administered
- spay/neuter procedures
- medical cases supported
- volunteer hours
- foster placements
- lost/found matches
- funds spent by category

## Resource directory

Funding Radar also acts as a connector map for:

- vets
- low-cost clinics
- food banks
- emergency boarding
- foster networks
- transport volunteers
- spay/neuter providers
- microchip programs
- municipal contacts
- community foundations
- corporate partners
- media contacts

## V1 scope

- Manual funder/opportunity entry
- Curated seed grant list
- Organization profile
- Eligibility checklist
- Grant calendar
- Draft narrative workspace
- Budget table
- Impact report draft
- Resource directory

## Later scope

- grant webpage monitoring
- deadline change detection
- geographic matching
- email reminders
- funder CRM automations
- fiscal sponsor dashboard
- public resource sharing between trusted tenants
