import React from "react";
import JourneyLogo from "../images/logos/journey-logo.png";
import LogosLogo from "../images/logos/logos-logo-white.png";
import Taylor from "../images/leadership_photos/taylor.jpg";
// import { SmallGroupsLogo } from "../../src/images/small-groups-logo.png";
// import { ServeLogo } from "../../src/images/serve-logo.png";
import "../css/ministries.css";

const Ministries = () => {
  return (
    <div className="ministries-grid">
      <div className="ministry-block">
        <img
          className="ministry-logo"
          src={JourneyLogo}
          alt="Logos Student Ministry Logo"
        />
        Logos Youth Ministry
      </div>
      <div className="ministry-block">
        <img
          className="ministry-logo"
          src={JourneyLogo}
          alt="Logos Student Ministry Logo"
        />
        Small Groups
      </div>
      <div className="ministry-block">
        <img src={LogosLogo} alt="Logos Student Ministry Logo" />
        Serve
      </div>
    </div>
  );
};

export default Ministries;
