import { useEffect, useState } from "react";

import { isEmpty } from "utils";

export const useFiltersAreApplied = <T extends unknown>(filters: T) => {
  const [filtersAreApplied, setIfFiltersAreApplied] = useState(false);

  useEffect(() => {
    setIfFiltersAreApplied(!isEmpty(filters));
  }, [filters]);

  return { filtersAreApplied };
};
