import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "components/Layout";

import { NotFound } from "containers/NotFound";
import { Search } from "containers/Search";
import { SignInForm, SignUpForm } from "containers/Auth";

const UnauthApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="" component={Search} />
          <Route exact path="/signin" component={SignInForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default UnauthApp;
