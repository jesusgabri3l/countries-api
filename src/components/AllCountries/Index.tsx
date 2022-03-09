import React, { useState } from 'react';

import Filters from './Filters'
import ListOfCountries from './ListOfCountries'

export default function AllCountries() {

    const [keyword, setKeyword] = useState('')
    const [region, setRegion] = useState('')

    const searchInputHandler = (value: string) => {
        setKeyword(value)
        setRegion('')
    }
    const filterRegionHandler = (value : string) => {
        setRegion(value)
        setKeyword('')
    }
    return (
        <main>
            <section className="container">
                <Filters searchHandler = {searchInputHandler} filterRegionHandler = {filterRegionHandler} region={region}/>
                <ListOfCountries keyword = {keyword} region = {region}/>
            </section>
        </main>
    )
}