import styled from "styled-components";

export const OfferListWrapper = styled.ul`
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
