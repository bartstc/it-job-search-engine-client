import { useSuspense } from "components/Suspense";

import { getOffers } from "../api";

export const useOffers = () => {
  return useSuspense(["offers"], getOffers);
};
