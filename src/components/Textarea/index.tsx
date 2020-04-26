import React, { ChangeEvent, FocusEvent } from "react";

import {
  Wrapper,
  TextareaElement,
  Label,
  Error,
  ValidationIcon
} from "./Textarea.styles";

type Props = {
  name: string;
  id: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLTextAreaElement>) => void;
  errorMsg: string | undefined;
  touched: boolean | undefined;
  placeholder?: string;
};

const Textarea = ({
  name,
  id,
  value,
  label,
  onChange,
  onBlur,
  errorMsg,
  placeholder = "",
  touched
}: Props) => (
  <Wrapper>
    <TextareaElement
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
      touched={!!touched}
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
    <Error showError={!!touched && !!errorMsg}>{errorMsg}</Error>
  </Wrapper>
);

export { Textarea };
