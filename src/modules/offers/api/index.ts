import { client } from "utils/ajax/client";

import { Offer } from "../types/Offer";
import { OffersFilters } from "../types/OffersFilters";

export const getOffers = (_: string,{ technology }: OffersFilters) =>
  client<Offer[]>({
    url: `offers?technology=${technology}`,
  });

export const getOffer = (_: string, offerId: string) =>
  client<Offer>({
    url: `offers/offer/${offerId}`,
  });
