import {
  IdleMutationResult,
  LoadingMutationResult,
  MutateFunction,
  MutateOptions,
  MutationFunction,
  MutationOptions,
  MutationResultBase,
  SuccessMutationResult,
} from "react-query";
import { AxiosError } from "axios";

import { ErrorResponse } from "shared/types/ErrorResponse";

declare module "react-query" {
  interface OverrideErrorMutationResult<TResult>
    extends MutationResultBase<TResult> {
    status: "error";
    data: undefined;
    error: AxiosError<ErrorResponse>;
  }

  type OverrideMutationResult<TResult> =
    | IdleMutationResult<TResult>
    | LoadingMutationResult<TResult>
    | OverrideErrorMutationResult<TResult>
    | SuccessMutationResult<TResult>;

  interface OverrideMutateOptions<TResult, TVariables> {
    onSuccess?: (data: TResult, variables: TVariables) => Promise<void> | void;
    onError?: (
      error: AxiosError<ErrorResponse>,
      variables: TVariables,
      snapshotValue: unknown
    ) => Promise<void> | void;
    onSettled?: (
      data: undefined | TResult,
      error: unknown | null,
      variables: TVariables,
      snapshotValue?: unknown
    ) => Promise<void> | void;
    throwOnError?: boolean;
  }

  interface OverrideMutationOptions<TResult, TVariables>
    extends OverrideMutateOptions<TResult, TVariables> {
    onMutate?: (variables: TVariables) => Promise<unknown> | unknown;
    useErrorBoundary?: boolean;
  }

  export function useMutation<TResults, TVariables = undefined>(
    mutationFn: MutationFunction<TResults, TVariables>,
    mutationOptions?: OverrideMutationOptions<TResults, TVariables>
  ): [MutateFunction<TResults, TVariables>, OverrideMutationResult<TResults>];
}
