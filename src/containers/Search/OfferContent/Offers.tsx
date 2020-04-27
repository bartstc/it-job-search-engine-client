import React from "react";

import { useOffers } from "modules/offers/hooks";

import { OfferList } from "components/OfferList";

const Offers = () => {
  const { data } = useOffers();

  return <OfferList offers={data} />;
};

export { Offers };
