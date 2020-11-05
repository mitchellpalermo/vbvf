import React from "react";

import "../../css/small-groups.scss";
import Matthew from "../../images/leadership_photos/Matthew_McWaters.jpeg";
import StaffInfo from "../staff-info";
import Logo from "../../images/logos/small_group_logo.svg";

import content from "../../content/small-groups-ministry-content";
import Button from "../button";
import Praying from "../../images/small_groups/praying.jpg";

export default function SmallGroups() {
  return (
    <div className="small-group">
      <div className="small-group-header">
        <img alt="" src={Logo} />
        <h1>
          VBVF
          <br /> Small
          <br /> Groups
        </h1>
      </div>
      <div className="small-group-info">
        <p>{content.ministrySummary}</p>
        <img alt="" src={Praying} />
      </div>
      <div className="small-group-button-container">
        <Button
          title="Find a Small Group"
          size="large"
          link="https://vbvf.churchcenter.com/groups/small-groups"
        />
        <Button
          title="Become a leader"
          size="large"
          link="https://vbvf.churchcenter.com/people/forms/185037"
        />
      </div>

      <div className="small-group-faq">
        <>
          {content.faq.map((object) => {
            return (
              <div>
                <h4>{object.question}</h4>
                <p>{object.answer}</p>
              </div>
            );
          })}
        </>
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
