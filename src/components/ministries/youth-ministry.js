import React from "react";
import LogosLogo from "../../images/logos/logos-logo.png";
import "../../css/youth-ministry.scss";
import Leader from "../../components/leader";
import Content from "../../content/youth-ministry-content";
import ScriptureVerse from "../scripture-verse";
import Leesha from "../../images/youth-assets/leesha.jpg";
import Juvie from "../../images/youth-assets/juvie.jpg";
import Maria from "../../images/youth-assets/maria.jpg";
import Paul from "../../images/youth-assets/paul.jpg";
import Wesley from "../../images/youth-assets/paul.jpg";
import StaffCard from "../../components/staff-card";

export default function YouthMinistry() {
  const youthPage = Content;
  const faqList = youthPage.faq.map(question => (
    <li key={question.question}>
      <h4>{question.question}</h4>
      <p>{question.answer}</p>
    </li>
  ));
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
        <h4>{youthPage.meetingTime.title}</h4>
        <p>{youthPage.meetingTime.body}</p>
      </div>
      <div className="description-container">
        <div className="half-box">
          <ScriptureVerse
            verse={youthPage.scriptureVerse.verse}
            reference={youthPage.scriptureVerse.reference}
          />
        </div>
        <p>{youthPage.body}</p>
      </div>
      <div className="leaders-faq">
        <div className="faq">
          <h2>Logos FAQ</h2>
          <ul>{faqList}</ul>
        </div>
        <div className="youth-leaders-container">
          <h2>Youth Leaders</h2>
          <span id="pastor">
            <Leader name={youthPage.leaders[0]} photo={Wesley} />
          </span>
          <div className="youth-leaders">
            <Leader name={youthPage.leaders[1]} photo={Leesha} />
            <Leader name={youthPage.leaders[2]} photo={Juvie} />
            <Leader name={youthPage.leaders[3]} photo={Maria} />
            <Leader name={youthPage.leaders[4]} photo={Paul} />
          </div>
        </div>
      </div>
    </div>
  );
}
