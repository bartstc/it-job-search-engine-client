import styled from "styled-components";

export const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3em;

  ${props => props.theme.media.tablet} {
    max-width: 500px;
    min-height: 500px;
  }

  * {
    text-align: center;
  }
`;
