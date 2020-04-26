import { client } from "utils/ajax/client";

import { Offer } from "../types/Offer";

export const getOffers = () =>
  client<Offer[]>({
    url: "offers?technology=all",
  });

export const getOffer = (offerId: string) =>
  client<Offer>({
    url: `offers/offer/${offerId}`,
  });
