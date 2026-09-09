import type { Country } from '../../services/countries';
import LabelText from '../Helpers/LabelText';
import BorderItem from './BorderItem';

interface Props {
  country: Country;
  bordersCountry: Country[];
}

export default function CountrieInfo({ country, bordersCountry }: Props) {
  return (
    <article className="country country--flex">
      <img className="country__img country__img--detail" alt={country.name} src={country.flag} />
      <section className="country__info">
        <h3 className="text text--white text--title country__title">{country.name}</h3>
        <div className="flex-country-detail">
          <div>
            <LabelText label="Native name" text={country.nativeName} />
            <LabelText label="Regio" text={country.region} />
            <LabelText label="Subregion" text={country.subregion} />
            <LabelText label="Capital" text={country.capital} />
          </div>
          <div>
            <LabelText label="Top level domain" text={country.topLevelDomain[0]} />
            <LabelText label="Currencies" text={country.currencies.map((c) => c.name).join(', ')} />
            <LabelText label="Languages" text={country.languages.map((l) => l.name).join(', ')} />
          </div>
        </div>
        <br />
        <div className="country-borders">
          <label className="text text--white">Border countries :</label>
          {!bordersCountry || bordersCountry.length === 0 ? (
            <p className="text text--gray">Looks likes this country does not have borders</p>
          ) : (
            <div className="borders">
              {bordersCountry.map((border) => (
                <BorderItem key={border.alpha3Code} name={border.name} />
              ))}
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
