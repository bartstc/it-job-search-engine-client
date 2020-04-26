import React, { ComponentType, ReactNode } from "react";
import ReactErrorBoundary from "react-error-boundary";
import {ErrorState} from "../States";

// import { ErrorPageStrategy } from "./ErrorPageStrategy";

export interface FallbackProps<ErrorType> {
  error: ErrorType;
  componentStack?: string;
}

export type ErrorFallback<ErrorType> = ComponentType<FallbackProps<ErrorType>>;

interface ErrorBoundaryProps<ErrorType> {
  onError?: (error: Error, componentStack: string) => void;
  fallback?: ErrorFallback<ErrorType>;
}

export interface IErrorBoundaryProps<ErrorType>
  extends ErrorBoundaryProps<ErrorType> {
  children: ReactNode | string;
}

function ErrorBoundary<ErrorType extends Error>({
  // todo: add ErrorPageStrategy
  fallback = <ErrorState /> as any,
  onError,
  children,
}: IErrorBoundaryProps<ErrorType>) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ReactErrorBoundary FallbackComponent={fallback as any} onError={onError}>
      {children}
    </ReactErrorBoundary>
  );
}

export { ErrorBoundary };
