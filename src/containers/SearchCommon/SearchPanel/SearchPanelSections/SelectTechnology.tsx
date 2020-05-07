import React, { ChangeEvent } from "react";
import useRouter from "use-react-router";

import {
  SelectWrapper,
  InputContainer,
  RadioInput,
  LabelWrapper,
  RadioLabel,
  Desc,
} from "./SelectTechnology.styles";

import { technologyItems } from "modules/offers/constants/technologyItems";
import { DEFAULT_PARAMS } from "modules/offers/constants/defaultParams";
import { Technology } from "modules/offers/types/Technology";

import { Icon } from "components/Icon";
import { useFilters } from "components/Filters";

const SelectTechnology = () => {
  const { history, location } = useRouter();
  const [techFilter, setTechFilter] = useFilters(
    DEFAULT_PARAMS,
    "technology",
    200
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (location.pathname !== "/") {
      history.push("/");
    }

    setTechFilter(e.currentTarget.value);
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
                checked={techFilter === value}
                onChange={onChange}
              />
              <LabelWrapper
                allChecked={techFilter === Technology.All}
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
