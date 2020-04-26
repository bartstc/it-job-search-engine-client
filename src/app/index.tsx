import React, { lazy, Suspense, useState } from "react";

import { ErrorBoundary } from "components/ErrorBoundary";
import { GlobalSpinner } from "components/Spinners";

import { NotificationState } from "modules/notification/types/NotificationState";
import { NotificationProvider } from "modules/notification/contexts/NotificationProvider";
import { useAuthState } from "modules/users/contexts/authContext";

const UnauthApp = lazy(() => import("./UnauthApp"));
const AuthApp = lazy(() => import("./AuthApp"));

const App = () => {
  const [notificationState, setNotificationState] = useState<NotificationState>(
    {
      active: false,
    }
  );
  const { isAuth } = useAuthState();

  return (
    <ErrorBoundary>
      <Suspense fallback={<GlobalSpinner />}>
        <NotificationProvider
          data={{ notificationState, setNotificationState }}
        >
          {isAuth === null && <GlobalSpinner />}
          {isAuth === false && <UnauthApp />}
          {isAuth && <AuthApp />}
        </NotificationProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export { App };
