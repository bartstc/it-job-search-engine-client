import styled from "styled-components";

export const PageNotFound = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background: ${props => props.theme.colors.primaryBgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Status = styled.h2`
  font-size: 6rem;
  line-height: 6rem;

  ${props => props.theme.media.tablet} {
    font-size: 12rem;
    line-height: 12rem;
  }
`;

export const Message = styled.p`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  margin-bottom: 1.8em;

  ${props => props.theme.media.tablet} {
    font-size: 3rem;
  }
`;
