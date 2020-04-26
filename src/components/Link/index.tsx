import React, { ReactNode } from "react";

import { StyledLink } from "./Link.styles";

type Props = {
  to: string;
  children: ReactNode | string;
  id?: string;
  options?: string[];
};

const Link = ({ children, options, id, ...rest }: Props) => (
  <StyledLink className={options?.join(" ")} id={id} data-testid={id} {...rest}>
    {children}
  </StyledLink>
);

export { Link };
