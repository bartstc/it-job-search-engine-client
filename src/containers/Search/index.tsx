import React, { Suspense } from "react";

import {
  MapContainer,
  OfferContentWrapper,
  SearchOverview,
  SearchWrapper,
} from "../SearchCommon/SearchCommon.styles";

import { OffersFilters } from "modules/offers/types/OffersFilters";
import { DEFAULT_PARAMS } from "modules/offers/constants/defaultParams";
import { fakePin } from "modules/offers/constants/fakePin";
import { useOffers } from "modules/offers/hooks";

import { FetchingSpinner } from "components/Spinners/FetchingSpinner";
import { useCreateParams } from "components/Params";
import { OfferList } from "components/OfferList";
import { Map } from "components/Map";

import { SearchPanel } from "../SearchCommon/SearchPanel";

const Search = () => {
  const { params } = useCreateParams<OffersFilters>(DEFAULT_PARAMS);
  const { data } = useOffers(params);

  return (
    <SearchWrapper data-testid="search-wrapper">
      <SearchPanel />
      <SearchOverview>
        <OfferContentWrapper>
          <Suspense fallback={<FetchingSpinner />}>
            <OfferList offers={data} />
          </Suspense>
        </OfferContentWrapper>
        <MapContainer>
          <Map pins={[fakePin]} />
        </MapContainer>
      </SearchOverview>
    </SearchWrapper>
  );
};

export { Search };
