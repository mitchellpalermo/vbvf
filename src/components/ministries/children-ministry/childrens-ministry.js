import React from "react";
import ChildrensMinistryPhotoCarousel from "./childrens-photo-carousel";
import StaffCard from "../../staff-card";
import Sofi from "../../../images/leadership_photos/sofi.jpg";
import JourneyLogo from "../../../images/logos/journey-logo.png";
import Checkin from "../../../images/childrens-ministry/checkin.jpg";
import "../../../css/childrens-ministry.scss";

export default function ChildrensMinistry() {
  return (
    <div className="childrens-ministry-page-container">
      <div className="childrens-header">
        <img alt="Journey Kids Logo" src={JourneyLogo} />
        <h1>Children's Ministry</h1>
      </div>
      <ChildrensMinistryPhotoCarousel className="childrens-carousel" />
      <p className="scripture-verse">
        “[…] and that from childhood you have known the sacred writings which
        are able to give you the wisdom that leads to salvation through faith
        which is in Christ Jesus[…]”
        <span className="scripture-reference">2 Timothy 3:14-17</span>
      </p>
      <p>
        We believe it is important that our littlest ones be trained in the
        truths of the Bible, so they can grow up to love the Word. In our VBVF
        Kids ministry, children from infancy through 5th grade will be able to
        learn Bible lessons in a safe environment, from loving teachers
        committed to ministering to children.
      </p>
      <div className="check-in-section">
        <img alt="family registering child" src={Checkin} />
        <p>
          Our Children’s ministry is committed to the safety of our children. We
          use a secure check-in/check-out system, so make sure to arrive a few
          minutes earlier so that we can make sure your child is registered.
        </p>
      </div>

      <StaffCard
        image={Sofi}
        title="Sofi Smith"
        subtitle="Children's Ministry Director"
        email="sofi.smith@vbvf.org"
      />
    </div>
  );
}
