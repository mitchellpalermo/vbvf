import React from "react";

import Sofi from "../../images/leadership_photos/Sofi_Smith.jpeg";
import JourneyLogo from "../../images/logos/journey-logo.png";
import Checkin from "../..//images/childrens-ministry/checkin.jpg";
import "../../css/childrens-ministry.scss";
import { Button } from "reactstrap";
import ScriptureVerse from "../scripture-verse";
import Coloring from "../../images/childrens-ministry/coloring.jpg";
import JonTeaching from "../../images/childrens-ministry/jon_teaching.jpg";
import LittleGirlLooking from "../../images/childrens-ministry/little_girl_looking.jpg";
import JayTeaching from "../../images/childrens-ministry/jay-teaching-kids.jpg";
import Content from "../../content/childrens-ministry-content";
import StaffInfo from "../staff-info";

export default function ChildrensMinistry() {
  return (
    <div className="childrens-ministry-page-container">
      <div className="childrens-header">
        <img id="childrens-logo" alt="Journey Kids Logo" src={JourneyLogo} />

        <div className="photo-collage">
          <img alt="children-coloring" src={Coloring}></img>
          <img alt="children-looking" src={LittleGirlLooking}></img>
          <img alt="children-learning" src={JonTeaching}></img>
          <img alt="children-listening" src={JayTeaching}></img>
        </div>
      </div>
      <div className="mission-container">
        <p>{Content.firstRow.body}</p>
        <ScriptureVerse
          verse={Content.scriptureVerse.verse}
          reference={Content.scriptureVerse.reference}
        />
      </div>
      <div className="check-in-section">
        <img alt="family registering child" src={Checkin} />
        <div className="info-button-container">
          <p>{Content.secondRow.body}</p>
          <Button outline size="lg" color="primary">
            Get Info
          </Button>
        </div>
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
