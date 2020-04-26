import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { ThemeProvider as StyledTheme } from "styled-components";
import { I18nextProvider } from "react-i18next";

import { lightTheme } from "../../src/styles/theme";
import { ThemeProvider } from "../../src/styles";
import i18n from "../mocks/i18n";

const history = createMemoryHistory();

export const renderWithProviders = (component: JSX.Element) => {
  return {
    ...render(
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <StyledTheme theme={lightTheme}>
            <Router history={history}>{component}</Router>
          </StyledTheme>
        </I18nextProvider>
      </ThemeProvider>
    ),
  };
};
