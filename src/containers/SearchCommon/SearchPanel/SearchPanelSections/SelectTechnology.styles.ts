import styled from "styled-components";

import { Theme } from "styles/theme";

type RadioInputProps = {
  color: string;
  theme: Theme;
};

type LabelWrapperProps = {
  allChecked: boolean;
  color: string;
  theme: Theme;
}

export const SelectWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
`;

export const InputContainer = styled.div`
  position: relative;
  height: 2.6em;
  width: 2.6em;
  margin-right: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;

  ${props => props.theme.media.laptopL} {
    margin-right: 1.6em;
  }
`;

export const LabelWrapper = styled.div<LabelWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 1rem;
  transition: transform 300ms ease;
  cursor: pointer;
  background-color: ${props =>
  props.allChecked ? props.color : props.theme.colors.grayColor};
`;

export const RadioInput = styled.input<RadioInputProps>`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;

  

  &:checked + ${LabelWrapper} {
    background-color: ${props => props.color};
  }
`;

export const RadioLabel = styled.label`
  text-align: center;
  font-weight: 300;
  cursor: pointer;
`;

export const Desc = styled.p`
  color: ${props => props.theme.colors.grayColor};
  font-size: 0.63rem;
  margin-top: 0.55em;
  text-transform: capitalize;
`;
