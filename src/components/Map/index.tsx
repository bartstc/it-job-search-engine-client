import React, { useState } from "react";
import ReactMapGL, { NavigationControl, PointerEvent } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { MapWrapper, Navigation } from "./Map.styles";

import { useThemeConsumer } from "styles";

import { Pin as IPin } from "modules/offers/types/Pin";

import { Pin } from "./Pin";

const initialViewport = {
  latitude: 52.2159,
  longitude: 19.1344,
  zoom: 5.5,
};

type Props = {
  pins: IPin[];
  initViewport?: typeof initialViewport;
  handleCoordsChange?: (longitude: number, latitude: number) => void;
};

const Map = ({ initViewport, handleCoordsChange, pins }: Props) => {
  const [viewport, setViewport] = useState(initViewport || initialViewport);
  const {
    theme: { name },
  } = useThemeConsumer();

  const onMapClick = ({ lngLat }: PointerEvent) => {
    // if (!leftButton) return;

    const [longitude, latitude] = lngLat;

    if (handleCoordsChange) {
      handleCoordsChange(longitude, latitude);
    }
  };

  return (
    <MapWrapper data-testid="react-map-gl">
      <ReactMapGL
        width="100%"
        height="100%"
        mapStyle={`mapbox://styles/mapbox/${name}-v9`}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
        onViewportChange={(newViewport) => setViewport(newViewport)}
        onClick={handleCoordsChange && onMapClick}
        {...viewport}
      >
        <Navigation>
          <NavigationControl
            onViewportChange={(newViewport) => setViewport(newViewport)}
          />
        </Navigation>
        {pins.map((pin, i) => (
          <Pin key={i} pin={pin} />
        ))}
      </ReactMapGL>
    </MapWrapper>
  );
};

export { Map };
