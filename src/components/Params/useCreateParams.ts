import { useCallback, useEffect, useMemo, useState } from "react";
import useRouter from "use-react-router";
import { parse, stringify } from "query-string";
import { isEmpty, isEqual } from "lodash";

import { mapParamsStringToNumber } from "utils";

import { useGetDefaultParams } from "./useGetDefaultParams";

export const useCreateParams = <T = unknown>(defaultParams: T) => {
  const { getDefaultParamsFromUrl } = useGetDefaultParams<T>(defaultParams);
  const defaultParamsFromUrl = useMemo(() => getDefaultParamsFromUrl(), [
    getDefaultParamsFromUrl,
  ]);
  const [params, setParams] = useState<T>(defaultParamsFromUrl);
  const {
    location: { search, pathname },
    history,
  } = useRouter();

  const replaceWithParams = useCallback(
    (params: T) => {
      history.replace(
        `?${stringify(params, {
          arrayFormat: "comma",
        })}`
      );
    },
    [history]
  );

  // doklej default params jeśli search jest puste
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const parsedSearch: any = mapParamsStringToNumber(
      parse(search, { arrayFormat: "comma" })
    );

    if (isEmpty(parsedSearch)) {
      replaceWithParams(defaultParamsFromUrl);
    }

    if (!isEqual(parsedSearch, params) && !isEmpty(parsedSearch)) {
      setParams(parsedSearch);
    }
  }, [search, pathname, params, replaceWithParams, defaultParamsFromUrl]);

  return { params };
};
