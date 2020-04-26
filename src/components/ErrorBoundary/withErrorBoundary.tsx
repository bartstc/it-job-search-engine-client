import React, { Component, ComponentType } from "react";
import { ErrorBoundary, IErrorBoundaryProps } from "./ErrorBoundary";

export function withErrorBoundary<ErrorType extends Error>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Wrapper: ComponentType<any>,
  props?: Omit<IErrorBoundaryProps<ErrorType>, "children">
) {
  return class extends Component {
    render() {
      return (
        <ErrorBoundary fallback={props?.fallback} onError={props?.onError}>
          <Wrapper {...this.props} />
        </ErrorBoundary>
      );
    }
  };
}
