import styled from "styled-components";

export const OfferContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${(props) => props.theme.media.laptop} {
    flex: 0.6;
    padding: 0 0.15em 0 1.1em;
    margin-right: 1.2em;
  }

  ${(props) => props.theme.media.laptopL} {
    flex: 0.5;
  }
`;
