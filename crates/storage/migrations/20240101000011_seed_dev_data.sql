-- Dev seed data (only applies in development)
INSERT OR IGNORE INTO tenants (id, name, slug, org_type, contact_email, city, state, is_active, created_at, updated_at)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'Happy Paws Rescue',
    'happy-paws-rescue',
    'rescue',
    'info@happypaws.example',
    'Austin',
    'TX',
    1,
    '2024-01-01T00:00:00Z',
    '2024-01-01T00:00:00Z'
);

INSERT OR IGNORE INTO animals (id, tenant_id, name, species, breed, sex, age_estimate_months, status, location, public_bio, created_at, updated_at, intake_date, is_restricted)
VALUES
    ('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Luna', 'cat', 'Domestic Shorthair', 'female', 18, 'adoptable', 'Foster Home A', 'Luna is a sweet, gentle cat who loves sunny spots and slow mornings.', '2024-01-15T00:00:00Z', '2024-01-15T00:00:00Z', '2024-01-15T00:00:00Z', 0),
    ('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Biscuit', 'dog', 'Labrador Mix', 'male', 24, 'adoptable', 'Foster Home B', 'Biscuit is an energetic lab mix who loves fetch and long walks.', '2024-01-20T00:00:00Z', '2024-01-20T00:00:00Z', '2024-01-20T00:00:00Z', 0),
    ('10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Pepper', 'cat', 'Tuxedo', 'female', 6, 'medical_hold', 'Medical Room', NULL, '2024-02-01T00:00:00Z', '2024-02-01T00:00:00Z', '2024-02-01T00:00:00Z', 0),
    ('10000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'Rex', 'dog', 'German Shepherd Mix', 'male', 36, 'intake', 'Intake Area', NULL, '2024-02-10T00:00:00Z', '2024-02-10T00:00:00Z', '2024-02-10T00:00:00Z', 0),
    ('10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000001', 'Daisy', 'rabbit', 'Holland Lop', 'female', 12, 'adoptable', 'Small Animal Room', 'Daisy is a curious Holland Lop who enjoys hay, leafy greens, and being gently petted.', '2024-02-15T00:00:00Z', '2024-02-15T00:00:00Z', '2024-02-15T00:00:00Z', 0);

INSERT OR IGNORE INTO funders (id, tenant_id, name, website_url, focus_areas, geographic_scope, created_at, updated_at)
VALUES
    ('20000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Petco Love Foundation', 'https://petcolove.org', '["animal welfare","spay-neuter","adoption"]', 'National', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
    ('20000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'ASPCA Grants', 'https://www.aspca.org/grants', '["animal welfare","shelter","rescue"]', 'National', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
    ('20000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'PetSmart Charities', 'https://petsmartcharities.org', '["adoption","spay-neuter","community cats"]', 'National', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z');

INSERT OR IGNORE INTO grant_opportunities (id, tenant_id, funder_id, title, description, award_min, award_max, deadline_at, status, created_at, updated_at, recurring)
VALUES
    ('30000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', 'Petco Love Lost Grant', 'Funding for lost pet recovery programs and microchipping initiatives.', 5000, 25000, '2024-09-30', 'identified', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z', 0),
    ('30000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000002', 'ASPCA Saving Lives Grant', 'General animal welfare funding for shelters and rescues.', 10000, 50000, '2024-10-15', 'researching', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z', 0);
