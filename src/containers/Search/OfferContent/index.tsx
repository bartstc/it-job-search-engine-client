import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { OfferContentWrapper } from "./OfferContent.styles";

import { FetchingSpinner } from "components/Spinners/FetchingSpinner";

import { Offers } from "./Offers";
import { OfferDetails } from "./OfferDetails";

const OfferContent = () => {
  return (
    <OfferContentWrapper>
      <Suspense fallback={<FetchingSpinner />}>
        <Route exact path="/" component={Offers} />
        <Route exact path="/:offerId" component={OfferDetails} />
      </Suspense>
    </OfferContentWrapper>
  );
};

export { OfferContent };
