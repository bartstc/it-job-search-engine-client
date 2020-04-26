import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 56px 0.9em 0;
  background: ${props => props.theme.colors.primaryBgColor};
  position: relative;

  ${props => props.theme.media.tablet} {
    padding-top: 90px;
  }

  ${props => props.theme.media.laptop} {
    padding: 90px 0 0;
  }
`;
