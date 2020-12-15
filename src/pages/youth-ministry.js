import React, { useState, useEffect } from "react";
import LogosLogo from "../images/logos/logos-logo.png";
import "../css/youth-ministry.scss";
import Content from "../content/youth-ministry-content";
import { sanity, sanityUrlFor } from "../util/index";
import ScriptureVerse from "../components/scripture-verse";
import StaffInfo from "../components/staff-info";
import Button from "../components/button";
import Spinner from "reactstrap/lib/Spinner";

export default function YouthMinistry() {
  const faqQuery = `*[_type == "faq" && title == "Youth Ministry"] {
    faqs
  }`;
  const personQuery = `*[_type == "person" && role == "Associate Pastor" && department == "Youth Ministry"] `;

  const [faq, setFaq] = useState([]);
  const [faqIsLoading, setFaqIsLoading] = useState(true);
  const [person, setPerson] = useState();
  const [personIsLoading, setPersonIsLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(faqQuery).then((results) => {
      setFaq(results[0].faqs);
      setFaqIsLoading(!faqIsLoading);
    });
    sanity.fetch(personQuery).then((results) => {
      setPerson(results[0]);
      setPersonIsLoading(!personIsLoading);
    });
    //eslint-disable-next-line
  }, [faqQuery, personQuery]);

  const faqList = faq.map((question) => (
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

      <div className="youth-description">
        <ScriptureVerse
          verse={Content.scriptureVerse.verse}
          reference={Content.scriptureVerse.reference}
        />
        <p>{Content.body}</p>
      </div>
      <>
        {personIsLoading ? (
          <Spinner />
        ) : (
          <StaffInfo
            name={person.name}
            role={person.role}
            email={person.email}
            bio={person.bio}
            image={sanityUrlFor(person.image).width(500).url()}
            alt=""
          />
        )}
      </>
      <div className="youth-sign-up">
        <h3>Interested in volunteering with student ministry?</h3>
        <Button
          title="Sign up here"
          size="medium"
          link="https://vbvf.churchcenter.com/people/forms/72047"
        />
      </div>
      <div className="youth-faq">
        <h2>Logos FAQ</h2>
        {faqIsLoading ? <Spinner /> : <ul>{faqList}</ul>}
      </div>
    </div>
  );
}
