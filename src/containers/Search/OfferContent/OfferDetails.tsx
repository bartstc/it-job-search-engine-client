import React, { useEffect, useState } from "react";
import useRouter from "use-react-router";

import { Offer } from "modules/offers/types/Offer";
import { getOffer } from "modules/offers/api";

import { FetchingSpinner } from "components/Spinners/FetchingSpinner";

import { OfferDetailsWrapper } from "./OfferContent.styles";

const OfferDetails = () => {
  const {
    match: { params },
  } = useRouter<{ offerId: string }>();

  const [offer, setOffer] = useState<Offer | null>(null);

  useEffect(() => {
    const fetchOffer = async () => {
      const offer = await getOffer(params.offerId);
      setOffer(offer);
    };
    fetchOffer().catch((err) => {
      console.log(err);
    });
  }, [params.offerId]);

  if (!offer) {
    return <FetchingSpinner />;
  }

  console.log(offer);

  return (
    <OfferDetailsWrapper>
      <h1>Test</h1>
    </OfferDetailsWrapper>
  );
};

export { OfferDetails };
