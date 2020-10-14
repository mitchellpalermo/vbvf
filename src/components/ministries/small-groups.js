import React, { useEffect, useState } from "react";

import "../../css/small-groups.scss";
import Matthew from "../../images/leadership_photos/Matthew_McWaters.jpeg";
import StaffInfo from "../staff-info";
import Logo from "../../images/logos/small_group_logo.svg";

import MobileMap from "./maps/mobile-map";
import DesktopMap from "./maps/desktop-map";
import { getMobileOperatingSystem } from "../../util/index";

import content from "../../content/small-groups-ministry-content";

export default function SmallGroups() {
  const [groups, setGroups] = useState();
  const options = {
    method: "get",
    url: `https://api.planningcenteronline.com/groups/v2/group_types/122121/groups`,
    auth: {
      username: process.env.PLANNING_CENTER_APPID,
      password: process.env.PLANNING_CENTER_SECRET,
    },
  };

  useEffect(() => {
    axios(options)
      .then((response) => {
        setGroups(response);
      })
      .catch((err) =>
        console.log("Small Groups request failed with this error: " + err)
      );
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
        image={Matthew}
        bio={content.leader.bio}
      />
    </div>
  );
}
