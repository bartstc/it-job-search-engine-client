import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../../test/utils/renderWithProviders";
import { UserPermissions } from "../../../modules/user/types/UserPermissions";

import { Header } from "./Header";

describe("Header", function() {
  it("should render signin and signup links when user is logout", function() {
    const mockHandleOpen = jest.fn();

    const { getByText } = renderWithProviders(
      <Header handleOpen={mockHandleOpen} />
    );

    const signInLink = getByText(/sign in/i);
    const signUpLink = getByText(/register/i);

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  it("should render users login when its login and role is unassigned", function() {
    const mockHandleOpen = jest.fn();

    const { getByText } = renderWithProviders(
      <Header handleOpen={mockHandleOpen} />,
      {
        user: {
          userPermissions: UserPermissions.Unassigned,
          user: {
            login: "JohnDoe"
          }
        }
      }
    );

    const loginText = getByText(/logged as:/i);

    expect(loginText).toBeInTheDocument();
  });

  it("should render users login when its login is company", function() {
    const mockHandleOpen = jest.fn();

    const { getByText } = renderWithProviders(
      <Header handleOpen={mockHandleOpen} />,
      {
        user: {
          userPermissions: UserPermissions.Company,
          user: {
            login: "JohnDoe"
          }
        }
      }
    );

    const loginText = getByText(/logged as:/i);

    expect(loginText).toBeInTheDocument();
  });

  it("should render users login when its login is developer", function() {
    const mockHandleOpen = jest.fn();

    const { getByText } = renderWithProviders(
      <Header handleOpen={mockHandleOpen} />,
      {
        user: {
          userPermissions: UserPermissions.Developer,
          user: {
            login: "JohnDoe"
          }
        }
      }
    );

    const loginText = getByText(/logged as:/i);

    expect(loginText).toBeInTheDocument();
  });

  it("should call handleOpen when hamburger btn is clicked", function() {
    const mockHandleOpen = jest.fn();

    const { container } = renderWithProviders(
      <Header handleOpen={mockHandleOpen} />
    );

    const hamburgerBtn = container.querySelector("button");

    fireEvent.click(hamburgerBtn!);

    expect(mockHandleOpen).toHaveBeenCalled();
  });
});
