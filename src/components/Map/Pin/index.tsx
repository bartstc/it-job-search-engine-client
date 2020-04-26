import React from "react";
import { Marker } from "react-map-gl";

import {
  Mark,
  PinWrapper,
  Popup,
  PopupCompany,
  PopupPrice,
  PopupTitle,
} from "./Pin.styles";

import { Pin as IPin } from "modules/offers/types/Pin";
import { technologyItems } from "modules/offers/constants/technologyItems";

import { Icon } from "../../Icon";

type Props = {
  pin: IPin;
};

const Pin = ({
  pin: {
    pinId,
    latitude,
    longitude,
    technology,
    offerTitle,
    priceMin,
    priceMax,
    companyName,
  },
}: Props) => {
  return (
    <PinWrapper>
      <Marker latitude={latitude} longitude={longitude}>
        <Mark color={technologyItems[technology].color}>
          <Icon
            className={technologyItems[technology].iconClass}
            size="16px"
            id={pinId}
          />
        </Mark>
        <Popup>
          <PopupTitle>{offerTitle}</PopupTitle>
          <PopupPrice>
            {priceMin} - {priceMax} PLN
          </PopupPrice>
          <PopupCompany>{companyName}</PopupCompany>
        </Popup>
      </Marker>
    </PinWrapper>
  );
};

export { Pin };
