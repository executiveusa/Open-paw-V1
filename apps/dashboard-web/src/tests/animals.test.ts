import { describe, it, expect } from 'vitest';
import { mockAnimals, mockStats } from '../data/mock';

describe('Animal data', () => {
  it('has mock animals', () => {
    expect(mockAnimals.length).toBeGreaterThan(0);
  });

  it('all animals have required fields', () => {
    for (const animal of mockAnimals) {
      expect(animal.id).toBeTruthy();
      expect(animal.name).toBeTruthy();
      expect(animal.species).toBeTruthy();
      expect(animal.status).toBeTruthy();
      expect(animal.tenant_id).toBeTruthy();
    }
  });

  it('stats match animal data', () => {
    const adoptable = mockAnimals.filter(a => a.status === 'adoptable').length;
    expect(mockStats.adoptable).toBe(adoptable);
  });

  it('no animal has empty name', () => {
    for (const animal of mockAnimals) {
      expect(animal.name.trim()).not.toBe('');
    }
  });

  it('all animals belong to a tenant', () => {
    for (const animal of mockAnimals) {
      expect(animal.tenant_id.length).toBeGreaterThan(0);
    }
  });
});

describe('Stats', () => {
  it('animalsInCare excludes adopted/transferred/deceased', () => {
    const inactive = ['adopted', 'transferred', 'deceased'];
    const active = mockAnimals.filter(a => !inactive.includes(a.status)).length;
    expect(mockStats.animalsInCare).toBe(active);
  });
});
