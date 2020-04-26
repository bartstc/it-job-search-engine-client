import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Auth.schema.required")
    .min(4, "Auth.schema.min")
    .max(255, "Auth.schema.max"),
  email: Yup.string()
    .required("Auth.schema.required")
    .email("Must be valid email")
    .max(255, "Auth.schema.max"),
  password: Yup.string()
    .required("Auth.schema.required")
    .max(255, "Auth.schema.max")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Auth.schema.passwordTooWeak"
    )
});
