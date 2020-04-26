import styled from "styled-components";

export const OfferContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${props => props.theme.media.laptop} {
    flex: 0.6;
    padding: 0 .15em 0 1.1em;
  }

  ${props => props.theme.media.laptopL} {
    flex: 0.5;
  }
`;

export const OfferDetailsWrapper = styled.ul`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  height: 100%;
  overflow-y: scroll;
  padding: 0 0.6em;

  ${props => props.theme.media.tablet} {
    max-width: 760px;
  }

  ${props => props.theme.media.laptop} {
    max-width: none;
  }

  //&::-webkit-scrollbar {
  //  width: 0;
  //  opacity: 0;
  //}
`;