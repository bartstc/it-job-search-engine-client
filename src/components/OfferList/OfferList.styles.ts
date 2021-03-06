import styled from "styled-components";

export const OfferListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: .5em;

  ${(props) => props.theme.media.tablet} {
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
