CREATE TABLE IF NOT EXISTS resource_providers (
    id TEXT PRIMARY KEY NOT NULL,
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    website_url TEXT,
    contact_name TEXT,
    contact_email TEXT,
    contact_phone TEXT,
    geographic_scope TEXT,
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX idx_resource_providers_tenant_id ON resource_providers(tenant_id);
