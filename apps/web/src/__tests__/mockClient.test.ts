import { describe, it, expect } from 'vitest';
import {
  mockAnimals,
  mockGrants,
  mockLostFound,
  mockTasks,
  getMockStats,
  getMockAnimal,
} from '@/lib/api/mockClient';

describe('mockClient', () => {
  it('has animals', () => {
    expect(mockAnimals.length).toBeGreaterThan(0);
  });

  it('every animal has required fields', () => {
    for (const a of mockAnimals) {
      expect(a.id).toBeTruthy();
      expect(a.name).toBeTruthy();
      expect(a.species).toBeTruthy();
      expect(a.status).toBeTruthy();
      expect(a.intake_date).toBeTruthy();
    }
  });

  it('getMockStats returns correct animal count', () => {
    const stats = getMockStats();
    expect(stats.animalsInCare).toBeGreaterThan(0);
    expect(stats.adoptable).toBeGreaterThanOrEqual(0);
  });

  it('getMockAnimal finds by id', () => {
    const first = mockAnimals[0];
    const found = getMockAnimal(first.id);
    expect(found).toBeDefined();
    expect(found?.id).toBe(first.id);
  });

  it('getMockAnimal returns undefined for unknown id', () => {
    expect(getMockAnimal('does-not-exist')).toBeUndefined();
  });

  it('has grants', () => {
    expect(mockGrants.length).toBeGreaterThan(0);
  });

  it('has tasks', () => {
    expect(mockTasks.length).toBeGreaterThan(0);
  });

  it('has lost/found reports', () => {
    expect(mockLostFound.length).toBeGreaterThan(0);
  });

  it('all animal statuses are valid', () => {
    const validStatuses = new Set([
      'intake', 'quarantine', 'medical_hold', 'behavior_hold',
      'foster_needed', 'in_foster', 'adoptable', 'adoption_pending',
      'adopted', 'transferred', 'returned', 'lost', 'found', 'deceased',
    ]);
    for (const a of mockAnimals) {
      expect(validStatuses.has(a.status)).toBe(true);
    }
  });
});
