import React, { ChangeEvent, FocusEvent } from "react";

import {
  Wrapper,
  StyledInput,
  Label,
  Error,
  ValidationIcon
} from "./Input.styles";
import { useTranslation } from "react-i18next";

type Props = {
  name: string;
  id: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  errorMsg: string;
  touched: boolean;
  type?: string;
  placeholder?: string;
};

const Input = ({
  name,
  id,
  value,
  label,
  onChange,
  onBlur,
  errorMsg,
  placeholder = "",
  type = "text",
  touched
}: Props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <ValidationIcon
        data-testid="ValidationIcon"
        isInvalid={!!errorMsg}
        touched={touched}
      >
        {!!errorMsg ? (
          <i className="fas fa-exclamation-circle" />
        ) : (
          <i className="fas fa-check-circle" />
        )}
      </ValidationIcon>
      <Label shrink={!value} htmlFor={id}>
        {label}
      </Label>
      <Error showError={touched && !!errorMsg}>{t(errorMsg)}</Error>
    </Wrapper>
  );
};

export { Input };
