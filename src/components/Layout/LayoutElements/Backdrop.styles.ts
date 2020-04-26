import styled from "styled-components";

type OverlayProps = {
  show: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  visibility: ${props => (props.show ? "visible" : "hidden")};
  opacity: ${props => (props.show ? ".65" : "0")};
  background: ${props => props.theme.colors.grayColor};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
`;
