import { useCallback, useMemo } from "react";
import useRouter from "use-react-router";
import { stringify } from "query-string";
import { mapValues, pickBy } from "lodash";

import { isEmpty } from "utils";

import { useGetDefaultParams } from "./useGetDefaultParams";

export const useParamsBag = <T>(defaultParams: T) => {
  const { history } = useRouter();

  const { getDefaultParamsFromUrl } = useGetDefaultParams<T>(defaultParams);
  const defaultParamsFromUrl = useMemo(() => getDefaultParamsFromUrl(), [
    getDefaultParamsFromUrl,
  ]);

  const pushParams = useCallback(
    (qp: T) => {
      // todo: if stringify !== search then push
      const markEmptyValues = mapValues(qp as any, (value: any) =>
        isEmpty(value) ? null : value
      );
      const filteredQueryParams = pickBy(
        { ...defaultParamsFromUrl, ...markEmptyValues },
        (value: any) => !isEmpty(value)
      );

      const queryParams = stringify(filteredQueryParams, {
        arrayFormat: "comma",
      });
      history.push(`?${queryParams}`);
    },
    [history, defaultParamsFromUrl]
  );

  const setClearState = useCallback(
    (params: T) => {
      history.push(
        `?${stringify(params, {
          arrayFormat: "comma",
        })}`,
        { clear: true }
      );
    },
    [history]
  );

  const clearParams = useCallback(() => {
    setClearState(defaultParams);
  }, [defaultParams, setClearState]);

  const setParams = useCallback(
    (params: T) => {
      setClearState(params);
    },
    [setClearState]
  );

  return { pushParams, clearParams, setParams, params: defaultParamsFromUrl };
};
