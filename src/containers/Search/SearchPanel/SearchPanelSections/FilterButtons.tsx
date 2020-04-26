import React from "react";
import { useTranslation } from "react-i18next";

import { ButtonsWrapper } from "./FilterButtons.styles";

import { Button } from "components/Buttons/Button";
import { Icon } from "components/Icon";

const FilterButtons = () => {
  const { t } = useTranslation();

  return (
    <ButtonsWrapper>
      <Button onClick={() => {}} options={["accent"]}>
        {t("Search.filterButtons.location")}{" "}
        <Icon className="fas fa-map-marker-alt" size="12px" />
      </Button>
      <Button onClick={() => {}} options={["accent"]}>
        {t("Search.filterButtons.salary")}
        <Icon className="fas fa-coins" size="12px" />
      </Button>
      <Button onClick={() => {}} options={["accent"]}>
        {t("Search.filterButtons.experience")}
        <Icon className="fas fa-copy" size="12px" />
      </Button>
      <Button onClick={() => {}} options={["accent", "mq-laptop-ignore"]}>
        {t("Search.filterButtons.technology")}
        <Icon className="fas fa-code" size="12px" />
      </Button>
    </ButtonsWrapper>
  );
};

export { FilterButtons };
