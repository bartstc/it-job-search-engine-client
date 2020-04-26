import React from "react";

import { Loader } from "./FetchingSpinner.styles";

const FetchingSpinner = () => {
  return (
    <Loader data-testid="fetching-spinner">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </Loader>
  );
};

export { FetchingSpinner };
