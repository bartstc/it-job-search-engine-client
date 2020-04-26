import { client } from "utils/ajax/client";

import { SignUpDTO } from "../dtos/SignUpDTO";
import { SignInDTO } from "../dtos/SignInDTO";

export const signUpUser = (request: SignUpDTO) =>
  client({
    url: "/auth/signup",
    method: "post",
    data: request,
  });

export const signInUser = (request: SignInDTO) =>
  client<{ token: string }>({
    url: "/auth/signin",
    method: "post",
    data: request,
  });
