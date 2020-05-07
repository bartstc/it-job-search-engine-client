import { useCallback, useEffect, useMemo, useState } from "react";

import { useDebounce } from "hooks";

import { useParamsBag } from "../Params";

export const useFilters = <Params>(
  defaultParams: Params,
  param: string,
  debounce: number = 500
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { pushParams, clearParams, params } = useParamsBag<any>(defaultParams);
  const [filterState, setFilterState] = useState({
    value: params[param],
    dispatch: false,
  });

  const filter = useMemo(() => filterState.value, [filterState]);
  const setFilter = useCallback(
    (value: unknown) => {
      setFilterState({ dispatch: true, value });
    },
    [setFilterState]
  );

  const clearFilter = () => {
    clearParams();
    setFilter(null);
  };

  useEffect(() => {
    setFilterState({ dispatch: false, value: params[param] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params[param]]);

  useDebounce(
    () => {
      if (filterState.dispatch) {
        pushParams({
          // offset: 0,
          [param]: filterState.value,
        });
      }
    },
    debounce,
    [filterState]
  );

  return [filter, setFilter, clearFilter];
};
