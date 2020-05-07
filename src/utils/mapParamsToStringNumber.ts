import { mapValues } from "lodash";
import { ParsedQuery } from "query-string";

import { isValidDate } from "./isValidDate";

const mapParamsStringToNumber = (params: ParsedQuery) => {
  return mapValues(params, mapStringToNumber);
};

const mapStringToNumber = (value: string) => {
  const parsedValue = Number(value);

  if (isValidDate(value)) {
    return value;
  }
  if (isNaN(parsedValue)) {
    return value;
  }
  return parsedValue;
};

export { mapParamsStringToNumber };
