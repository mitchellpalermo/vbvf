import React from "react";
import LogosLogo from "../../images/logos/logos-logo.png";
import "../../css/youth-ministry.scss";
import Leader from "../../components/leader";
import Content from "../../content/youth-ministry-content";
import ScriptureVerse from "../scripture-verse";
import Leesha from "../../images/youth-assets/leesha_cropped.jpg";
import Juvie from "../../images/youth-assets/juvie_cropped.jpg";
import Maria from "../../images/youth-assets/maria_cropped.jpg";

import Wesley from "../../images/leadership_photos/Wesley_Livingston.jpeg";
import StaffInfo from "../staff-info";
import { Button } from "reactstrap";

export default function YouthMinistry() {
  const faqList = Content.faq.map((question) => (
    <li key={question.question}>
      <p>
        <strong>{question.question}</strong>
      </p>
      <p>{question.answer}</p>
    </li>
  ));
  return (
    <div className="youth">
      <div className="youth-header">
        <img
          className="youth-header-logo"
          src={LogosLogo}
          alt="Logos Student Ministry Logo"
        />
      </div>
      <div className="youth-virtual-meeting">
        <p>
          We're still meeting virtually! If you're interested in getting more
          details about how students can participate in Logos Student Ministry,
          let us know!
        </p>
        <Button
          color="primary"
          size="lg"
          href="https://vbvf.churchcenter.com/people/forms/113476?open-in-church-center-modal=true"
        >
          Sign Up
        </Button>
      </div>
      <div className="youth-description">
        <ScriptureVerse
          verse={Content.scriptureVerse.verse}
          reference={Content.scriptureVerse.reference}
        />
        <p>{Content.body}</p>
      </div>

      <h2>Youth Leaders</h2>
      <div className="youth-leaders">
        <Leader name={Content.leaders[1]} photo={Leesha} />
        <Leader name={Content.leaders[2]} photo={Juvie} />
        <Leader name={Content.leaders[3]} photo={Maria} />
      </div>
      <StaffInfo
        name={Content.leader.name}
        role={Content.leader.role}
        email={Content.leader.email}
        bio={Content.leader.bio}
        image={Wesley}
      />
      <div className="youth-faq">
        <h2>Logos FAQ</h2>
        <ul>{faqList}</ul>
      </div>
    </div>
  );
}
