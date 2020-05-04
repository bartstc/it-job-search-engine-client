import { Dispatch, SetStateAction } from "react";

import { createSharedData } from "components/Share";

import { Filters } from "../types/Filters";

export interface FiltersContext {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

const { useShareConsumer, ShareProvider } = createSharedData<FiltersContext>();

export {
  ShareProvider as FiltersProvider,
  useShareConsumer as useFiltersConsumer,
};
