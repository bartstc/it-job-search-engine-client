import React from "react";

import { OfferListWrapper } from "./OfferList.styles";

import { Offer } from "modules/offers/types/Offer";

import { EmptyState } from "../States/EmptyState";
import { OfferItem } from "./OfferItem";

export type OfferListProps = {
  offers: Offer[];
};

export const OfferList = ({ offers }: OfferListProps) => {
  if (offers.length === 0) {
    return <EmptyState />;
  }

  return (
    <OfferListWrapper>
      {offers.map((offer) => (
        <OfferItem key={offer.offerId} offer={offer} />
      ))}
    </OfferListWrapper>
  );
};
