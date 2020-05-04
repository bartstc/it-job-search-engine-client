import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const SmoothPage = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  transition: opacity 0.3s ease-in-out;
`;

export { SmoothPage };
