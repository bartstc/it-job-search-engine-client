import React, { ChangeEvent } from "react";

import { SelectWrapper, Label, Select, Option } from "./SelectList.styles";

type KeyType = "value" | "name";

type Props = {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Record<KeyType, string>[];
  label: string;
  errorMsg?: string;
};

const SelectList = ({ options, id, label, ...rest }: Props) => {
  const selectOptions = options.map(({ value, name }) => (
    <Option key={value} value={value}>
      {name}
    </Option>
  ));

  return (
    <SelectWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} {...rest}>
        {selectOptions}
      </Select>
    </SelectWrapper>
  );
};

export { SelectList };
