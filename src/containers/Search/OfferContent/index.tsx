import React from "react";
import { Route } from "react-router-dom";

import { OfferContentWrapper } from "./OfferContent.styles";

import { Offers } from "./Offers";
import { OfferDetails } from "./OfferDetails";

const OfferContent = () => {
  return (
    <OfferContentWrapper>
      <Route exact path="/" component={Offers} />
      <Route exact path="/:offerId" component={OfferDetails} />
    </OfferContentWrapper>
  );
};

export { OfferContent };
