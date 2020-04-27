import { MutationOptions, useMutation as useMut } from "react-query";

export const useMutation = <TResults, TVariables = undefined>(
  mutationFn: (data: TVariables) => Promise<TResults>,
  mutationOptions?: MutationOptions<TResults, TVariables>
) => {
  return useMut(mutationFn, mutationOptions);
};
