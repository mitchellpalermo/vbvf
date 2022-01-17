import React, { useState, useEffect } from "react";
import LogosLogo from "../images/logos/logos-logo.png";
import Volunteer from "../images/youth_assets/volunteer_youth.jpg";
import "../css/youth-ministry.scss";
import { sanity, sanityUrlFor } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import ScriptureVerse from "../components/scripture-verse";
import StaffInfo from "../components/staff-info";
import Button from "../components/button";
import Spinner from "reactstrap/lib/Spinner";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";
import AlertBubble from "../components/alert-bubble";

export default function YouthMinistry() {
  const query = `*[_type == "page" && title == "Youth Ministry"]{
    paragraphs,
    scripture,
    faq,
    ministryLeader->,
  }`;

  const serializers = {
    //this helps react understand how to present links
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return <a href={href}>{children}</a>;
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return <ul>{props.children}</ul>;
        }
        return <ol>{props.children}</ol>;
      },
      listItem: (props) => <li>{props.children}</li>,
    },
  };

  const [pageData, setPageData] = useState([]);
  const [pageDataIsLoading, setPageDataIsLoading] = useState(true);
  const [personIsLoading, setPersonIsLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);
      setPageDataIsLoading(!pageDataIsLoading);
      setPersonIsLoading(!personIsLoading);
    });
    //eslint-disable-next-line
  }, [query]);

  return (
    <div className="youth">
      <div className="youth-header">
        <img
          className="youth-header-logo"
          src={LogosLogo}
          alt="Logos Student Ministry Logo"
        />
        <AlertBubble />
      </div>

      <div className="youth-description">
        {pageDataIsLoading ? (
          <Spinner />
        ) : (
          <>
            <ScriptureVerse
              verse={pageData.scripture.verseText[0]}
              reference={pageData.scripture.reference}
            />

            <PortableText
              renderContainerOnSingleChild={true}
              className="youth-description-mission"
              blocks={pageData?.paragraphs[0].bodyText}
              serializers={serializers}
            />
          </>
        )}
      </div>

      <h2>Logos FAQ</h2>
      {pageDataIsLoading ? (
        <Spinner />
      ) : (
        <FrequentlyAskedQuestions faq={pageData.faq.faqs} layout="vertical" />
      )}

      <div className="youth-sign-up">
        <img src={Volunteer} alt="" />
        <div>
          <h3>
            Want to volunteer
            <br /> with student ministry?
          </h3>
          <Button
            color="green"
            title="Sign up here"
            size="medium"
            link="https://vbvf.churchcenter.com/people/forms/72047"
          />
        </div>
      </div>
      <>
        {personIsLoading ? (
          <Spinner />
        ) : pageData.ministryLeader !== undefined ? (
          <StaffInfo
            name={pageData?.ministryLeader.name}
            role={pageData?.ministryLeader.role}
            email={pageData?.ministryLeader.email}
            bio={pageData?.ministryLeader.bio}
            image={sanityUrlFor(pageData?.ministryLeader.image)
              .width(500)
              .url()}
            alt=""
          />
        ) : null}
      </>
    </div>
  );
}
