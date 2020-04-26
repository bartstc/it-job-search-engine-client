import React, { ReactNode } from "react";
import { Button } from "..";

type Props = {
  children: ReactNode | string;
  isSubmitting: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  options?: string[];
  id?: string;
};

const SpinnerButton = ({
  children,
  type = "button",
  disabled,
  isSubmitting,
  id,
  ...rest
}: Props) => {
  return (
    <Button type={type} disabled={isSubmitting || disabled} id={id} {...rest}>
      {isSubmitting ? (
        <i
          data-testid={`${id}-spinner`}
          className="fas fa-circle-notch fa-spin"
        />
      ) : (
        children
      )}
    </Button>
  );
};

export { SpinnerButton };
