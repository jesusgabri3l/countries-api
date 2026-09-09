import { useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { CountriesContext } from '../CountriesProvider';
import Loader from '../layouts/Loader';
import NotFound from '../layouts/NotFound';
import CountrieInfo from './CountrieInfo';

export default function CountrieDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { countries, loading, error } = useContext(CountriesContext);

  const country = useMemo(
    () => countries.find((item) => item.alpha3Code.toLowerCase() === id?.toLowerCase()),
    [countries, id],
  );

  const bordersCountry = useMemo(() => {
    if (!country) return [];
    return countries.filter((item) => country.borders.includes(item.alpha3Code));
  }, [countries, country]);

  return (
    <section className="container">
      <button className="button button--dark" onClick={() => navigate(-1)}>
        <i className="fa fa-angle-left mr" aria-hidden="true"></i>
        Back
      </button>
      {loading ? (
        <Loader />
      ) : error || !country ? (
        <NotFound />
      ) : (
        <CountrieInfo country={country} bordersCountry={bordersCountry} />
      )}
    </section>
  );
}
