import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 56px;
  background: ${props => props.theme.colors.secondaryBgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.9em;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;

  ${props => props.theme.media.tablet} {
    padding: 0 2em;
    height: 90px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.h1`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primaryColor};
  font-weight: ${props => props.theme.fontWeight.semiBold};

  ${props => props.theme.media.tablet} {
    font-size: 1.7rem;
  }
`;

export const LogoSubtitle = styled.p`
  display: none;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primaryColor};
  font-weight: ${props => props.theme.fontWeight.light};
  border-left: 2px solid ${props => props.theme.colors.primaryColor};
  padding-left: 1em;
  margin-left: 1em;

  ${props => props.theme.media.tablet} {
    display: block;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: none;

  ${props => props.theme.media.laptop} {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const LinkWrapper = styled.li`
  margin-right: 1.6em;
`;

export const Hamburger = styled.button`
  position: relative;
  width: 45px;
  height: 42px;
  box-sizing: border-box;
  cursor: pointer;
  background: none;
  border: none;
  margin-left: 0.35em;

  ${props => props.theme.media.laptop} {
    margin-left: 0.6em;
  }

  i {
    color: ${props => props.theme.colors.grayColor};
  }
`;

export const LoginText = styled.p`
  font-size: .94rem;
  margin-left: .65em;
  color: ${props => props.theme.colors.secondaryColor};
  text-overflow: ellipsis;
  
  span {
    font-weight: ${props => props.theme.fontWeight.semiBold};
  }
`;