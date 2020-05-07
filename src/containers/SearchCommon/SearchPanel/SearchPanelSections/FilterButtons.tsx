import React from "react";
import { useTranslation } from "react-i18next";

import { ButtonsWrapper } from "./FilterButtons.styles";

import { Button } from "components/Buttons/Button";

const FilterButtons = () => {
  const { t } = useTranslation();

  return (
    <ButtonsWrapper>
      <Button onClick={() => {}} options={["accent-bordered", "rectangular"]}>
        {t("Search.filterButtons.location")}{" "}
      </Button>
      <Button onClick={() => {}} options={["accent-bordered", "rectangular"]}>
        {t("Search.filterButtons.salary")}
      </Button>
      <Button
        onClick={() => {}}
        options={["accent-bordered", "rectangular", "mq-laptop-ignore"]}
      >
        {t("Search.filterButtons.technology")}
      </Button>
      <Button onClick={() => {}} options={["accent-bordered", "rectangular"]}>
        {t("Search.filterButtons.more")}
      </Button>
    </ButtonsWrapper>
  );
};

export { FilterButtons };
