CREATE TABLE IF NOT EXISTS people (
    id TEXT PRIMARY KEY NOT NULL,
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    address TEXT,
    role TEXT NOT NULL DEFAULT 'other',
    notes TEXT,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX idx_people_tenant_id ON people(tenant_id);
CREATE INDEX idx_people_email ON people(email);
