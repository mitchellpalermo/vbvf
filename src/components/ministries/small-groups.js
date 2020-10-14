import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import "../../css/small-groups.scss";
import SmallGroup from "../smallgroup";
import Mike from "../../images/leadership_photos/Mike_Morris.jpeg";
import StaffInfo from "../staff-info";
import Logo from "../../images/logos/small_group_logo.svg";
import Praying from "../../images/small_groups/praying.jpg";
import MobileMap from "./maps/mobile-map";
import DesktopMap from "./maps/desktop-map";
import { getMobileOperatingSystem } from "../../util/index";

import content from "../../content/small-groups-ministry-content";

export default function SmallGroups() {
  const options = {
    method: "GET",
    url: `https://api.planningcenteronline.com/groups/v2/group_types/122121/groups`,
    headers: {
      Authorization: `Bearer ${process.env.PLANNING_CENTER_SECRET} `,
    },
  };

  useEffect(() => {
    console.log(axios(options));
  }, []);

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
          <Button
            outline
            size="lg"
            color="primary"
            href="https://vbvf.churchcenter.com/people/forms/29086?open-in-church-center-modal=true"
          >
            Get Info
          </Button>
        </div>
      </div>
      <div className="small-group-map-block">
        {getMobileOperatingSystem() === "iOS" ? <MobileMap /> : <DesktopMap />}
      </div>

      <div>
        <SmallGroup />
        <SmallGroup />
        <SmallGroup />
        <SmallGroup />
        <SmallGroup />
        <SmallGroup />
        <SmallGroup />
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
