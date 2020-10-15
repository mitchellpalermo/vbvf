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

  useEffect(() => {
    axios
      .get(
        "https://api.planningcenteronline.com/groups/v2/group_types/122121/groups",
        {
          Authorization: `Basic ${process.env.PLANNING_CENTER_ENCODED}`,
        }
      )
      .then((response) => {
        console.log(response);
        setGroups(response);
        console.log(groups);
      });

    // var createCORSRequest = function (method, url) {
    //   var xhr = new XMLHttpRequest();
    //   if ("withCredentials" in xhr) {
    //     // Most browsers.
    //     xhr.open(method, url, true);
    //   } else {
    //     // CORS not supported.
    //     xhr = null;
    //   }
    //   return xhr;
    // };

    // var url =
    //   "https://api.planningcenteronline.com/groups/v2/group_types/122121/groups";
    // var method = "GET";
    // var xhr = createCORSRequest(method, url);

    // xhr.onload = function () {
    //   // Success code goes here.
    // };

    // xhr.onerror = function () {
    //   // Error code goes here.
    // };

    // xhr.setRequestHeader(
    //   "Authorization",
    //   "Basic YTNhMWM5NWE0ZWFiNjIwY2VkYjI5ZmQzMGJkNTAzM2EyZWU3ZDc4MjNlMTRhNmJkMGI1Mzk0MGRkNzQ3MzExZToyOGViNTc3NjU1M2Q3MzU5MWYzZThjNGNkZmNlOTIxNWViNDdlNTA2ZjQ0ZjM0NmMwMDg2OTMwMDE3NzlhYjZm"
    // );
    // xhr.send();
  }, [groups]);

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
