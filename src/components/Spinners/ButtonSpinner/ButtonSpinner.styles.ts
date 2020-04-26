import styled from "styled-components";

export const Loader = styled.span`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;

  &:after {
    content: " ";
    display: block;
    width: 16px;
    height: 16px;
    margin: 1px;
    border-radius: 50%;
    border: 4px solid ${props => props.theme.colors.primaryColor};
    border-color: ${props => props.theme.colors.primaryColor} transparent
      ${props => props.theme.colors.primaryColor} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
