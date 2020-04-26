import React, { useEffect, useState } from "react";
import { Offer } from "../../../modules/offers/types/Offer";
import { getOffers } from "../../../modules/offers/api";
import { FetchingSpinner } from "../../../components/Spinners/FetchingSpinner";
import { OfferList } from "../../../components/OfferList";

const Offers = () => {
  const [offers, setOffers] = useState<Offer[] | null>(null);

  useEffect(() => {
    const fetchOffers = async () => {
      const offers = await getOffers();
      setOffers(offers);
    };
    fetchOffers().catch((err) => {
      console.log(err);
    });
  }, []);

  if (!offers) {
    return <FetchingSpinner />;
  }

  return <OfferList offers={offers} />;
};

export { Offers };
