CREATE TABLE IF NOT EXISTS funders (
    id TEXT PRIMARY KEY NOT NULL,
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    name TEXT NOT NULL,
    website_url TEXT,
    contact_name TEXT,
    contact_email TEXT,
    focus_areas TEXT NOT NULL DEFAULT '[]',
    geographic_scope TEXT,
    notes TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS grant_opportunities (
    id TEXT PRIMARY KEY NOT NULL,
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    funder_id TEXT NOT NULL REFERENCES funders(id),
    title TEXT NOT NULL,
    description TEXT,
    focus_area TEXT,
    award_min INTEGER,
    award_max INTEGER,
    deadline_at TEXT,
    recurring INTEGER NOT NULL DEFAULT 0,
    eligibility_summary TEXT,
    application_url TEXT,
    report_requirements TEXT,
    status TEXT NOT NULL DEFAULT 'identified',
    source_url TEXT,
    last_checked_at TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS grant_applications (
    id TEXT PRIMARY KEY NOT NULL,
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    opportunity_id TEXT NOT NULL REFERENCES grant_opportunities(id),
    status TEXT NOT NULL DEFAULT 'draft',
    requested_amount INTEGER,
    project_title TEXT,
    narrative_draft TEXT,
    budget_json TEXT,
    submitted_at TEXT,
    awarded_amount INTEGER,
    reporting_due_at TEXT,
    notes TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX idx_funders_tenant_id ON funders(tenant_id);
CREATE INDEX idx_grant_opportunities_tenant_id ON grant_opportunities(tenant_id);
CREATE INDEX idx_grant_opportunities_deadline ON grant_opportunities(deadline_at);
CREATE INDEX idx_grant_applications_tenant_id ON grant_applications(tenant_id);
