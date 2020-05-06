import styled from "styled-components";

interface ModalWrapperProps {
  show: boolean;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 92%;
  max-width: 450px;
  padding: 10px;
  top: 35px;
  left: calc(-50vw + 50%);
  right: calc(-50vw + 50%);
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease-out;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-100vh)"};
  opacity: ${(props) => (props.show ? "1" : "0")};
  box-shadow: 6px 6px 20px -5px rgba(185, 185, 185, 1);
  border-radius: 20px;
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  ${(props) => props.theme.media.tablet} {
    top: 95px;
  }
`;
