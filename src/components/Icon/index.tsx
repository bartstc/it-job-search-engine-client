import React from "react";

import { StyledIcon } from "./Icon.styles";

type IProps = {
  className: string;
  size: string;
  color?: string;
  id?: string;
};

const Icon = ({ className, id, ...rest }: IProps) => {
  return (
    <StyledIcon className={className} id={id} data-testid={id} {...rest} />
  );
};

export { Icon };
