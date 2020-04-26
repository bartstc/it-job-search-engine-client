import { createGlobalStyle } from "styled-components";

import { commonStyles } from "./theme";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${commonStyles.fontFamily.primary};
    font-weight: ${commonStyles.fontWeight.light};
  }
`;
