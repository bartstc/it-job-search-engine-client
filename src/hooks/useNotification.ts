import { useCallback } from "react";

import { useNotificationConsumer } from "modules/notification/contexts/NotificationProvider";
import { NotificationState } from "modules/notification/types/NotificationState";

export const useNotification = () => {
  const { setNotificationState } = useNotificationConsumer();

  const showNotification = useCallback(
    (notificationState?: Omit<NotificationState, "active">) => {
      setNotificationState({
        active: true,
        ...notificationState,
      });
    },
    [setNotificationState]
  );

  return { showNotification };
};
