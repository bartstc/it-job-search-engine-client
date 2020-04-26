import React from "react";
import { Field, Formik } from "formik";
import { useTranslation } from "react-i18next";
import useRouter from "use-react-router";

import { AuthLink, AuthWrapper, InfoText } from "./Auth.styles";

import { NotificationType } from "modules/notification/types/NotificationType";
import { Role } from "modules/users/types/Role";
import { signUpUser } from "modules/users/api";

import { Input } from "components/Input";
import { SlimForm } from "components/Forms";

import { useNotification } from "hooks/useNotification";

import { signUpValidationSchema } from "./logic";

const initValues = {
  username: "",
  email: "",
  password: "",
  roles: [Role.Employer],
};

const SignUpForm = () => {
  const { t } = useTranslation();
  const { history } = useRouter();
  const { showNotification } = useNotification();

  return (
    <AuthWrapper>
      <Formik
        initialValues={initValues}
        validationSchema={signUpValidationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);

          signUpUser(values)
            .then(() => {
              actions.setSubmitting(false);
              history.push("signin");
            })
            .catch(() => {
              showNotification({
                type: NotificationType.Error,
                message: "serverError",
              });
              actions.setSubmitting(false);
            });
        }}
      >
        {({ errors, touched, isSubmitting, isValid }) => {
          return (
            <SlimForm
              formTitle={t("Auth.formLabels.signUpTitle")}
              submitTitle={t("Auth.formLabels.signUpTitle")}
              isSubmitting={isSubmitting}
              isValid={isValid && Object.values(touched).length > 0}
              fields={
                <>
                  <Field
                    name="username"
                    id="signup-username"
                    label={t("Auth.formLabels.loginLabel")}
                    errorMsg={errors.username}
                    touched={touched.username}
                    as={Input}
                  />
                  <Field
                    name="email"
                    id="signup-email"
                    label={t("Auth.formLabels.emailLabel")}
                    errorMsg={errors.email}
                    touched={touched.email}
                    as={Input}
                  />
                  <Field
                    name="password"
                    id="signup-password"
                    label={t("Auth.formLabels.passwordLabel")}
                    type="password"
                    errorMsg={errors.password}
                    touched={touched.password}
                    as={Input}
                  />
                </>
              }
            >
              <InfoText>{t("Auth.formLabels.signInQuestion")}</InfoText>
              <AuthLink to="/auth/signin">
                {t("Auth.formLabels.signInTitle")}
              </AuthLink>
            </SlimForm>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export { SignUpForm };
