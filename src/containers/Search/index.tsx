import React, { useState } from "react";

import { MapContainer, SearchOverview, SearchWrapper } from "./Search.styles";

import { Map } from "components/Map";

import { fakePin } from "modules/offers/constants/fakePin";
import { FiltersProvider } from "modules/offers/contexts/FiltersContext";
import { Technology } from "modules/offers/types/Technology";
import { Filters } from "modules/offers/types/Filters";

import { OfferContent } from "./OfferContent";
import { SearchPanel } from "./SearchPanel";

const Search = () => {
  // todo: refactor, prepare abstraction??, singular states
  const [filters, setFilters] = useState<Filters>({
    technology: Technology.All,
    offset: 0,
  });

  return (
    <FiltersProvider data={{ filters, setFilters }}>
      <SearchWrapper data-testid="search-wrapper">
        <SearchPanel />
        <SearchOverview>
          <OfferContent />
          <MapContainer>
            <Map pins={[fakePin]} />
          </MapContainer>
        </SearchOverview>
      </SearchWrapper>
    </FiltersProvider>
  );
};

export { Search };
