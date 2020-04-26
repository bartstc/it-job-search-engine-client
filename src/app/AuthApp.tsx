import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Layout } from "components/Layout";

import { NotFound } from "containers/NotFound";
import { Search } from "containers/Search";

const AuthApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default AuthApp;
