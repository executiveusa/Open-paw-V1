CREATE TABLE IF NOT EXISTS animals (
    id TEXT PRIMARY KEY NOT NULL,
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    name TEXT NOT NULL,
    species TEXT NOT NULL,
    breed TEXT,
    sex TEXT NOT NULL DEFAULT 'unknown',
    age_estimate_months INTEGER,
    weight_kg REAL,
    color TEXT,
    microchip_id TEXT,
    intake_date TEXT NOT NULL,
    intake_source TEXT,
    status TEXT NOT NULL DEFAULT 'intake',
    location TEXT,
    public_bio TEXT,
    private_notes TEXT,
    is_restricted INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS animal_photos (
    id TEXT PRIMARY KEY NOT NULL,
    animal_id TEXT NOT NULL REFERENCES animals(id),
    tenant_id TEXT NOT NULL REFERENCES tenants(id),
    file_path TEXT NOT NULL,
    is_primary INTEGER NOT NULL DEFAULT 0,
    caption TEXT,
    created_at TEXT NOT NULL
);

CREATE INDEX idx_animals_tenant_id ON animals(tenant_id);
CREATE INDEX idx_animals_status ON animals(status);
CREATE INDEX idx_animals_name ON animals(name);
CREATE INDEX idx_animals_species ON animals(species);
CREATE INDEX idx_animal_photos_animal_id ON animal_photos(animal_id);
