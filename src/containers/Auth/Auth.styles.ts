import styled from "styled-components";
import { Link } from "react-router-dom";

import { Paragraph } from "styles";

export const AuthWrapper = styled.section`
  padding-top: 1.5em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.primaryBgColor};

  ${props => props.theme.media.tablet} {
    flex-direction: row;
    padding-top: 3em;
  }
`;

export const InfoText = styled(Paragraph)`
  font-size: 0.9rem;
  margin-top: 1.8em;

  ${props => props.theme.media.tablet} {
    font-size: 1rem;
  }
`;

export const AuthLink = styled(Link)`
  width: 100%;
  border: 1.5px solid ${props => props.theme.colors.primaryColor};
  background: ${props => props.theme.colors.primaryBgColor};
  color: ${props => props.theme.colors.primaryColor};
  padding: 0.8em 1.9em;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: 0.9rem;
  transition: all 0.15s ease-in-out;
  text-align: center;
  margin-top: 0.6em;

  &:hover {
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.primaryBgColor};
  }
`;
