const COUNTRIES_ENDPOINT = 'https://cdn.jsdelivr.net/gh/mledoze/countries@master/dist/countries.json';

export interface Country {
  name: string;
  nativeName: string;
  alpha2Code: string;
  alpha3Code: string;
  region: string;
  subregion: string;
  capital: string;
  flag: string;
  currencies: { name: string }[];
  languages: { name: string }[];
  topLevelDomain: string[];
  borders: string[];
}

export interface RawCountry {
  name: {
    common: string;
    native?: Record<string, { common: string }>;
  };
  tld?: string[];
  cca2: string;
  cca3: string;
  capital?: string[];
  region: string;
  subregion?: string;
  currencies?: Record<string, { name: string }>;
  languages?: Record<string, string>;
  borders?: string[];
}

function flagUrl(alpha2Code: string): string {
  return `https://flagcdn.com/w320/${alpha2Code.toLowerCase()}.png`;
}

function nativeName(raw: RawCountry): string {
  const native = raw.name.native ? Object.values(raw.name.native)[0] : undefined;
  return native?.common ?? raw.name.common;
}

export function normalizeCountry(raw: RawCountry): Country {
  return {
    name: raw.name.common,
    nativeName: nativeName(raw),
    alpha2Code: raw.cca2,
    alpha3Code: raw.cca3,
    region: raw.region,
    subregion: raw.subregion ?? '',
    capital: raw.capital?.[0] ?? '',
    flag: flagUrl(raw.cca2),
    currencies: Object.values(raw.currencies ?? {}).map((currency) => ({ name: currency.name })),
    languages: Object.values(raw.languages ?? {}).map((name) => ({ name })),
    topLevelDomain: raw.tld ?? [],
    borders: raw.borders ?? [],
  };
}

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(COUNTRIES_ENDPOINT);
  if (!response.ok) throw new Error('Failed to fetch countries');
  const raw: RawCountry[] = await response.json();
  return raw.map(normalizeCountry);
}
