import styled from "styled-components";

import { Theme } from "./theme";

interface TypographyElementProps {
  theme: Theme;
  weight?: "light" | "regular" | "semiBold" | "bold";
  accent?: boolean;
  center?: boolean;
}

export const H1 = styled.h1<TypographyElementProps>`
  padding: 0.5em 0;
  text-align: ${props => (props.center ? "center" : "start")};
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: 1.9rem;
  font-weight: ${props =>
    props.weight
      ? props.theme.fontWeight[props.weight]
      : props.theme.fontWeight.bold};
  color: ${props =>
    props.accent
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};

  ${props => props.theme.media.mobileL} {
    font-size: calc(1.6em + 1.65vw);
  }

  ${props => props.theme.media.laptop} {
    font-size: 3rem;
  }
`;

export const H2 = styled.h2<TypographyElementProps>`
  padding: 0.3em 0;
  text-align: ${props => (props.center ? "center" : "start")};
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: 1.625em;
  font-weight: ${props =>
    props.weight
      ? props.theme.fontWeight[props.weight]
      : props.theme.fontWeight.bold};
  color: ${props =>
    props.accent
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};

  ${props => props.theme.media.mobileL} {
    font-size: calc(1.4em + 1vw);
  }

  ${props => props.theme.media.laptop} {
    font-size: 2.25rem;
  }
`;

export const H3 = styled.h3<TypographyElementProps>`
  text-align: ${props => (props.center ? "center" : "start")};
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: 1.375em;
  font-weight: ${props =>
    props.weight
      ? props.theme.fontWeight[props.weight]
      : props.theme.fontWeight.bold};
  color: ${props =>
    props.accent
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};

  ${props => props.theme.media.mobileL} {
    font-size: calc(1.25em + 0.55vw);
  }

  ${props => props.theme.media.laptop} {
    font-size: 1.75em;
  }
`;

export const H4 = styled.h4<TypographyElementProps>`
  text-align: ${props => (props.center ? "center" : "start")};
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: 1.125em;
  font-weight: ${props =>
    props.weight
      ? props.theme.fontWeight[props.weight]
      : props.theme.fontWeight.bold};
  color: ${props =>
    props.accent
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};

  ${props => props.theme.media.mobileL} {
    font-size: calc(1.1em + 0.2vw);
  }

  ${props => props.theme.media.laptop} {
    font-size: 1.25em;
  }
`;

export const Paragraph = styled.p<TypographyElementProps>`
  text-align: ${props => (props.center ? "center" : "start")};
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: ${props =>
    props.weight
      ? props.theme.fontWeight[props.weight]
      : props.theme.fontWeight.regular};
  color: ${props =>
    props.accent
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};

  ${props => props.theme.media.mobileL} {
    font-size: calc(0.93em + 0.35vw);
    line-height: calc(1.12em + 0.5vw);
  }

  ${props => props.theme.media.laptop} {
    font-size: 1.15em;
    line-height: 1.55rem;
  }
`;
