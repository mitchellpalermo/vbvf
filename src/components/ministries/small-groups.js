import React from "react";
import { Button } from "reactstrap";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import "../../css/small-groups.scss";
import Shane from "../../images/leadership_photos/shane.jpg";
import StaffInfo from "../staff-info";

import content from "../../content/small-groups-ministry-content";

export default function SmallGroups() {
  return (
    <div className="small-group-container">
      <div className="small-group-header">
        <h1>{content.title}</h1>
        <img />
      </div>
      <div className="info-sign-up">
        <p>{content.ministrySummary}</p>
        <div className="info-button-container">
          <Button outline size="lg" color="primary">
            Get Info
          </Button>
        </div>
      </div>
      <div className="map-block">
        <Map
          twoFingerDrag={true}
          metaWheelZoom={true}
          center={[29.56544, -98.54064]}
          zoom={11}
          width={window.width}
          height={400}
        >
          <Marker //palermo group
            anchor={[29.56544, -98.54064]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />
          <Marker //dyke
            anchor={[29.57602, -98.53933]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />
          <Marker //stamper group
            anchor={[29.56975, -98.49704]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />
          <Marker //wallis group
            anchor={[29.48495, -98.46585]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />
          <Marker //didier group
            anchor={[29.67336, -98.6815]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />
          <Marker //butler group
            anchor={[29.63802, -98.49252]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />
          <Marker //starnes group
            anchor={[29.6189, -98.49524]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />
        </Map>
      </div>

      <StaffInfo
        name={content.leader.name}
        role={content.leader.role}
        email={content.leader.email}
        image={Shane}
        bio={content.leader.bio}
      />
    </div>
  );
}
