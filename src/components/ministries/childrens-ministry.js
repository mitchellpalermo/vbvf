import React from "react";

import Sofi from "../../images/leadership_photos/Sofi_Smith.jpeg";
import JourneyLogo from "../../images/logos/journey-logo.png";
import SofiJonBTS from "../..//images/childrens-ministry/sofi_jon_bts.jpg";
import "../../css/childrens/childrens-ministry.scss";
import ScriptureVerse from "../scripture-verse";
import Button from "../button";
import Content from "../../content/childrens-ministry-content";
import StaffInfo from "../staff-info";
import Exclamation from "../../images/exclamation-solid.svg";
import { getMobileOperatingSystem } from "../../util/index";

export default function ChildrensMinistry() {
  const churchCenterLink = () => {
    if (getMobileOperatingSystem() === "iOS") {
      return `itms-apps://apps.apple.com/us/app/church-center-app/id1357742931`;
    } else if (getMobileOperatingSystem() === "Android") {
      return `https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter`;
    } else {
      return "https://vbvf.churchcenter.com/check-ins";
    }
  };
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
      <div className="childrens-ministry-safety">
        <img src={Exclamation} alt="" />
        <p>
          Due to COVID precautions, space in our children's area is{" "}
          <strong>limited</strong>. For now we're asking that all children are
          checked in before service.
        </p>{" "}
      </div>
      <p className="childrens-ministry-check-in">
        Please check your child in using the{" "}
        <a href={churchCenterLink()}>Church Center App</a>. Registration opens 1
        hour before service begins. If your child has never been to Journey Kids
        before, please{" "}
        <a href="https://vbvf.churchcenter.com/registrations/events/588010">
          pre-register them here
        </a>
        .
      </p>

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
