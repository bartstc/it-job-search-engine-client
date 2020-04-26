import styled from "styled-components";

import { Theme } from "styles/theme";

import { NotificationType } from "modules/notification/types/NotificationType";

interface IStyledNotificationProps {
  show: boolean;
  type: NotificationType;
}

const handleColorType = (type: NotificationType, { colors }: Theme): string => {
  switch (type) {
    case NotificationType.Error:
      return colors.errorColor;
    case NotificationType.Info:
      return colors.infoColor;
    case NotificationType.Success:
      return colors.successColor;
    default:
      return colors.errorColor;
  }
};

export const StyledNotification = styled.div<IStyledNotificationProps>`
  position: fixed;
  z-index: 200;
  background: ${props => props.theme.colors.primaryBgColor};
  width: 280px;
  padding: .7em 0.3em;
  transition: all 0.3s ease-out;
  top: 4%;
  left: 50%;
  margin-left: -140px;
  box-sizing: border-box;
  text-align: center;
  transform: ${props => (props.show ? "translateY(0)" : "translateY(-10vh)")};
  opacity: ${props => (props.show ? "1" : "0")};
  border: 1.5px solid ${props => handleColorType(props.type, props.theme)};
  border-top: 12px solid ${props => handleColorType(props.type, props.theme)};
  border-radius: 8.5px;
`;

export const NotificationMessage = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.primaryColor};
`;
