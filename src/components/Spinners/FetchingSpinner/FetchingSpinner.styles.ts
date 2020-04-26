import styled from "styled-components";

export const Loader = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 5.5px solid ${props => props.theme.colors.secondaryColor};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 61px;
      left: 61px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 122px;
      height: 122px;
      opacity: 0;
    }
  }
`;
