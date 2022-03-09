import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Countrie from './components/Country'
import Loader from '../layouts/Loader'
import {CountriesContext} from '../CountriesProvider';

export default function ListOfCountries({ keyword, region }: any) {
    const [countries, setCountries] = useContext(CountriesContext)
    const [countriesHelper, setCountriesHelper] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchCountries = async () => {
            const { data } = await axios('https://restcountries.com/v2/all')
            setCountries(data)
            setCountriesHelper(data)
            setLoading(false)
        }

        fetchCountries()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        renderCountries()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(keyword) searchCountries()
        else setCountries(countriesHelper)
    }, [keyword])

    useEffect( () => {
        if(region) searchCountriesByRegion();
    }, [region])

    const renderCountries = () => {
        return countries.map((country :any, index: number) =>
            <Countrie key={index}
                country={country} />
        )
    }
    const searchCountries = () => {
        if(keyword != ''){
            const countriesFiltered = countriesHelper.filter((country: any) => country.name.includes(keyword))
            setCountries(countriesFiltered)
        }else{
            setCountries(countriesHelper)
        }
    }

    const searchCountriesByRegion = () => {
        if(region == 'all') return setCountries(countriesHelper)
        const countriesFiltered = countriesHelper.filter((country: any) => country.region === region)
        setCountries(countriesFiltered)
    }

    return (
        <div>
            {
                loading
                    ? <Loader />
                    : <section className="allcountries">
                        {renderCountries()}
                    </section>
            }
        </div>
    )




}