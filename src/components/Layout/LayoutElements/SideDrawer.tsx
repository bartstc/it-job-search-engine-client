import React from "react";
import { useTranslation } from "react-i18next";

import { useThemeConsumer } from "styles";

import { Role } from "modules/users/types/Role";
import {
  useAuthDispatch,
  useAuthState,
} from "modules/users/contexts/authContext";

import {
  CloseBtn,
  Link,
  Links,
  SideDrawerWrapper,
  TranslateButton,
  TranslationButtons,
} from "./SideDrawer.styles";
import { SwitchInput } from "../../SwitchInput";

interface AuthLink {
  path: string;
  langPath: string;
  for: Role[];
}

const authLinks: AuthLink[] = [
  {
    path: "/dashboard/offers",
    langPath: "Layout.links.addedOffers",
    for: [Role.Employer],
  },
  {
    path: "/dashboard/add-offer",
    langPath: "Layout.links.newOffer",
    for: [Role.Employer],
  },
  {
    path: "/dashboard",
    langPath: "Layout.links.dashboard",
    for: [Role.Employer],
  },
  {
    path: "/",
    langPath: "Layout.links.logout",
    for: [Role.Employer, Role.Developer],
  },
];

type Props = {
  toggle: boolean;
  handleClose: () => void;
};

const SideDrawer = ({ toggle, handleClose }: Props) => {
  const { theme, toggleTheme } = useThemeConsumer();
  const { t, i18n } = useTranslation();
  const { isAuth, roles } = useAuthState();
  const { logout } = useAuthDispatch();

  const changeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  const renderAuthLinks = () => {
    return authLinks
      .filter((link) => link.for.some((role) => roles.includes(role)))
      .map(({ langPath, path }) => (
        <Link
          key={langPath}
          onClick={() => {
            if (langPath === "Layout.links.logout") {
              logout();
            }

            handleClose();
          }}
          exact
          to={path}
        >
          {t(langPath)}
        </Link>
      ));
  };

  return (
    <SideDrawerWrapper toggled={toggle}>
      <CloseBtn data-testid="close-side-drawer-btn" onClick={handleClose}>
        <i className="far fa-times-circle" />
      </CloseBtn>
      <TranslationButtons>
        <TranslateButton onClick={() => changeLanguage("pl")}>
          PL
        </TranslateButton>
        <TranslateButton onClick={() => changeLanguage("en")}>
          EN
        </TranslateButton>
      </TranslationButtons>
      <Links>
        <Link to="/" onClick={handleClose}>
          {t("Layout.links.home")}
        </Link>
        {!isAuth && (
          <>
            <Link exact to="/signin" onClick={handleClose}>
              {t("Layout.links.signIn")}
            </Link>
            <Link exact to="/signup" onClick={handleClose}>
              {t("Layout.links.signUp")}
            </Link>
          </>
        )}
        {renderAuthLinks()}
      </Links>
        <SwitchInput
          checked={theme.name === "dark"}
          onChange={toggleTheme}
          options={["change-clr-on-switch"]}
          id="theme-switch"
          leftIcon={<i className="fas fa-sun" />}
          rightIcon={<i className="fas fa-moon" />}
        />
    </SideDrawerWrapper>
  );
};

export { SideDrawer };
