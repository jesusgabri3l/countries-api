import React from 'react';
import LabelText from '../Helpers/LabelText';
import BorderItem from './BorderItem';


export default function CountrieInfo(props: any) {
    const { country, bordersCountry } = props;

    const setLanguages = () => {
        const arrayLanguages = country.languages.map((lang: any) => lang.name);
        return arrayLanguages.join(', ');
    }
    const renderBorders = () => {
        return bordersCountry.map((border: any) => <BorderItem name={border.name} />)
    }

    return (
        <article className="country country--flex">
            <img className="country__img country__img--detail" alt={country.name} src={country.flag} />
            <section className="country__info">
                <h3 className="text text--white text--title country__title">{country.name}</h3>
                <div className="flex-country-detail">
                    <div>
                        <LabelText label="Native name" text={country.nativeName} />
                        <LabelText label="Population" text={country.population} />
                        <LabelText label="Regio" text={country.region} />
                        <LabelText label="Subregion" text={country.subregion} />
                        <LabelText label="Capital" text={country.capital} />
                    </div>
                    <div>
                        <LabelText label="Top level domain" text={country.topLevelDomain[0]} />
                        <LabelText label="Currencies" text={country.currencies[0].name} />
                        <LabelText label="Languages" text={setLanguages()} />
                    </div>
                </div>
                <br />
                <div className="country-borders">
                    <label className="text text--white">Border countries :</label>
                    {
                        bordersCountry.length === 0
                            ? <p className="text text--gray">Looks likes this country does not have borders</p>
                            : <div className="borders">
                                {renderBorders()}
                            </div>
                    }
                </div>
            </section>
        </article>
    )
}