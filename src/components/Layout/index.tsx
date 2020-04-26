import React, { ReactNode } from "react";

import { StyledMain } from "./Layout.styles";

import { useSideDrawer } from "hooks/useSideDrawer";

import { SideDrawer, Header, Backdrop, Notification } from "./LayoutElements";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { opened, onClose, onOpen } = useSideDrawer();

  return (
    <>
      <Notification />
      <Header handleOpen={onOpen} />
      <Backdrop show={opened} handleClose={onClose} />
      <SideDrawer toggle={opened} handleClose={onClose} />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export { Layout };
