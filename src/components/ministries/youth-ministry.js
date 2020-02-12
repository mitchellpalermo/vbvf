import React from "react";
import LogosLogo from "../../images/logos/logos-logo-white.png";
import BibleProject from "../../images/logos/bible-project.png";
import "../../css/youth-ministry.scss";
import FacebookIcon from "../../images/logos/facebook_logo.png";
import InstagramIcon from "../../images/logos/instagram_logo.png";
import YouthImage from "../../images/youth_ministry_header.jpg";
import { Button } from "reactstrap";
import Content from "../../content/content.json";

export default function YouthMinistry() {
  const youthPage = Content.youthPage;

  return (
    <div className="youth-page-container">
      <div className="youth-header">
        <img
          className="ministry-logo"
          src={LogosLogo}
          alt="Logos Student Ministry Logo"
        />
      </div>

      <div className="youth-description-container">
        <div className="words-section">
          <h2>{youthPage.firstRow.title}</h2>
          <p>{youthPage.firstRow.body}</p>
        </div>
        <img src={YouthImage} alt="youth playing gaga ball" />
      </div>
      <div className="bible-project-container">
        <img src={BibleProject} />
        <div className="words-section">
          <h2>{youthPage.secondRow.title}</h2>
          <p>{youthPage.secondRow.body}</p>
        </div>
      </div>
      <div className="time-section">
        <h3>{youthPage.thirdRow.title}</h3>
        <p>{youthPage.thirdRow.body}</p>
      </div>
      <div className="social-media-section">
        <h3>Logos Ministry Social Media</h3>
        <div className="icon-section">
          <a href="">
            <img src={FacebookIcon} />
          </a>
          <a href="">
            <img src={InstagramIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}
