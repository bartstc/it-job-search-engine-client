import { useCallback } from "react";
import useRouter from "use-react-router";
import { isEmpty } from "lodash";
import { parse } from "query-string";

import { mapParamsStringToNumber } from "utils";

export const useGetDefaultParams = <T>(defaultParams: T) => {
  const {
    location: { search },
  } = useRouter();

  const getDefaultParamsFromUrl = useCallback((): T => {
    if (isEmpty(search)) {
      return defaultParams;
    }
    return mapParamsStringToNumber(
      parse(search, { arrayFormat: "comma" })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
  }, [search, defaultParams]);

  return { getDefaultParamsFromUrl };
};
