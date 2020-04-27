import {
  AnyQueryKey,
  QueryFunction,
  QueryOptions,
  QuerySuccessResult,
  useQuery,
} from "react-query";

export const useSuspense = <TResult, TKey extends AnyQueryKey>(
  queryKey: TKey,
  queryFn: QueryFunction<TResult, TKey>,
  config?: QueryOptions<TResult>
  // variables?: AnyVariables
) => {
  return useQuery(queryKey, queryFn, {
    ...config,
    suspense: true,
  }) as QuerySuccessResult<TResult>;
};
