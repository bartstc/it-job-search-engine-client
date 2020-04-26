import React from "react";

import { OfferPreviewWrapper } from "./OfferPreview.styles";

import { Offer } from "modules/offers/types/Offer";

import { OfferList } from "components/OfferList";

type Props = {
  offers: Offer[];
};
const OfferPreview = ({ offers }: Props) => {
  return (
    <OfferPreviewWrapper>
      <OfferList offers={offers} />
    </OfferPreviewWrapper>
  );
};

export { OfferPreview };
