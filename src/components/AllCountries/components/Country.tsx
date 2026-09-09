import { useNavigate } from 'react-router-dom';

import type { Country as CountryModel } from '../../../services/countries';
import LabelText from '../../Helpers/LabelText';

interface IProps {
  country: CountryModel;
}

export default function Country({ country }: IProps) {
  const navigate = useNavigate();

  const goToRouteDetail = (code: string): void => {
    if (!code) return;
    navigate(`/${code.toLowerCase()}`);
  };

  return (
    <article
      className="country country--card"
      onClick={() => goToRouteDetail(country.alpha3Code)}
    >
      <img className="country__img" alt={country.name} src={country.flag} />
      <section className="country__info">
        <h3 className="text text--white text--title country__title">
          {country.name}
        </h3>
        <LabelText label="Region" text={country.region} />
        <LabelText label="Capital" text={country.capital} />
      </section>
    </article>
  );
}
