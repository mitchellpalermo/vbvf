import React from "react";
import { Button } from "reactstrap";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import "../../css/small-groups.scss";
import Mike from "../../images/leadership_photos/Mike_Morris.jpeg";
import StaffInfo from "../staff-info";
import Logo from "../../images/logos/small_group_logo.svg";
import Praying from "../../images/small_groups/praying.jpg";

import content from "../../content/small-groups-ministry-content";

export default function SmallGroups() {
  return (
    <div className="small-group-container">
      <div className="header">
        <div className="header-logo-container">
          <img alt="small groups logo" src={Logo} />
          <h1>{content.title}</h1>
        </div>
      </div>

      <div className="info-sign-up">
        <div className="info-sign-up-button-container">
          <p>{content.ministrySummary}</p>
          <Button
            outline
            size="lg"
            color="primary"
            href="https://vbvf.churchcenter.com/people/forms/29086?open-in-church-center-modal=true"
          >
            Get Info
          </Button>
        </div>
        <img alt="girls praying together" src={Praying} />
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
        image={Mike}
        bio={content.leader.bio}
      />
    </div>
  );
}
