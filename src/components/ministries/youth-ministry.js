import React from "react";
import LogosLogo from "../../images/logos/logos-logo-white.png";

export default function YouthMinistry() {
  return (
    <div className="ministry-block">
      <div className="ministry-header">
        <img
          className="ministry-logo"
          src={LogosLogo}
          alt="Logos Student Ministry Logo"
        />
        <h2>Logos Student Ministry</h2>
      </div>
      <div className="ministry-bottom">
        <div className="ministry-sidebar">
          <div className="meeting-details">
            <h2>Meeting Time</h2>
            Tuesdays @ 6:30pm <br />
            Flex Room
          </div>
          <div className="social-media-section">
            <h3>Instagram</h3>
            @logos_student_ministry
            <h3>Facebook</h3>
            Logos Student Ministry
          </div>
        </div>
        <p className="description-section">
          VBVF believes that children are a blessing and as such we take special
          care to disciple them well.
        </p>
      </div>
    </div>
  );
}
