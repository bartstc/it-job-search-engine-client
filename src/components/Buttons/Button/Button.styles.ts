import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.primaryBgColor};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  border-radius: 20px;
  padding: 0.95em 1.2em;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  border: none;

  ${(props) => props.theme.media.laptop} {
    min-width: 150px;
  }

  &.rectangular {
    border-radius: 0;
  }

  &.accent-filled {
    background: ${(props) => props.theme.colors.secondaryColor};
    border: 3px solid ${(props) => props.theme.colors.secondaryColor};
    color: #ffffff;
  }

  &.accent-bordered {
    background: transparent;
    border: 3px solid ${(props) => props.theme.colors.secondaryColor};
    color: ${(props) => props.theme.colors.primaryColor};

    i {
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }

  &.mq-laptop-ignore {
    ${(props) => props.theme.media.laptop} {
      display: none;
    }
  }

  &:disabled {
    background: ${(props) => props.theme.colors.grayColor};
    opacity: 0.55;
    cursor: not-allowed;
  }

  .fas {
    font-size: 1rem;
  }
`;
