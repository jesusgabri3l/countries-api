import React, { createContext, useState } from 'react'

function CountriesProvider({ children } : any) {
    const [countries, setCountries] = useState([])
    return (
        <CountriesContext.Provider value={[countries, setCountries]}>
            {children}
        </CountriesContext.Provider>
    )

}

export default CountriesProvider
export const CountriesContext : any = createContext([]);
