import { useSuspense } from "components/Suspense";

import { getOffer } from "../api";

export const useOffer = (offerId: string) => {
  return useSuspense(["offer", offerId], getOffer);
};
