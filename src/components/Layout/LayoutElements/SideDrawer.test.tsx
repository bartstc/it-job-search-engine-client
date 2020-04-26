import React from "react";
import { fireEvent } from "@testing-library/react";

import { renderWithProviders } from "../../../../test/utils/renderWithProviders";

import { UserPermissions } from "../../../modules/user/types/UserPermissions";
import { SideDrawer } from "./SideDrawer";

describe("SideDrawer", function() {
  it("should render correctly links when user is not logged in", function() {
    const { getByText } = renderWithProviders(
      <SideDrawer toggle={true} handleClose={jest.fn()} />,
      {
        user: {
          userPermissions: UserPermissions.Unlogged
        }
      }
    );

    const homeLink = getByText("Home");
    const signInLink = getByText("Sign in");
    const signUpLink = getByText("Sign up");

    expect(homeLink).toBeDefined();
    expect(signUpLink).toBeDefined();
    expect(signInLink).toBeDefined();
    expect(() => getByText("Added offers")).toThrowError(
      /Unable to find an element with the text:/
    );
    expect(() => getByText("Add new offer")).toThrowError(
      /Unable to find an element with the text:/
    );
    expect(() => getByText("Logout")).toThrowError(
      /Unable to find an element with the text:/
    );
    expect(() => getByText("Dashboard")).toThrowError(
      /Unable to find an element with the text:/
    );
  });

  it("should render correctly links when user have company context", function() {
    const { getByText } = renderWithProviders(
      <SideDrawer toggle={true} handleClose={jest.fn()} />,
      {
        user: {
          userPermissions: UserPermissions.Company
        }
      }
    );

    const homeLink = getByText("Home");
    const offerListLink = getByText("Added offers");
    const addOfferLik = getByText("Add new offer");
    const logoutLink = getByText("Logout");
    const dashboardLink = getByText("Dashboard");

    expect(homeLink).toBeDefined();
    expect(offerListLink).toBeDefined();
    expect(addOfferLik).toBeDefined();
    expect(logoutLink).toBeDefined();
    expect(dashboardLink).toBeDefined();
    expect(() => getByText("Sign in")).toThrowError(
      /Unable to find an element with the text:/
    );
    expect(() => getByText("Sign up")).toThrowError(
      /Unable to find an element with the text:/
    );
  });

  it("should render correctly links when user have developer context", function() {
    const { getByText } = renderWithProviders(
      <SideDrawer toggle={true} handleClose={jest.fn()} />,
      {
        user: {
          userPermissions: UserPermissions.Developer
        }
      }
    );

    const homeLink = getByText("Home");
    const logoutLink = getByText("Logout");
    const dashboardLink = getByText("Dashboard");

    expect(homeLink).toBeDefined();
    expect(logoutLink).toBeDefined();
    expect(dashboardLink).toBeDefined();
    expect(() => getByText("Sign in")).toThrowError(
      /Unable to find an element with the text:/
    );
    expect(() => getByText("Sign up")).toThrowError(
      /Unable to find an element with the text:/
    );
    expect(() => getByText("Added offers")).toThrowError(
      /Unable to find an element with the text:/
    );
    expect(() => getByText("Add new offer")).toThrowError(
      /Unable to find an element with the text:/
    );
  });

  it("should call handleClose function when button was clicked", function() {
    const mockHandleClose = jest.fn();

    const { getByTestId } = renderWithProviders(
      <SideDrawer toggle={true} handleClose={mockHandleClose} />
    );

    const closeBtn = getByTestId<HTMLButtonElement>("close-side-drawer-btn");

    fireEvent.click(closeBtn);

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
