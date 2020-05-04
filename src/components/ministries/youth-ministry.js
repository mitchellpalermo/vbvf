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
import Smile from "../../images/youth-assets/smile.jpg";
import HungryHippos from "../../images/youth-assets/hungry_hippos.jpg";
import TableHockey from "../../images/youth-assets/table_hockey.jpg";
import StaffCard from "../staff-card";

export default function YouthMinistry() {
  const youthPage = Content;
  const faqList = youthPage.faq.map((question) => (
    <li key={question.question}>
      <h4>{question.question}</h4>
      <p>{question.answer}</p>
    </li>
  ));
  return (
    <div className="youth-page-container">
      <div className="youth-header">
        <img
          className="youth-header-logo"
          src={LogosLogo}
          alt="Logos Student Ministry Logo"
        />
      </div>
      {/* <div className="youth-header-gallery">
        <span>
          <img className="youth-header-gallery-images" src={HungryHippos} />
        </span>
        <span>
          <img className="youth-header-gallery-images" src={Smile} />
        </span>
        <span>
          <img className="youth-header-gallery-images" src={TableHockey} />
        </span>
        <span>
          <img className="youth-header-gallery-images" src={Smile} />
        </span>
      </div> */}
      {/* <div className="time-section">
        <h4>{youthPage.meetingTime.title}</h4>
        <p>{youthPage.meetingTime.body}</p>
      </div> */}
      <div className="description-container">
        <div className="half-box">
          <ScriptureVerse
            verse={youthPage.scriptureVerse.verse}
            reference={youthPage.scriptureVerse.reference}
          />
        </div>
        <p>{youthPage.body}</p>
      </div>

      <h2>Youth Leaders</h2>
      <div className="youth-leaders">
        <Leader name={youthPage.leaders[1]} photo={Leesha} />
        <Leader name={youthPage.leaders[2]} photo={Juvie} />
        <Leader name={youthPage.leaders[3]} photo={Maria} />
        <Leader name={youthPage.leaders[4]} photo={Paul} />
      </div>
      <StaffCard
        image={Wesley}
        title={youthPage.leaders[0]}
        subtitle="Youth Ministry Director"
        email="wesley.livingston@vbvf.org"
      />

      <div className="faq">
        <h2>Logos FAQ</h2>
        <ul>{faqList}</ul>
      </div>
    </div>
  );
}
