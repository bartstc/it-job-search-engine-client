import React, { lazy, Suspense, useState } from "react";

import { ErrorBoundary } from "components/ErrorBoundary";
import { GlobalSpinner } from "components/Spinners";

import { NotificationState } from "modules/notification/types/NotificationState";
import { NotificationProvider } from "modules/notification/contexts/NotificationProvider";
import { useAuthState } from "modules/users/contexts/authContext";
import { ParamsProvider } from "../modules/global/ParamsContext";

const UnauthApp = lazy(() => import("./UnauthApp"));
const AuthApp = lazy(() => import("./AuthApp"));

const App = () => {
  const [notificationState, setNotificationState] = useState<NotificationState>(
    {
      active: false,
    }
  );
  const [params, setParams] = useState<{ [key: string]: any }>({});

  const { isAuth } = useAuthState();

  return (
    <ErrorBoundary>
      <ParamsProvider data={{ params, setParams }}>
        <NotificationProvider
          data={{ notificationState, setNotificationState }}
        >
          <Suspense fallback={<GlobalSpinner />}>
            {isAuth === null && <GlobalSpinner />}
            {isAuth === false && <UnauthApp />}
            {isAuth && <AuthApp />}
          </Suspense>
        </NotificationProvider>
      </ParamsProvider>
    </ErrorBoundary>
  );
};

export { App };
