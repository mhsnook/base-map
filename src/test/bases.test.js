import { describe, it, expect } from 'vitest';
import { getBaseCountsByYear, getBasesForYear, bases, COUNTRY_COLORS } from '../data/bases';

describe('bases data', () => {
  it('every base has required fields', () => {
    for (const base of bases) {
      expect(base).toHaveProperty('name');
      expect(base).toHaveProperty('country');
      expect(typeof base.lat).toBe('number');
      expect(typeof base.lng).toBe('number');
      expect(typeof base.yearOpened).toBe('number');
      expect(base.yearClosed === null || typeof base.yearClosed === 'number').toBe(true);
    }
  });

  it('yearOpened <= yearClosed when closed', () => {
    for (const base of bases) {
      if (base.yearClosed !== null) {
        expect(base.yearClosed).toBeGreaterThanOrEqual(base.yearOpened);
      }
    }
  });

  it('every country has a color', () => {
    const countries = [...new Set(bases.map((b) => b.country))];
    for (const c of countries) {
      expect(COUNTRY_COLORS[c]).toBeDefined();
    }
  });

  it('US color is red', () => {
    expect(COUNTRY_COLORS.US).toBe('#e03030');
  });
});

describe('getBaseCountsByYear', () => {
  const counts = getBaseCountsByYear();

  it('returns data for 1950 through 2026', () => {
    for (let y = 1950; y <= 2026; y++) {
      expect(counts[y]).toBeDefined();
      expect(counts[y].total).toBeGreaterThanOrEqual(0);
      expect(counts[y].usBases + counts[y].otherBases).toBe(counts[y].total);
    }
  });

  it('total is positive for every year', () => {
    for (let y = 1950; y <= 2026; y++) {
      expect(counts[y].total).toBeGreaterThan(0);
    }
  });
});

describe('getBasesForYear', () => {
  it('returns only bases open in that year', () => {
    const active = getBasesForYear(1960);
    for (const base of active) {
      expect(base.yearOpened).toBeLessThanOrEqual(1960);
      if (base.yearClosed !== null) {
        expect(base.yearClosed).toBeGreaterThan(1960);
      }
    }
  });

  it('closed bases are excluded after closure', () => {
    // Clark closed in 1991
    const before = getBasesForYear(1990);
    const after = getBasesForYear(1992);
    expect(before.some((b) => b.name === 'Clark Air Base')).toBe(true);
    expect(after.some((b) => b.name === 'Clark Air Base')).toBe(false);
  });
});
