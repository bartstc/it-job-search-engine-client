import { Role } from "../types/Role";

export interface SignUpDTO {
  username: string;
  email: string;
  password: string;
  roles: Role[];
}
