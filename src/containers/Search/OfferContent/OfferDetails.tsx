import React from "react";
import useRouter from "use-react-router";

import { useOffer } from "modules/offers/hooks";

import { OfferDetailsWrapper } from "./OfferContent.styles";

const OfferDetails = () => {
  const {
    match: { params },
  } = useRouter<{ offerId: string }>();

  const { data } = useOffer(params.offerId);

  console.log(data);

  return (
    <OfferDetailsWrapper>
      <h1>Test</h1>
    </OfferDetailsWrapper>
  );
};

export { OfferDetails };
