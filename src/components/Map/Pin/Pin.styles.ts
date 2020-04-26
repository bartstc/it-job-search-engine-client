import styled from "styled-components";

import { Theme } from "styles/theme";

type MarkProps = {
  color: string;
  theme: Theme;
};

export const Mark = styled.div<MarkProps>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${props => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -17px 0 0 -17px;
`;

export const Popup = styled.div`
  position: absolute;
  top: 30px;
  left: 20px;
  width: 260px;
  background: ${props => props.theme.colors.primaryBgColor};
  box-shadow: 1px 2px 3px -1px ${props => props.theme.colors.grayColor};
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out;
  visibility: hidden;
  padding: 0.5em;
`;

export const PopupTitle = styled.h3`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.primaryColor};
  font-weight: ${props => props.theme.fontWeight.regular};
`;

export const PopupPrice = styled.h3`
  font-size: 0.8rem;
  margin-top: 0.4em;
  color: ${props => props.theme.colors.secondaryColor};
  font-weight: ${props => props.theme.fontWeight.light};
`;

export const PopupCompany = styled.h3`
  font-size: 0.8rem;
  margin-top: 0.4em;
  color: ${props => props.theme.colors.primaryColor};
  font-weight: ${props => props.theme.fontWeight.light};
`;

export const PinWrapper = styled.div`
  position: relative;

  &:hover ${Popup} {
    visibility: visible;
  }
`;
