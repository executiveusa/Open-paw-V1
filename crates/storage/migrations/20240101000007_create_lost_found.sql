CREATE TABLE IF NOT EXISTS lost_found_reports (
    id TEXT PRIMARY KEY NOT NULL,
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    report_type TEXT NOT NULL,
    species TEXT NOT NULL,
    breed TEXT,
    color TEXT,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    incident_date TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    contact_phone TEXT,
    contact_email TEXT,
    match_status TEXT NOT NULL DEFAULT 'open',
    internal_notes TEXT,
    matched_animal_id TEXT REFERENCES animals(id),
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX idx_lost_found_tenant_id ON lost_found_reports(tenant_id);
CREATE INDEX idx_lost_found_match_status ON lost_found_reports(match_status);
