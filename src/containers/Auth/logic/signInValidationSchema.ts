import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Auth.schema.required")
    .max(255, "Auth.schema.max"),
  password: Yup.string()
    .required("Auth.schema.required")
    .max(255, "Auth.schema.max")
});
