import React from "react";

import Sofi from "../../images/leadership_photos/Sofi_Smith.jpeg";
import JourneyLogo from "../../images/logos/journey-logo.png";
import SofiJonBTS from "../..//images/childrens-ministry/sofi_jon_bts.jpg";
import "../../css/childrens/childrens-ministry.scss";
import ScriptureVerse from "../scripture-verse";
import Button from "../button";
import Content from "../../content/childrens-ministry-content";
import StaffInfo from "../staff-info";

export default function ChildrensMinistry() {
  return (
    <div className="childrens-ministry">
      <div className="childrens-ministry-header">
        <img
          className="childrens-ministry-header-logo"
          alt="Journey Kids Logo"
          src={JourneyLogo}
        />
      </div>

      <div className="childrens-ministry-mission">
        <p>{Content.firstRow.body}</p>
        <ScriptureVerse
          verse={Content.scriptureVerse.verse}
          reference={Content.scriptureVerse.reference}
        />
      </div>

      <div className="childrens-ministry-materials">
        <div className="button-container">
          <h2>
            Biblically grounded
            <br /> childrens' material
          </h2>
          <p>New videos and activities every week</p>
          <Button
            size="medium"
            title="View resources"
            buttonFunc={() => {
              window.open("/childrens-content");
            }}
          />
        </div>
        <img alt="ministry leaders filming content" src={SofiJonBTS} />
      </div>
      <div className="childrens-ministry-sign-up">
        <h4>
          Join our email list to receive notifications about new children's
          learning materials, events and other announcements.
        </h4>
        <Button
          size="large"
          title="Sign me up"
          buttonFunc={() => {
            window.location.href =
              "https://vbvf.churchcenter.com/people/forms/118844?open-in-church-center-modal=true";
          }}
        />
      </div>
      <StaffInfo
        name={Content.leader.name}
        role={Content.leader.role}
        email={Content.leader.email}
        bio={Content.leader.bio}
        image={Sofi}
      />
    </div>
  );
}
