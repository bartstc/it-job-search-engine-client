import styled from "styled-components";

type IconProps = {
  size: string;
  color?: string;
};

export const StyledIcon = styled.i<IconProps>`
  font-size: ${props => props.size};
  color: ${props => (props.color ? props.color : "#fff")};
`;
