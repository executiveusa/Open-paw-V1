CREATE TABLE IF NOT EXISTS medical_records (
    id TEXT PRIMARY KEY NOT NULL,
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    animal_id TEXT NOT NULL REFERENCES animals(id),
    note_type TEXT NOT NULL DEFAULT 'general_note',
    note TEXT,
    performed_by TEXT,
    performed_at TEXT,
    is_restricted INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX idx_medical_records_animal_id ON medical_records(animal_id);
CREATE INDEX idx_medical_records_tenant_id ON medical_records(tenant_id);
