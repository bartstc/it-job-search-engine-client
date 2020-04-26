import {NotificationConfig} from "./NotificationConfig";

export interface NotificationState extends NotificationConfig {
  active: boolean;
}