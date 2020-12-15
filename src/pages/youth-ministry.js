import React, { useState, useEffect } from "react";
import LogosLogo from "../images/logos/logos-logo.png";
import Volunteer from "../images/youth_assets/volunteer_youth.jpg";
import "../css/youth-ministry.scss";
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
          verse="Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity. Until I come, devote yourself to the public reading of Scripture, to exhortation, to teaching."
          reference="1 Timothy 4:12-16"
        />
        <p>
          Logos Student Ministries desires to see students grow in the word of
          God while being intentional about living out the truth of the word of
          God. We want to be a community of people that provide the freedom to
          wrestle with the text while cultivating and facilitating the spiritual
          growth and development of our students. We want to see every student
          in Logos Student Ministries grow in their reliance of scripture, while
          operating in an attitude of service, as they grow in grace in a
          lifestyle of true Gospel witness.
        </p>
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
        <img src={Volunteer} alt="" />
        <div>
          <h3>
            Want to volunteer
            <br /> with student ministry?
          </h3>
          <Button
            title="Sign up here"
            size="medium"
            link="https://vbvf.churchcenter.com/people/forms/72047"
          />
        </div>
      </div>
      <div className="youth-faq">
        <h2>Logos FAQ</h2>
        {faqIsLoading ? <Spinner /> : <ul>{faqList}</ul>}
      </div>
    </div>
  );
}
