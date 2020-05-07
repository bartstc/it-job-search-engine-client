import React from "react";

import { Input, SearchButton, Wrapper } from "./SearchInput.styles";

const SearchInput = () => {
  return (
    <Wrapper>
      <Input />
      <SearchButton>
        <i className="fas fa-search" />
      </SearchButton>
    </Wrapper>
  );
};

export { SearchInput };
