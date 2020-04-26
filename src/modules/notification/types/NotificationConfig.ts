import { NotificationType } from "./NotificationType";

export interface NotificationConfig {
  type?: NotificationType;
  timeout?: number;
  message?: string;
}

