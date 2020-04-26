import React from "react";

import { SearchWrapper, SearchOverview, MapContainer } from "./Search.styles";

import { Map } from "components/Map";

import { fakePin } from "modules/offers/constants/fakePin";

import { OfferContent } from "./OfferContent";
import { SearchPanel } from "./SearchPanel";

const Search = () => {
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
