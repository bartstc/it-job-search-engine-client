import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.primaryBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
