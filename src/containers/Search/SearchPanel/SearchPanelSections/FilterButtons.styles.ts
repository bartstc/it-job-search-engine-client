import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  height: 100%;
  max-width: 520px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5em;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      margin-left: 0.45em;
    }
  }

  ${props => props.theme.media.laptop} {
    display: flex;
    align-items: center;
    max-width: inherit;
    margin: 0;

    button {
      margin-right: 1.7em;
    }
  }
`;
