import React, { ReactNode } from "react";

import { ModalWrapper } from "./Modal.styles";

import { Backdrop } from "../Backdrop";

type Props = {
  children: ReactNode;
  closeModal: () => void;
  show: boolean;
};

export const Modal = ({ closeModal, show, children }: Props) => (
  <>
    <Backdrop show={show} handleClose={closeModal} />
    <ModalWrapper show={show}>{children}</ModalWrapper>
  </>
);
