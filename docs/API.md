# Open Paw API Reference

Base URL: `http://localhost:3001` (development)

All responses are JSON. All errors are structured:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Animal not found"
  }
}
```

## Health

### GET /health

Check service availability.

**Response:**
```json
{
  "status": "ok",
  "service": "open-paw-api",
  "version": "0.1.0"
}
```

## Tenants

### GET /api/v1/tenants

List all active tenants.

### POST /api/v1/tenants

Create a new tenant.

**Body:**
```json
{
  "name": "Happy Paws Rescue",
  "org_type": "rescue"
}
```

**org_type values:** `rescue` | `shelter` | `foster_network` | `vet_clinic` | `spay_neuter_clinic` | `nonprofit` | `fiscal_sponsor` | `other`

### GET /api/v1/tenants/:tenant_id

Get a specific tenant.

## Animals

All animal routes are scoped to a tenant.

### GET /api/v1/tenants/:tenant_id/animals

List animals for a tenant.

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "tenant_id": "uuid",
      "name": "Luna",
      "species": "cat",
      "breed": "Domestic Shorthair",
      "sex": "female",
      "status": "adoptable",
      "location": "Foster Home A",
      "intake_date": "2024-01-15T00:00:00Z",
      "is_restricted": false,
      "created_at": "...",
      "updated_at": "..."
    }
  ]
}
```

### POST /api/v1/tenants/:tenant_id/animals

Create a new animal.

**Body:**
```json
{
  "name": "Luna",
  "species": "cat"
}
```

### GET /api/v1/tenants/:tenant_id/animals/:animal_id

Get a specific animal.

### PATCH /api/v1/tenants/:tenant_id/animals/:animal_id

Update animal status.

**Body:**
```json
{
  "status": "adoptable"
}
```

**Valid statuses:** `intake` | `quarantine` | `medical_hold` | `behavior_hold` | `foster_needed` | `in_foster` | `adoptable` | `adoption_pending` | `adopted` | `transferred` | `returned` | `lost` | `found` | `deceased`

## Funders

### GET /api/v1/tenants/:tenant_id/funders

List funders for a tenant.

### POST /api/v1/tenants/:tenant_id/funders

Create a new funder.

**Body:**
```json
{
  "name": "Petco Love Foundation",
  "website_url": "https://petcolove.org"
}
```

## Grant Opportunities

### GET /api/v1/tenants/:tenant_id/grant-opportunities

List grant opportunities. Returns opportunities joined with funder name, sorted by deadline ascending.

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Petco Love Lost Grant",
      "description": "...",
      "award_min": 5000,
      "award_max": 25000,
      "deadline_at": "2024-09-30",
      "status": "identified",
      "funder_name": "Petco Love Foundation"
    }
  ]
}
```

## Upcoming endpoints (roadmap)

```
GET  /api/v1/tenants/:id/people
POST /api/v1/tenants/:id/people
GET  /api/v1/tenants/:id/people/:person_id
PATCH /api/v1/tenants/:id/people/:person_id

GET  /api/v1/tenants/:id/animals/:animal_id/medical-records
POST /api/v1/tenants/:id/animals/:animal_id/medical-records

GET  /api/v1/tenants/:id/tasks
POST /api/v1/tenants/:id/tasks
PATCH /api/v1/tenants/:id/tasks/:task_id

GET  /api/v1/tenants/:id/lost-found
POST /api/v1/tenants/:id/lost-found
PATCH /api/v1/tenants/:id/lost-found/:report_id

POST /api/v1/tenants/:id/grant-opportunities
GET  /api/v1/tenants/:id/grant-opportunities/:opportunity_id

GET  /api/v1/tenants/:id/grant-applications
POST /api/v1/tenants/:id/grant-applications
PATCH /api/v1/tenants/:id/grant-applications/:application_id

GET  /api/v1/tenants/:id/resources
POST /api/v1/tenants/:id/resources

GET  /api/v1/tenants/:id/audit-events
```
