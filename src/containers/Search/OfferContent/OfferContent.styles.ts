import styled from "styled-components";

export const OfferContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${(props) => props.theme.media.laptop} {
    flex: 0.6;
    padding: 0 0.15em 0 1.1em;
  }

  ${(props) => props.theme.media.laptopL} {
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

  ${(props) => props.theme.media.tablet} {
    max-width: 760px;
  }

  ${(props) => props.theme.media.laptop} {
    max-width: none;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 9px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
  }

  //&::-webkit-scrollbar {
  //  width: 0;
  //  opacity: 0;
  //}
`;
