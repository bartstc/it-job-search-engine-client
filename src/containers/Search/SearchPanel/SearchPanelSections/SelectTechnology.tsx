import React, { ChangeEvent } from "react";

import {
  SelectWrapper,
  InputContainer,
  RadioInput,
  LabelWrapper,
  RadioLabel,
  Desc,
} from "./SelectTechnology.styles";

import { technologyItems } from "modules/offers/constants/technologyItems";
import { useFiltersConsumer } from "modules/offers/contexts/FiltersContext";
import { Technology } from "modules/offers/types/Technology";

import { Icon } from "components/Icon";
import useRouter from "use-react-router";

const SelectTechnology = () => {
  const { history, location } = useRouter();
  const { setFilters, filters } = useFiltersConsumer();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, technology: e.currentTarget.value as Technology });

    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <SelectWrapper>
      {Object.values(technologyItems).map(
        ({ value, name, iconClass, color }) => {
          return (
            <InputContainer key={name}>
              <RadioInput
                color={color}
                id={name}
                type="radio"
                name={name}
                value={value}
                checked={filters.technology === value}
                onChange={onChange}
              />
              <LabelWrapper
                allChecked={filters.technology === "all"}
                color={color}
              >
                <RadioLabel htmlFor={name}>
                  <Icon className={iconClass} size="20px" />
                </RadioLabel>
              </LabelWrapper>
              <Desc>{name}</Desc>
            </InputContainer>
          );
        }
      )}
    </SelectWrapper>
  );
};

export { SelectTechnology };
