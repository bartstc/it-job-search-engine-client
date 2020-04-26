import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  margin: 0 auto;
  padding-bottom: 2em;
  height: 100%;
  margin-top: 2em;

  ${props => props.theme.media.tablet} {
    width: 400px;
  }

  button {
    margin-top: 2em;
  }
`;
