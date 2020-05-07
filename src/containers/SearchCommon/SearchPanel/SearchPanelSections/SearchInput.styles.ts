import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  
  ${(props) => props.theme.media.laptop} {
    margin-top: 0;
  }
`;

export const SearchButton = styled.button`
  width: 52px;
  height: 46px;
  background: ${(props) => props.theme.colors.secondaryColor};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;

  i {
    margin-right: 3px;
    transition: 0.15s ease all;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border: 3px solid ${(props) => props.theme.colors.secondaryColor};
  outline-color: ${(props) => props.theme.colors.secondaryColor};
  font-size: 1rem;
  background: none;
  color: ${(props) => props.theme.colors.primaryColor};
  transition: border 0.15s ease-in-out;
  padding: 7px;

  ${(props) => props.theme.media.laptopL} {
    width: 450px;
  }

  &:focus ~ ${SearchButton} i {
    transform: scale(1.5);
  }
`;
