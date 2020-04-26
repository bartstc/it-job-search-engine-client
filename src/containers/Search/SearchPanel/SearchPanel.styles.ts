import styled from "styled-components";

export const SearchPanelWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding-top: 1em;
  height: 120px;

  ${props => props.theme.media.laptop} {
    height: 140px;
    max-width: none;
    padding: 0 2em;
  }
`;

export const TopPanel = styled.div`
  width: 100%;
  height: 50%;

  ${props => props.theme.media.laptop} {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Switches = styled.div`
  display: none;

  ${props => props.theme.media.laptop} {
    display: block;
  }
`;

export const BottomPanel = styled.div`
  width: 100%;
  height: 50%;
  display: none;

  ${props => props.theme.media.laptop} {
    display: block;
  }
`;
