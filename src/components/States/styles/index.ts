import styled from "styled-components";

export const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3em;
  
  i {
    color: ${props => props.theme.colors.primaryColor};
    font-size: 4rem;
    margin-bottom: .5em;
  }

  ${props => props.theme.media.tablet} {
    max-width: 500px;
    min-height: 500px;
    
    i {
      font-size: 7rem;
      margin-bottom: .2em;
    }
  }

  * {
    text-align: center;
  }
`;
