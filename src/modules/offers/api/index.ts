import { client } from "utils/ajax/client";

import { Offer } from "../types/Offer";
import { Filters } from "../types/Filters";

export const getOffers = (_: string,{ technology, offset }: Filters) =>
  client<Offer[]>({
    url: `offers?technology=${technology}&offset=${offset}`,
  });

export const getOffer = (_: string, offerId: string) =>
  client<Offer>({
    url: `offers/offer/${offerId}`,
  });
