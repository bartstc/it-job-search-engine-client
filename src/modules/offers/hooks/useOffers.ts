import { useSuspense } from "components/Suspense";

import { getOffers } from "../api";
import {Filters} from "../types/Filters";

export const useOffers = (filters: Filters) => {
  return useSuspense(["offers", filters], getOffers);
};
