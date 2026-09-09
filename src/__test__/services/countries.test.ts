import { describe, expect, it } from 'vitest';

import { normalizeCountry } from '../../services/countries';
import { RawCountriesResponse } from '../mocks/countries';

describe('normalizeCountry', () => {
  it('maps a raw mledoze country into the app shape', () => {
    const country = normalizeCountry(RawCountriesResponse[0]);

    expect(country).toEqual({
      name: 'Colombia',
      nativeName: 'Colombia',
      alpha2Code: 'CO',
      alpha3Code: 'COL',
      region: 'Americas',
      subregion: 'South America',
      capital: 'Bogotá',
      flag: 'https://flagcdn.com/w320/co.png',
      currencies: [{ name: 'Colombian peso' }],
      languages: [{ name: 'Spanish' }],
      topLevelDomain: ['.co'],
      borders: ['VEN'],
    });
  });

  it('falls back gracefully when optional fields are missing', () => {
    const country = normalizeCountry({
      name: { common: 'Nowhere' },
      cca2: 'NW',
      cca3: 'NWH',
      region: 'Antarctic',
    });

    expect(country.nativeName).toBe('Nowhere');
    expect(country.capital).toBe('');
    expect(country.subregion).toBe('');
    expect(country.currencies).toEqual([]);
    expect(country.languages).toEqual([]);
    expect(country.topLevelDomain).toEqual([]);
    expect(country.borders).toEqual([]);
  });
});
