import { useSuspense } from "components/Suspense";

import { getOffers } from "../api";
import {OffersFilters} from "../types/OffersFilters";

export const useOffers = (filters: OffersFilters) => {
  return useSuspense(["offers", filters], getOffers);
};
