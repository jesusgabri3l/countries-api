import React from 'react';
import Search from './components/Search'
import Dropdown from './components/Dropdown';

export default function Filters({filterRegionHandler, searchHandler} : any) {
    return (
        <div className="filterContainer">
            <Search searchHandler={searchHandler}/>
            <Dropdown filterRegionHandler = {filterRegionHandler}/>
        </div>
    )
}