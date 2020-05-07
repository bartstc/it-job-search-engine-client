import React from "react";

import { useOffers } from "modules/offers/hooks";
import { DEFAULT_PARAMS } from "modules/offers/constants/defaultParams";

import { OfferList } from "components/OfferList";
import { useParamsBag } from "components/Params";

const Offers = () => {
  const { params } = useParamsBag(DEFAULT_PARAMS);
  const { data } = useOffers(params);

  return <OfferList offers={data} />;
};

export { Offers };
