import { useCallback, useMemo } from "react";
import useRouter from "use-react-router";
import { stringify } from "query-string";
import { mapValues, pickBy } from "lodash";

import { isEmpty } from "utils";

import { useGetDefaultParams } from "./useGetDefaultParams";
import { useSharedParams } from "./useSharedParams";

export const useParamsBag = <T>(defaultParams: T) => {
  const { history } = useRouter();
  const { sharedParams } = useSharedParams<T>();

  const { getDefaultParamsFromUrl } = useGetDefaultParams<T>(defaultParams);
  const defaultParamsFromUrl = useMemo(() => getDefaultParamsFromUrl(), [
    getDefaultParamsFromUrl,
  ]);

  const params = sharedParams || defaultParamsFromUrl;

  const pushParams = useCallback(
    (qp: T) => {
      // todo: if stringify !== search then push
      const markEmptyValues = mapValues(qp as any, (value: any) =>
        isEmpty(value) ? null : value
      );
      const filteredQueryParams = pickBy(
        { ...params, ...markEmptyValues },
        (value: any) => !isEmpty(value)
      );

      const queryParams = stringify(filteredQueryParams, {
        arrayFormat: "comma",
      });
      history.push(`?${queryParams}`);
    },
    [history, params]
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
