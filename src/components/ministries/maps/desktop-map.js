import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

export default function DesktopMap() {
  return (
    <Map
      twoFingerDrag={true}
      metaWheelZoom={true}
      center={[29.523124, -98.515056]}
      zoom={10}
      height={400}
    >
      <Marker //castroville group
        anchor={[29.35472, -98.8853]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
      <Marker //stone oak group
        anchor={[29.63793, -98.48875]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
      <Marker //live oak group
        anchor={[29.55235, -98.36257]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
      <Marker //castle hills group
        anchor={[29.53276, -98.49679]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
      <Marker //garden ridge group
        anchor={[29.644846, -98.275401]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
      <Marker //terrel hills group
        anchor={[29.491689, -98.456639]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
      <Marker //cross mountain group
        anchor={[29.670626, -98.661187]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
      <Marker //shavano park group
        anchor={[29.567894, -98.53904]}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
    </Map>
  );
}
