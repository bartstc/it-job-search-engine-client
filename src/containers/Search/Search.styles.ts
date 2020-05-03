import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  background: ${props => props.theme.colors.primaryBgColor};

  ${props => props.theme.media.laptop} {
    height: calc(100vh - 90px);
  }
`;

export const SearchOverview = styled.div`
  width: 100%;
  height: calc(100% - 120px);

  ${props => props.theme.media.laptop} {
    display: flex;
    align-items: center;
    height: calc(100% - 140px);
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  padding-left: .4em;

  ${props => props.theme.media.laptop} {
    display: block;

    flex: 0.4;
  }

  ${props => props.theme.media.laptopL} {
    flex: 0.5;
  }

  ${props => props.theme.media.laptop} {
  }
`;
