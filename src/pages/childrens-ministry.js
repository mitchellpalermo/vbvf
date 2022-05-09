import React, { useState, useEffect } from "react";
import PortableText from "@sanity/block-content-to-react";
import { Spinner } from "reactstrap";
import JourneyLogo from "../images/logos/journey-logo.png";
import SofiJonBTS from "../images/childrens_ministry/sofi_jon_bts.jpg";
import "../css/childrens/childrens-ministry.scss";
import ScriptureVerse from "../components/scripture-verse";
import Button from "../components/button";

import StaffInfo from "../components/staff-info";

import { sanity, sanityUrlFor } from "../util/index";
import AlertBubble from "../components/alert-bubble";

export default function ChildrensMinistry() {
  const query = `*[_type == "page" && title == "Children's Ministry"]{
    paragraphs,
    scripture,
    ministryLeader->
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

  useEffect(() => {
    sanity.fetch(query).then((result) => {
      setPageData(result[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
    //eslint-disable-next-line
  }, [query]);

  return (
    <div className="childrens-ministry">
      <div className="childrens-ministry-header">
        <img
          className="childrens-ministry-header-logo"
          alt="Journey Kids Logo"
          src={JourneyLogo}
        />
        <AlertBubble />
      </div>

      <div className="childrens-ministry-mission">
        {pageDataIsLoading ? (
          <Spinner />
        ) : (
          <>
            <PortableText
              className="childrens-ministry-mission-paragraph"
              renderContainerOnSingleChild={true}
              blocks={pageData?.paragraphs[0].bodyText}
              serializers={serializers}
            />
            <ScriptureVerse
              verse={pageData.scripture.verseText}
              reference={pageData.scripture.reference}
            />
          </>
        )}
      </div>

      <div className="childrens-ministry-materials">
        <div className="button-container">
          <h2>
            Biblically grounded
            <br /> childrens' material
          </h2>
          <p>New videos and activities every week</p>
          <Button
            size="medium"
            title="View resources"
            color="green"
            buttonFunc={() => {
              window.open("/childrens-content");
            }}
          />
        </div>
        <img alt="ministry leaders filming content" src={SofiJonBTS} />
      </div>
      <div className="childrens-ministry-sign-up">
        <h4>
          Join our email list to receive notifications about new children's
          learning materials, events and other announcements.
        </h4>
        <Button
          size="large"
          title="Sign me up"
          color="green"
          buttonFunc={() => {
            window.location.href =
              "https://vbvf.churchcenter.com/people/forms/118844?open-in-church-center-modal=true";
          }}
        />
      </div>
      {pageDataIsLoading ? (
        <Spinner />
      ) : pageData.ministryLeader !== undefined ? (
        <StaffInfo
          name={pageData?.ministryLeader.name}
          role={pageData?.ministryLeader.role}
          email={pageData?.ministryLeader.email}
          bio={pageData?.ministryLeader.bio}
          image={sanityUrlFor(pageData?.ministryLeader.image).width(500).url()}
          alt=""
        />
      ) : null}
    </div>
  );
}
