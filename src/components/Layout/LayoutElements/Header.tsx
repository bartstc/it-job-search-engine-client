import React from "react";
import { useTranslation } from "react-i18next";

import { useAuthState } from "modules/users/contexts/authContext";

import {
  Hamburger,
  HeaderWrapper,
  LinkWrapper,
  List,
  LoginText,
  LogoLink,
  LogoSubtitle,
  LogoTitle,
  Nav,
  RightWrapper,
} from "./Header.styles";

import { Link } from "../../Link";

type Props = {
  handleOpen: () => void;
};

const Header = ({ handleOpen }: Props) => {
  const { t } = useTranslation();
  const { username, isAuth } = useAuthState();

  return (
    <HeaderWrapper>
      <LogoLink to="/">
        <LogoTitle>IT job</LogoTitle>
        <LogoSubtitle>{t("Layout.header.logoTitle")}</LogoSubtitle>
      </LogoLink>
      <RightWrapper>
        {!isAuth && (
          <Nav>
            <List>
              <LinkWrapper>
                <Link to="/signin">{t("Layout.header.signInBtn")}</Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/signup">{t("Layout.header.signUpBtn")}</Link>
              </LinkWrapper>
            </List>
          </Nav>
        )}
        {isAuth && (
          <LoginText>
            {t("Layout.header.userLogin")}: <span>{username}</span>
          </LoginText>
        )}
        <Hamburger onClick={handleOpen}>
          <i className="fas fa-bars" />
        </Hamburger>
      </RightWrapper>
    </HeaderWrapper>
  );
};

export { Header };
