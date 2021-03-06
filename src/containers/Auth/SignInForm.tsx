import React from "react";
import { Formik, Field } from "formik";
import { useTranslation } from "react-i18next";

import { AuthLink, AuthWrapper, InfoText } from "./Auth.styles";

import { signInUser } from "modules/users/api";
import { NotificationType } from "modules/notification/types/NotificationType";
import { useAuthDispatch } from "modules/users/contexts/authContext";

import { Input } from "components/Input";
import { SlimForm } from "components/Forms";
import { useMutation } from "components/Suspense";

import { useNotification } from "hooks/useNotification";

import { signInValidationSchema } from "./logic";

const initValues = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const { t } = useTranslation();
  const { showNotification } = useNotification();
  const { login } = useAuthDispatch();

  const [mutate] = useMutation(signInUser, {
    onError: (error) => {
      showNotification({
        type: NotificationType.Error,
        message: error.response?.data.signature,
      });
    },
  });

  return (
    <AuthWrapper>
      <Formik
        initialValues={initValues}
        validationSchema={signInValidationSchema}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);

          try {
            const { token } = await mutate(values);
            actions.setSubmitting(false);
            login(token);
          } catch {
            actions.setSubmitting(false);
          }
        }}
      >
        {({ errors, touched, isSubmitting, isValid }) => {
          return (
            <SlimForm
              formTitle={t("Auth.formLabels.signInTitle")}
              submitTitle={t("Auth.formLabels.signInTitle")}
              isSubmitting={isSubmitting}
              isValid={isValid && Object.values(touched).length > 0}
              fields={
                <>
                  <Field
                    name="username"
                    id="signin-username"
                    label={t("Auth.formLabels.loginLabel")}
                    errorMsg={errors.username}
                    touched={touched.username}
                    as={Input}
                  />
                  <Field
                    name="password"
                    id="signin-password"
                    label={t("Auth.formLabels.passwordLabel")}
                    type="password"
                    errorMsg={errors.password}
                    touched={touched.password}
                    as={Input}
                  />
                </>
              }
            >
              <InfoText>{t("Auth.formLabels.signUpQuestion")}</InfoText>
              <AuthLink to="/auth/signup">
                {t("Auth.formLabels.signUpTitle")}
              </AuthLink>
            </SlimForm>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export { SignInForm };
