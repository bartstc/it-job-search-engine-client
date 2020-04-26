import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider as StyledTheme } from "styled-components";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";

import "./index.css";
import { ThemeProvider, useThemeConsumer } from "styles";
import { GlobalStyles } from "./styles/globalStyles";

import { App } from "./app";
import { AuthProvider } from "./modules/users/contexts/authContext";

const Index = () => {
  const { theme } = useThemeConsumer();

  return (
    <StyledTheme theme={theme}>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          <GlobalStyles />
          <App />
        </I18nextProvider>
      </AuthProvider>
    </StyledTheme>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
