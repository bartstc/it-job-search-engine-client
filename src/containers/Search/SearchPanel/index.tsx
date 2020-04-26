import React from "react";

import {
  SearchPanelWrapper,
  TopPanel,
  Switches,
  BottomPanel
} from "./SearchPanel.styles";

import { useThemeConsumer } from "styles";

import { SwitchInput } from "components/SwitchInput";

import { FilterButtons, SelectTechnology } from "./SearchPanelSections";

const SearchPanel = () => {
  const { theme, toggleTheme } = useThemeConsumer();

  return (
    <SearchPanelWrapper>
      <TopPanel>
        <FilterButtons />
        <Switches>
          <SwitchInput
            checked={theme.name === "dark"}
            onChange={toggleTheme}
            options={["change-clr-on-switch"]}
            id="theme-switch"
            leftIcon={<i className="fas fa-sun" />}
            rightIcon={<i className="fas fa-moon" />}
          />
        </Switches>
      </TopPanel>
      <BottomPanel>
        <SelectTechnology />
      </BottomPanel>
    </SearchPanelWrapper>
  );
};

export { SearchPanel };
