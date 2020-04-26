import React, { useEffect, useState } from "react";

import { SearchWrapper, SearchOverview, MapContainer } from "./Search.styles";

import { Map } from "components/Map";

import { OfferPreview } from "./OfferPreview";
import { SearchPanel } from "./SearchPanel";

import { fakePin } from "../../modules/offers/constants/fakePin";
import { Offer } from "../../modules/offers/types/Offer";
import { getOffers } from "../../modules/offers/api";
import { FetchingSpinner } from "../../components/Spinners/FetchingSpinner";

const Search = () => {
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

  return (
    <SearchWrapper data-testid="search-wrapper">
      <SearchPanel />
      <SearchOverview>
        <OfferPreview offers={offers} />
        <MapContainer>
          <Map pins={[fakePin]} />
        </MapContainer>
      </SearchOverview>
    </SearchWrapper>
  );
};

export { Search };
