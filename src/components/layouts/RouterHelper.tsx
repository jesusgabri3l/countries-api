import React from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import AllCountries from "../AllCountries/Index";
import CountrieDetail from "../CountrieDetail/Index";
import CountriesProvider from '../CountriesProvider';
export default function RouterHelper(){
    return(
        <CountriesProvider>
            <Router>
            <Switch>
                <Route path = "/" exact>
                    <AllCountries />
                </Route>
                <Route path = "/:id" exact>
                    <CountrieDetail/>
                </Route>
            </Switch>
        </Router>
        </CountriesProvider>
        
    )
}

