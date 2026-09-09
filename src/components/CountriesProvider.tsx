import { createContext, useEffect, useState, type ReactNode } from 'react';

import { fetchCountries, type Country } from '../services/countries';

interface CountriesContextValue {
  countries: Country[];
  loading: boolean;
  error: boolean;
}

export const CountriesContext = createContext<CountriesContextValue>({
  countries: [],
  loading: true,
  error: false,
});

function CountriesProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchCountries()
      .then((data) => {
        if (cancelled) return;
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, loading, error }}>
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesProvider;
