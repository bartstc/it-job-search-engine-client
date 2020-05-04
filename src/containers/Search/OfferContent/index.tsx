import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { OfferContentWrapper } from "./OfferContent.styles";

import { FetchingSpinner } from "components/Spinners/FetchingSpinner";
import { SmoothPage } from "components/SmoothPage";

import { Offers } from "./Offers";
import { OfferDetails } from "./OfferDetails";

const OfferContent = () => {
  return (
    <OfferContentWrapper>
      <Suspense fallback={<FetchingSpinner />}>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <SmoothPage>
                        <Offers />
                      </SmoothPage>
                    )}
                  />{" "}
                  <Route
                    exact
                    path="/:offerId"
                    render={() => (
                      <SmoothPage>
                        <OfferDetails />
                      </SmoothPage>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Suspense>
    </OfferContentWrapper>
  );
};

export { OfferContent };
