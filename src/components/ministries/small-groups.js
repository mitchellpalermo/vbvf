import React, { useEffect, useState } from "react";

import "../../css/small-groups.scss";
import Matthew from "../../images/leadership_photos/Matthew_McWaters.jpeg";
import StaffInfo from "../staff-info";
import Logo from "../../images/logos/small_group_logo.svg";
import { Spinner } from "reactstrap";
import MobileMap from "./maps/mobile-map";
import DesktopMap from "./maps/desktop-map";
import { getMobileOperatingSystem } from "../../util/index";

require("dotenv").config();

export default function SmallGroups() {
  const [groups, setGroups] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      url:
        "https://api.planningcenteronline.com/groups/v2/group_types/122121/groups",
      headers: {
        Authorization: `Basic ${process.env.REACT_APP_PLANNING_CENTER_ENCODED}`,
      },
    };
    axios(options).then((response) => {
      setGroups(response.data.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="small-group">
      <div className="small-group-header">
        <div className="small-group-header-logo">
          <img alt="small groups logo" src={Logo} />
          <h1>Small Groups</h1>
        </div>
        <h3>
          Live.
          <br /> Together.
        </h3>
      </div>
      <div className="small-group-info-sign-up">
        <p>{content.ministrySummary}</p>
        <div className="small-group-info-sign-up-button-container"></div>
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

      <div className="small-groups-list-container">
        {isLoading ? (
          <>
            <p>Loading Services</p>
            <Spinner color="dark" />
          </>
        ) : (
          <>
            {groups.map((group) => (
              <SmallGroupRow
                image={group.attributes.header_image.thumbnail}
                name={group.attributes.name}
                meetingTime={group.attributes.schedule}
              />
            ))}
          </>
        )}
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
