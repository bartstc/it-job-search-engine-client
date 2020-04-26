import { Role } from "./Role";

export interface JwtPayload {
  username: string;
  userId: string;
  roles: Role[];
}
