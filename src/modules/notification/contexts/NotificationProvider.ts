import { createSharedData } from "components/Share";
import { Dispatch, SetStateAction } from "react";
import { NotificationState } from "../types/NotificationState";

interface NotificationContext {
  setNotificationState: Dispatch<SetStateAction<NotificationState>>;
  notificationState: NotificationState;
}

const { useShareConsumer, ShareProvider } = createSharedData<
  NotificationContext
>();

export {
  useShareConsumer as useNotificationConsumer,
  ShareProvider as NotificationProvider,
};
