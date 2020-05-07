import React, { Suspense } from "react";

import {
  MapContainer,
  SearchOverview,
  SearchWrapper,
  OfferContentWrapper,
} from "../SearchCommon/SearchCommon.styles";

import { fakePin } from "modules/offers/constants/fakePin";

import { FetchingSpinner } from "components/Spinners/FetchingSpinner";
import { Map } from "components/Map";

import { SearchPanel } from "../SearchCommon/SearchPanel";
import { OfferContent } from "./components";

const Offer = () => {
  return (
    <SearchWrapper data-testid="search-wrapper">
      <SearchPanel />
      <SearchOverview>
        <OfferContentWrapper>
          <Suspense fallback={<FetchingSpinner />}>
            <OfferContent />
          </Suspense>
        </OfferContentWrapper>
        <MapContainer>
          <Map pins={[fakePin]} />
        </MapContainer>
      </SearchOverview>
    </SearchWrapper>
  );
};

export { Offer };
