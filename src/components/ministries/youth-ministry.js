import React from "react";
import LogosLogo from "../../images/logos/logos-logo.png";
import "../../css/youth-ministry.scss";
import YouthImage from "../../images/youth_ministry_header.jpg";
import Content from "../../content/content.json";
import ScriptureVerse from "../scripture-verse";

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
      <div className="instablocks">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="time-section">
        <h4>{youthPage.thirdRow.title}</h4>
        <p>{youthPage.thirdRow.body}</p>
      </div>
      <div className="description-container">
        <div className="half-box">
          <ScriptureVerse
            verse={youthPage.scriptureVerse.verse}
            reference={youthPage.scriptureVerse.reference}
          />
        </div>
        <p>{youthPage.firstRow.body}</p>
      </div>
      <div className="leader-photos">
        <img></img>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
      </div>
    </div>
  );
}
