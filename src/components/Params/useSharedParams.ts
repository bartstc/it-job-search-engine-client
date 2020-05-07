import { useMemo } from "react";
import useRouter from "use-react-router";

import { useParamsConsumer } from "modules/global/ParamsContext";

export const useSharedParams = <T>() => {
  const { params } = useParamsConsumer();
  const {
    location: { pathname },
  } = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sharedParams = useMemo(() => params[pathname], [pathname]);

  return { sharedParams: sharedParams as T };
};
