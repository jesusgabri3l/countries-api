import * as React from "react";
import { useHistory } from "react-router-dom";
import LabelText from "../../Helpers/LabelText";
interface IProps {
  country: any;
}

export default function Country({ country }: IProps) {
  const history = useHistory();

  const goToRouteDetail = (code: string): void | boolean => {
    if (!code) return false;

    const codeMin = code.toLocaleLowerCase();
    history.push(`/${codeMin}`);
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
        <LabelText label="Population" text={country.population} />
        <LabelText label="Region" text={country.region} />
        <LabelText label="Capital" text={country.capital} />
      </section>
    </article>
  );
}
