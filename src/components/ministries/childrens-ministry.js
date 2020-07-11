import React from "react";

import Sofi from "../../images/leadership_photos/Sofi_Smith.jpeg";
import JourneyLogo from "../../images/logos/journey-logo.png";
import Checkin from "../..//images/childrens-ministry/checkin.jpg";
import "../../css/childrens-ministry.scss";
import ScriptureVerse from "../scripture-verse";
import Coloring from "../../images/childrens-ministry/coloring.jpg";
import JonTeaching from "../../images/childrens-ministry/jon_teaching.jpg";
import LittleGirlLooking from "../../images/childrens-ministry/little_girl_looking.jpg";
import JayTeaching from "../../images/childrens-ministry/jay-teaching-kids.jpg";
import Content from "../../content/childrens-ministry-content";
import StaffInfo from "../staff-info";
import { Link } from "react-router-dom";

export default function ChildrensMinistry() {
  return (
    <div className="childrens-ministry">
      <div className="childrens-ministry-header">
        <img
          className="childrens-ministry-header-logo"
          alt="Journey Kids Logo"
          src={JourneyLogo}
        />

        <div className="childrens-ministry-header-photo-collage">
          <img alt="children-coloring" src={Coloring}></img>
          <img alt="children-looking" src={LittleGirlLooking}></img>
          <img alt="children-learning" src={JonTeaching}></img>
          <img alt="children-listening" src={JayTeaching}></img>
        </div>
      </div>
      <div className="childrens-ministry-material-sign-up">
        <p>We're creating free children's church materials every week.</p>
        <a className="button" href="/childrens-content">
          View Resources
        </a>
      </div>
      <div className="childrens-ministry-mission">
        <p>{Content.firstRow.body}</p>
        <ScriptureVerse
          verse={Content.scriptureVerse.verse}
          reference={Content.scriptureVerse.reference}
        />
      </div>

      <div className="childrens-ministry-check-in">
        <img alt="family registering child" src={Checkin} />
        <p>{Content.secondRow.body}</p>
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
