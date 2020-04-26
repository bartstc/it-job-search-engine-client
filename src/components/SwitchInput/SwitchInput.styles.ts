import styled from "styled-components";

import { Theme } from "styles/theme";

type SwitchProps = {
  switched: boolean;
  theme: Theme;
};

export const SwitchWrapper = styled.div<SwitchProps>`
  display: flex;
  align-items: center;

  i {
    font-size: 1.25em;
    color: ${props =>
      props.switched
        ? props.theme.colors.secondaryColor
        : props.theme.colors.grayColor};

    &.fa-sun {
      padding-right: 0.4em;
    }

    &.fa-moon {
      padding-left: 0.4em;
    }
  }
`;

export const SwitchLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 42px;
  height: 19px;
  background: ${props => props.theme.colors.grayColor};
  display: block;
  border-radius: 11px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 2.8px;
    left: 3px;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: 50%;
    transition: 0.2s;
  }

  &:active::after {
    width: 23px;
  }
`;

export const StyledInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${SwitchLabel} {
    background: ${props => props.theme.colors.secondaryColor};
  }

  &:checked + ${SwitchLabel}:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;
