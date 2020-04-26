import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  width: 100%;
  max-width: 300px;
  background: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.primaryBgColor};
  font-weight: ${props => props.theme.fontWeight.light};
  border-radius: 20px;
  padding: 0.7em 1.6em;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  ${props => props.theme.media.laptop} {
    max-width: 260px;
  }

  &:disabled {
    background: ${props => props.theme.colors.grayColor};
    opacity: 0.55;
    cursor: not-allowed;
  }
`;
