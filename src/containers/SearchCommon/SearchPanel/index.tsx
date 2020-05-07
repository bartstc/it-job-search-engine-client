import React from "react";

import {
  SearchPanelWrapper,
  TopPanel,
  BottomPanel,
} from "./SearchPanel.styles";

import {
  FilterButtons,
  SearchInput,
  SelectTechnology,
} from "./SearchPanelSections";

const SearchPanel = () => {
  return (
    <SearchPanelWrapper>
      <TopPanel>
        <FilterButtons />
        <SearchInput />
      </TopPanel>
      <BottomPanel>
        <SelectTechnology />
      </BottomPanel>
    </SearchPanelWrapper>
  );
};

export { SearchPanel };
