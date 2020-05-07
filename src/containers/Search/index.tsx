import React from "react";

import { MapContainer, SearchOverview, SearchWrapper } from "./Search.styles";

import { Map } from "components/Map";
import { useCreateParams } from "components/Params";

import { fakePin } from "modules/offers/constants/fakePin";
import { OffersFilters } from "modules/offers/types/OffersFilters";
import { DEFAULT_PARAMS } from "modules/offers/constants/defaultParams";

import { OfferContent } from "./OfferContent";
import { SearchPanel } from "./SearchPanel";

const Search = () => {
  useCreateParams<OffersFilters>(DEFAULT_PARAMS);

  return (
    <SearchWrapper data-testid="search-wrapper">
      <SearchPanel />
      <SearchOverview>
        <OfferContent />
        <MapContainer>
          <Map pins={[fakePin]} />
        </MapContainer>
      </SearchOverview>
    </SearchWrapper>
  );
};

export { Search };
