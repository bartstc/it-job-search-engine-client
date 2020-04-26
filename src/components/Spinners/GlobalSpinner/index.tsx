import React from "react";

import { Wrapper } from "./GlobalSpinner.styles";

import { FetchingSpinner } from "..";

const GlobalSpinner = () => {
  return (
    <Wrapper>
      <FetchingSpinner />
    </Wrapper>
  );
};

export { GlobalSpinner };
