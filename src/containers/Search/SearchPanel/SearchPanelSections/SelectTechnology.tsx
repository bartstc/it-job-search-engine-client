import React, { useState, ChangeEvent } from "react";

import {
  SelectWrapper,
  InputContainer,
  RadioInput,
  LabelWrapper,
  RadioLabel,
  Desc
} from "./SelectTechnology.styles";

import { technologyItems } from "modules/offers/constants/technologyItems";

import { Icon } from "components/Icon";

const SelectTechnology = () => {
  const [technology, setTechnology] = useState("all");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTechnology(e.currentTarget.value);
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
                checked={technology === value}
                onChange={onChange}
              />
              <LabelWrapper allChecked={technology === "all"} color={color}>
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
