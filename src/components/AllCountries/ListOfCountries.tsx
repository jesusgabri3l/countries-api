import { useContext, useMemo } from 'react';

import { CountriesContext } from '../CountriesProvider';
import Countrie from './components/Country';
import Loader from '../layouts/Loader';

export default function ListOfCountries({ keyword, region }: { keyword: string; region: string }) {
  const { countries, loading, error } = useContext(CountriesContext);

  const filteredCountries = useMemo(() => {
    if (keyword) {
      return countries.filter((country) =>
        country.name.toLowerCase().includes(keyword.toLowerCase()),
      );
    }
    if (region && region !== 'all') {
      return countries.filter((country) => country.region === region);
    }
    return countries;
  }, [countries, keyword, region]);

  if (error) return <p className="text text--white">Could not load the countries list.</p>;
  if (loading) return <Loader />;

  return (
    <section className="allcountries">
      {filteredCountries.map((country) => (
        <Countrie key={country.alpha3Code} country={country} />
      ))}
    </section>
  );
}
