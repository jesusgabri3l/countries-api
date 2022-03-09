import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AllCountries from "../AllCountries/Index";
import CountrieDetail from "../CountrieDetail/Index";
import CountriesProvider from "../CountriesProvider";
import NotFound from "./NotFound";
export default function RouterHelper() {
  return (
    <CountriesProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <AllCountries />
          </Route>
          <Route path="/:id" exact>
            <CountrieDetail />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </CountriesProvider>
  );
}
