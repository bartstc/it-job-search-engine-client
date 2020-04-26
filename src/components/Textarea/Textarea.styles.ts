import styled from "styled-components";

import { Theme } from "styles/theme";

type LabelProps = {
  shrink: boolean;
  theme: Theme;
};

type IconProps = {
  isInvalid: boolean;
  touched: boolean;
  theme: Theme;
};

type ErrorProps = {
  showError: boolean;
  theme: Theme;
};

export const Wrapper = styled.p`
  position: relative;
  width: 100%;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Label = styled.label<LabelProps>`
  color: ${props => props.theme.colors.secondaryColor};
  font-weight: ${props => props.theme.fontWeight.light};
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: ${props => (props.shrink ? "16px" : "42px")};
  font-size: ${props => (props.shrink ? "12px" : ".9rem")};
  transition: 300ms ease all;
`;

export const TextareaElement = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 10px 50px 10px 5px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.secondaryColor};
  font-size: 1rem;
  background: none;
  color: ${props => props.theme.colors.secondaryColor};
  margin-top: 30px;
  margin-bottom: 7px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    top: 16px;
    font-size: 12px;
  }

  &[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const ValidationIcon = styled.span<IconProps>`
  display: block;
  opacity: ${props => (props.touched ? "1" : "0")};
  transition: all 0.25s ease-in-out;
  position: absolute;
  top: 39px;
  right: 0;
  font-size: 1.4rem;
  color: ${props => (props.isInvalid ? "#ff4a4a" : "#4ec76e")};
`;

export const Error = styled.span<ErrorProps>`
  display: block;
  font-size: 0.8rem;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.colors.primaryBgColor};
  line-height: 40px;
  width: 100%;
  background: #ff4a4a;
  padding: 0 0.9em;
  border-radius: 11px;
  height: ${props => (props.showError ? "40px" : "0")};
  opacity: ${props => (props.showError ? "1" : "0")};
  transition: all 0.15s ease-in-out;
`;
