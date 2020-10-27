import React from "react";
import { Button } from "reactstrap";

import "../../css/small-groups.scss";

import Mike from "../../images/leadership_photos/Mike_Morris.jpeg";
import StaffInfo from "../staff-info";
import Logo from "../../images/logos/small_group_logo.svg";

import MobileMap from "./maps/mobile-map";
import DesktopMap from "./maps/desktop-map";
import { getMobileOperatingSystem } from "../../util/index";

import content from "../../content/small-groups-ministry-content";

export default function SmallGroups() {
  return (
    <div className="small-group">
      <div className="small-group-header">
        <div className="small-group-header-logo">
          <img alt="small groups logo" src={Logo} />
          <h1>{content.title}</h1>
        </div>
      </div>
      <div className="small-group-info-sign-up">
        <div className="small-group-info-sign-up-button-container">
          <p>{content.ministrySummary}</p>
        </div>
      </div>
      <div className="small-group-map-block">
        {getMobileOperatingSystem() === "iOS" ? <MobileMap /> : <DesktopMap />}
      </div>

      <div className="small-group-faq">
        {content.faq.map((object) => (
  
          <>
          <h4>{object.question}</h4>
          <p>{object.answer}</p>
</>
  )}
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
