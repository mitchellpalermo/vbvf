import React from "react";
import StaffCard from "../staff-card";
import Sofi from "../../images/leadership_photos/sofi.jpg";
import JourneyLogo from "../../images/logos/journey-logo.png";
import Checkin from "../..//images/childrens-ministry/checkin.jpg";
import "../../css/childrens-ministry.scss";
import { Button, Card } from "reactstrap";
import ScriptureVerse from "../scripture-verse";
import Coloring from "../../images/childrens-ministry/coloring.jpg";
import JonTeaching from "../../images/childrens-ministry/jon_teaching.jpg";
import LittleGirlLooking from "../../images/childrens-ministry/little_girl_looking.jpg";
import JayTeaching from "../../images/childrens-ministry/jay-teaching-kids.jpg";

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
        <p>
          We believe it is important that our littlest ones be trained in the
          truths of the Bible, so they can grow up to love the Word. In our VBVF
          Kids ministry, children from infancy through 5th grade will be able to
          learn Bible lessons in a safe environment, from loving teachers
          committed to ministering to children.
        </p>

        <h3 className="scripture-verse">
          “[…] and that from childhood you have known the sacred writings which
          are able to give you the wisdom that leads to salvation through faith
          which is in Christ Jesus[…]”
          <span className="scripture-reference">2 Timothy 3:14-17</span>
        </h3>
      </div>
      <div className="check-in-section">
        <img alt="family registering child" src={Checkin} />
        <div className="info-button-container">
          <p>
            Our Children’s ministry is committed to the safety of our children.
            We use a secure check-in/check-out system, so make sure to arrive a
            few minutes earlier so that we can make sure your child is
            registered.
          </p>
          <Button outline size="lg" color="primary">
            Get Info
          </Button>
        </div>
      </div>
      <div className="staff-info-container">
        <div className="staff-card">
          <StaffCard
            image={Sofi}
            title="Sofi Smith"
            subtitle="Children's Ministry Director"
            email="sofi.smith@vbvf.org"
          />
        </div>
        <div className="staff-info">
          <h2>Meet Sofi</h2>
          <p>
            Prior to Sofi Smith’s position as the VBVF Children’s Ministry
            Director, she served on staff at Verse by Verse Ministry
            International as Executive Assistant to Pastor Stephen Armstrong.
            She has dedicated her life to the scriptures, ministry at home,
            locally and worldwide, bringing the Good News to the lost, anywhere
            she can find them.
          </p>
        </div>
      </div>
    </div>
  );
}
