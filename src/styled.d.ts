import "styled-components";

declare module "styled-components" {
  import { Theme } from "./styles/theme";

  export interface DefaultTheme extends Theme {}
}
