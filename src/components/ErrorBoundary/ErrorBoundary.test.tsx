import React from "react";
import { AjaxError } from "rxjs/ajax";

import { Logger } from "utils/logger";

import { renderWithProviders } from "../../../test/utils/renderWithProviders";
import { muteConsoleBeforeEach } from "../../../test/utils/muteConsoleBeforeEach";

import { ErrorBoundary } from "./index";

jest.mock("utils/authentication", () => ({
  logout: jest.fn()
}));

const destroy = Logger.init(() => {});

muteConsoleBeforeEach();

afterAll(jest.restoreAllMocks);

class TestAjaxError extends AjaxError {
  constructor(public status: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    super("test ajax error", {} as any, {});
  }
}

const ThrowableComponent = (props: { status: number }) => {
  throw new TestAjaxError(props.status);
};

it("should display internal error page when component throw custom error", () => {
  const ThrowableComponent = () => {
    throw new Error("Custom error message");
  };

  const { getByTestId } = renderWithProviders(
    <ErrorBoundary>
      <ThrowableComponent />
    </ErrorBoundary>,
    { initialRootState: {} }
  );

  expect(getByTestId("internal-error-page")).toBeDefined();
});

it("should display internal server error page when http response return status 500", () => {
  const { getByTestId } = renderWithProviders(
    <ErrorBoundary>
      <ThrowableComponent status={500} />
    </ErrorBoundary>,
    { initialRootState: {} }
  );

  expect(getByTestId("internal-server-error-page")).toBeDefined();
});

it("should display not found page when http response return status 403", () => {
  const { getByTestId } = renderWithProviders(
    <ErrorBoundary>
      <ThrowableComponent status={403} />
    </ErrorBoundary>,
    { initialRootState: {} }
  );

  expect(getByTestId("not-found-page")).toBeDefined();
});

it("should display empty state when http response return status 404", () => {
  const { getByTestId } = renderWithProviders(
    <ErrorBoundary>
      <ThrowableComponent status={404} />
    </ErrorBoundary>,
    { initialRootState: {} }
  );

  expect(getByTestId("empty-state-page")).toBeDefined();
});

it("should logout when http response return status 401", () => {
  const { logout } = require("utils/authentication");

  renderWithProviders(
    <ErrorBoundary>
      <ThrowableComponent status={401} />
    </ErrorBoundary>,
    { initialRootState: {} }
  );

  expect(logout).toHaveBeenCalled();
});

it("should render custom page error when error occurred", () => {
  const { getByTestId } = renderWithProviders(
    <ErrorBoundary fallback={() => <span data-testid="custom-page-error" />}>
      <ThrowableComponent status={500} />
    </ErrorBoundary>,
    { initialRootState: {} }
  );

  expect(getByTestId("custom-page-error")).toBeDefined();
});

it("should log error when http response return status 500", () => {
  const spyLog = jest.spyOn(Logger, "log");

  renderWithProviders(
    <ErrorBoundary>
      <ThrowableComponent status={500} />
    </ErrorBoundary>,
    { initialRootState: {} }
  );

  expect(spyLog).toHaveBeenCalled();
  destroy();
});
