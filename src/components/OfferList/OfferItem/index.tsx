import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import {
  OfferItemWrapper,
  Top,
  OfferItemTitle,
  OfferItemPrice,
  Middle,
  OfferItemMeta,
  OfferItemDate,
  OfferItemTags,
  OfferItemTag
} from "./OfferItem.styles";

import { Offer } from "modules/offers/types/Offer";

type Props = {
  offer: Offer;
};

const OfferItem = ({
  offer: {
    offerId,
    title,
    priceMin,
    priceMax,
    technology,
    companyName,
    cityName,
    streetName,
    createdAt,
    mustHave
  }
}: Props) => {
  return (
    <Link to={`/${offerId}`}>
      <OfferItemWrapper technology={technology}>
        <Top>
          <OfferItemTitle>{title}</OfferItemTitle>
          <OfferItemPrice>
            {priceMin} - {priceMax} PLN
          </OfferItemPrice>
        </Top>
        <Middle>
          <OfferItemMeta>
            {companyName}, {cityName}, {streetName}
          </OfferItemMeta>
          <OfferItemDate>{moment(createdAt).format('LLL')}</OfferItemDate>
        </Middle>
        <OfferItemTags>
          {mustHave.map(tagName => (
            <OfferItemTag key={tagName}>{tagName}</OfferItemTag>
          ))}
        </OfferItemTags>
      </OfferItemWrapper>
    </Link>
  );
};

export { OfferItem };
