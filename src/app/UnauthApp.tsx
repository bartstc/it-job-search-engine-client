import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "components/Layout";
import { FetchingSpinner } from "components/Spinners/FetchingSpinner";

import { NotFound } from "containers/NotFound";
import { Search } from "containers/Search";
import { SignInForm, SignUpForm } from "containers/Auth";
import { Offer } from "containers/Offer";

const UnauthApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<FetchingSpinner />}>
          <Switch>
            <Route exact path="/signin" component={SignInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/:offerId" component={Offer} />
            <Route exact path="" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default UnauthApp;
