import React from "react";
import { Button, Card } from "reactstrap";
import StaffCard from "../../staff-card";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import "../../../css/small-groups.scss";
import Shane from "../../../images/leadership_photos/shane.jpg";

export default function SmallGroups() {
  return (
    <div className="small-group-container">
      <div className="small-group-header">
        <h1>Live. Together.</h1>
      </div>
      <div className="info-sign-up">
        <p>
          We feel that small groups are an important avenue for spiritual
          growth. Our small groups are made up of people who call VBVF their
          home church. There are 7 small groups that meet around the city of San
          Antonio. Each of them is unique, but all of them seek to promote
          spiritual growth in our church body. We do that through discussion of
          the sermon concepts, prayer and fellowship.
        </p>
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
      <div className="info-contact">
        <div className="staff-card">
          <StaffCard
            title="Shane Carter"
            subtitle="Small Group Minstry Director"
            email="shane.carter@vbvf.org"
            image={Shane}
          />
        </div>
        <div className="image-info">
          <div id="image-placeholder"></div>
          <p>
            Community is a gift from God. Small groups exist so that we can
            encourage one another, learn from one another, and seek spiritual
            growth.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
