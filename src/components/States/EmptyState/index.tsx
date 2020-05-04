import React from "react";
import { useTranslation } from "react-i18next";

import { StateWrapper } from "../styles";
import { H3, Paragraph } from "styles";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
};

const EmptyState = ({
  id,
  title = "States.EmptyState.title",
  subtitle = "States.EmptyState.subtitle",
}: Props) => {
  const { t } = useTranslation();

  return (
    <StateWrapper id={id} data-testid={id}>
      <i className="fas fa-search" />
      <H3>{t(title)}</H3>
      <Paragraph>{t(subtitle)}</Paragraph>
    </StateWrapper>
  );
};

export { EmptyState };
