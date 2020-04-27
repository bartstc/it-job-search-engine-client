import { AnyQueryKey, queryCache } from "react-query";

export const useOptimisticUI = <T = unknown>(
  key: AnyQueryKey | string,
  dataOrUpdater: T | ((oldData: T | undefined) => T)
) => {
  queryCache.setQueryData(key, dataOrUpdater);
};
