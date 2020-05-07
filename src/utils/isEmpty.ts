import { isEmpty as lodashIsEmpty } from "lodash";

export const isEmpty = (value: unknown) => {
  if (typeof value === "number") {
    return false;
  }

  return lodashIsEmpty(value);
};
