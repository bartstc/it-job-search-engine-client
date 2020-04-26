import React, { ReactNode } from "react";
import { SwitchLabel, StyledInput, SwitchWrapper } from "./SwitchInput.styles";

type Props = {
  checked: boolean;
  onChange: () => void;
  options: string[];
  id: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const SwitchInput = ({
  checked,
  onChange,
  options,
  id,
  leftIcon,
  rightIcon
}: Props) => (
  <SwitchWrapper switched={checked}>
    {leftIcon}
    <StyledInput
      checked={checked}
      className={options && options.join(" ")}
      onChange={onChange}
      type="checkbox"
      id={id}
    />
    <SwitchLabel htmlFor={id} />
    {rightIcon}
  </SwitchWrapper>
);

export { SwitchInput };
