import React, { ReactNode } from "react";

import { StyledButton } from "./Button.styles";

type Props = {
  children: ReactNode | string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  options?: string[];
  id?: string;
};

const Button = ({ children, type = "button", options, id, ...rest }: Props) => (
  <StyledButton
    className={options?.join(" ")}
    type={type}
    id={id}
    data-testid={id}
    {...rest}
  >
    {children}
  </StyledButton>
);

export { Button };
