import React from "react";

import { Overlay } from "./Backdrop.styles";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const Backdrop = ({ show, handleClose }: Props) => (
  <Overlay data-testid="Overlay" show={show} onClick={handleClose} />
);

export { Backdrop };
