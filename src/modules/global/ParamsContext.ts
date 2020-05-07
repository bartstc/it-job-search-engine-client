import { createSharedData } from "components/Share";
import { Dispatch, SetStateAction } from "react";

interface ParamsContext {
  // todo: any
  params: { [key: string]: any };
  setParams: Dispatch<SetStateAction<{ [key: string]: any }>>;
}
const { useShareConsumer, ShareProvider } = createSharedData<ParamsContext>();

export {
  useShareConsumer as useParamsConsumer,
  ShareProvider as ParamsProvider,
};
