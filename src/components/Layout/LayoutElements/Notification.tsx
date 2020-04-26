import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { NotificationType } from "modules/notification/types/NotificationType";
import { useNotificationConsumer } from "modules/notification/contexts/NotificationProvider";

import { NotificationMessage, StyledNotification } from "./Notification.styles";

const Notification = () => {
  const { notificationState, setNotificationState } = useNotificationConsumer();
  const { active, type, message, timeout } = notificationState;
  const { t } = useTranslation();

  const time = timeout ?? 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationState({ active: false });
    }, time * 1000);

    return () => clearTimeout(timer);
  }, [time, setNotificationState, active]);

  return (
    <StyledNotification
      data-testid="notification"
      show={active}
      type={type || NotificationType.Info}
      onClick={() => setNotificationState({ active: false })}
    >
      <NotificationMessage>
        {t(`Exceptions.${message ?? "serverError"}`)}
      </NotificationMessage>
    </StyledNotification>
  );
};

export { Notification };
