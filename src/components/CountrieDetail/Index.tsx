import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Loader from '../layouts/Loader';
import CountrieInfo from './CountrieInfo';
import NotFound from '../layouts/NotFound';

export default function CountrieDetail() {
    let history = useHistory();
    const { id }: any = useParams();

    const [loading, setLoading] = useState(true)
    const [country, setCountry]: any = useState({});
    const [bordersCountry, setBordersCountry]: any = useState([]);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const { data } = await axios(`https://restcountries.eu/rest/v2/alpha/${id}`);
                setCountry(data);
                setBorders(data.borders);
            } catch (e) {
                if(e.response.status === 404) setCountry(404);
            }
            setLoading(false);
        }
        fetchCountry();
    }, [id])

    const setBorders = async (borders: any) => {
        if(borders.length === 0) return

        const bordersString = borders.join(';').toLocaleLowerCase();
        try {
            const { data } = await axios(`https://restcountries.eu/rest/v2/alpha?codes=${bordersString}`);
            setBordersCountry(data);
        } catch (e) {
            console.log(e.response);
        }
    }

    const renderCountry = () => {
        if (!country) return 'Something went wrong...'
        if(country === 404) return <NotFound></NotFound>
        return <CountrieInfo key = {country.alpha3Code} country={country} bordersCountry={bordersCountry}/>
    }

    return (
        <section className="container">
            <button className="button button--dark" onClick={() => history.goBack()}>
                <i className="fa fa-angle-left mr"></i>
                Back
            </button>
            {
                loading
                    ? <Loader />
                    : renderCountry()
            }
        </section>
    )
}