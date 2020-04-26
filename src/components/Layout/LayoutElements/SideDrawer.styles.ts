import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideDrawerWrapper = styled.nav`
  position: fixed;
  z-index: 20;
  right: 0;
  top: 0;
  transform: ${(props: { toggled: boolean }) =>
    props.toggled ? "translateX(0)" : "translateX(100%)"};
  width: 260px;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  background: ${props => props.theme.colors.primaryBgColor};
  transition: transform 0.3s ease;
  padding-top: 4em;
  padding-left: 1.4em;

  ${props => props.theme.media.tablet} {
    width: 360px;
    padding-top: 6em;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 14px;
  background: none;
  border: none;
  width: 45px;
  height: 45px;
  color: ${props => props.theme.colors.primaryColor};
  font-size: 1.7rem;
  cursor: pointer;

  ${props => props.theme.media.tablet} {
    top: 22px;
    right: 30px;
    font-size: 2.2rem;
    width: 50px;
    height: 50px;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.4em;
`;

export const Link = styled(NavLink)`
  line-height: 1.6rem;
  font-size: 1.1rem;
  font-weight: ${props => props.theme.fontWeight.regular};
  color: ${props => props.theme.colors.primaryColor};
  border-bottom: 1px solid ${props => props.theme.colors.primaryColor};
  margin-bottom: 1.2em;

  &.active {
  }

  ${props => props.theme.media.tablet} {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;

export const Switches = styled.div`
  display: block;

  ${props => props.theme.media.laptop} {
    display: none;
  }
`;

export const TranslationButtons = styled.div`
  position: absolute;
  top: 18px;
  left: 22px;
  display: flex;
  align-items: center;

  ${props => props.theme.media.tablet} {
    top: 30px;
    left: 22px;
  }
`;

export const TranslateButton = styled.button`
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 1.3rem;
  background: transparent;
  border: none;
  margin-right: 0.5em;
  cursor: pointer;
`;
