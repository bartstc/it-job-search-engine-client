import React, { ReactNode } from "react";
import { kebabCase } from "lodash";

import { StyledForm } from "./SlimForm.styles";

import { H3 } from "styles";

import { SpinnerButton } from "../../Buttons";

type Props = {
  formTitle: string;
  submitTitle: string;
  isSubmitting: boolean;
  isValid: boolean;
  fields: ReactNode;
  children?: ReactNode;
};

const SlimForm = ({
  formTitle,
  submitTitle,
  isSubmitting,
  fields,
  isValid,
  children
}: Props) => {
  return (
    <StyledForm data-testid={`${kebabCase(formTitle)}-form`}>
      <H3 weight="regular">{formTitle}</H3>
      {fields}
      <SpinnerButton
        disabled={!isValid || isSubmitting}
        isSubmitting={isSubmitting}
        type="submit"
        id={`${kebabCase(formTitle)}-submit-btn`}
      >
        {submitTitle}
      </SpinnerButton>
      {children}
    </StyledForm>
  );
};

export { SlimForm };
