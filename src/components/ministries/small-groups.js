import React from "react";

import "../../css/small-groups.scss";

import Mike from "../../images/leadership_photos/Mike_Morris.jpeg";
import StaffInfo from "../staff-info";
import Logo from "../../images/logos/small_group_logo.svg";

import content from "../../content/small-groups-ministry-content";

export default function SmallGroups() {
  return (
    <div className="small-group">
      <div className="small-group-header">
        <img alt="small groups logo" src={Logo} />
        <h1>
          Small
          <br /> Groups
        </h1>
      </div>
      <div className="small-group-info-sign-up">
        <p>{content.ministrySummary}</p>
      </div>

      <div className="small-group-faq">
        {content.faq.map((object) => {
          return (
            <div>
              <h4>{object.question}</h4>
              <p>{object.answer}</p>
            </div>
          );
        })}
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
