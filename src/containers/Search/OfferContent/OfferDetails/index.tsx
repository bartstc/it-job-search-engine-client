import React from "react";
import useRouter from "use-react-router";
import moment from "moment";
import { useTranslation } from "react-i18next";

import { useOffer } from "modules/offers/hooks";

import {
  OfferDetailsWrapper,
  Header,
  OfferTitle,
  Middle,
  OfferDate,
  OfferMeta,
  OfferPrice,
  Hr,
  SectionTitle,
  OfferTag,
  OfferTags,
  Content,
  GoBackLink,
} from "./OfferDetails.styles";

const OfferDetails = () => {
  const {
    match: { params },
  } = useRouter<{ offerId: string }>();
  const { t } = useTranslation();

  const { data } = useOffer(params.offerId);

  return (
    <OfferDetailsWrapper technology={data.technology}>
      <GoBackLink to="/">
        <i className="fas fa-chevron-left" />
      </GoBackLink>
      <Header>
        <OfferTitle>{data.title}</OfferTitle>
        <OfferPrice>
          {data.priceMin} - {data.priceMax} PLN
        </OfferPrice>
      </Header>
      <Middle>
        <OfferMeta>
          {data.companyName}, {data.cityName}, {data.streetName}
        </OfferMeta>
        <OfferDate>{moment(data.createdAt).format("LLL")}</OfferDate>
      </Middle>
      <OfferDate>
        {t("Search.OfferDetails.employmentTypeLabel")}
        {": "}
        <b>{t(`modules.employmentType.${data.employmentType}`)}</b>
      </OfferDate>
      <OfferDate>
        {t("Search.OfferDetails.levelLabel")}
        {": "}
        <b>{t(`modules.level.${data.level}`)}</b>
      </OfferDate>
      <Hr />
      {data.mustHave.length > 0 && (
        <div>
          <SectionTitle>{t("Search.OfferDetails.mustHaveTitle")}</SectionTitle>
          <OfferTags>
            {data.mustHave.map((tagName) => (
              <OfferTag key={tagName}>{tagName}</OfferTag>
            ))}
          </OfferTags>
        </div>
      )}
      {data.niceToHave.length > 0 && (
        <div>
          <SectionTitle>
            {t("Search.OfferDetails.niceToHaveTitle")}
          </SectionTitle>
          <OfferTags>
            {data.niceToHave.map((tagName) => (
              <OfferTag key={tagName}>{tagName}</OfferTag>
            ))}
          </OfferTags>
        </div>
      )}
      <div>
        <SectionTitle>{t("Search.OfferDetails.description")}</SectionTitle>
        <Content>{data.description}</Content>
      </div>
    </OfferDetailsWrapper>
  );
};

export { OfferDetails };
