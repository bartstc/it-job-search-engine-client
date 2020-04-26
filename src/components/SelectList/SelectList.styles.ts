import styled from "styled-components";

export const SelectWrapper = styled.div`
  width: 100%;
  margin-top: 2em;
`;

export const Label = styled.label`
  color: ${props => props.theme.colors.secondaryColor};
  font-weight: ${props => props.theme.fontWeight.light};
  font-size: 0.9rem;
  padding-left: 0.3em;
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 0.3em;
  height: 36px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.secondaryColor};
  color: ${props => props.theme.colors.secondaryColor};
  outline-color: ${props => props.theme.colors.secondaryColor};
  font-family: ${props => props.theme.fontFamily.primary};
  text-transform: capitalize;
  background: transparent;
`;

export const Option = styled.option`
  width: 100%;
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.secondaryColor};
  text-transform: capitalize;

  &::placeholder {
    color: ${props => props.theme.colors.grayColor};
  }

  &:hover,
  &:focus,
  &:active,
  &:checked {
    background: ${props => props.theme.colors.secondaryColor};
    color: ${props => props.theme.colors.primaryColor};
  }
`;
