import React from "react";

import { useOffers } from "modules/offers/hooks";
import { useFiltersConsumer } from "modules/offers/contexts/FiltersContext";

import { OfferList } from "components/OfferList";

const Offers = () => {
  const { filters } = useFiltersConsumer();
  const { data } = useOffers(filters);

  return <OfferList offers={data} />;
};

export { Offers };
