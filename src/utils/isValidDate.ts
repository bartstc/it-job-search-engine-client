import dayjs from "dayjs";

export const isValidDate = (value: string) => {
  const [day, month, year] = value.toString().split("-");
  const date = dayjs(new Date(parseInt(year), parseInt(month), parseInt(day)));
  return dayjs(date).isValid();
};
