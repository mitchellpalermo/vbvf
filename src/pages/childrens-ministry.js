import React, { useState, useEffect } from "react";
import PortableText from "@sanity/block-content-to-react";
import { Spinner } from "reactstrap";
import JourneyLogo from "../images/logos/journey-logo.png";
import SofiJonBTS from "../images/childrens_ministry/sofi_jon_bts.jpg";
import "../css/childrens/childrens-ministry.scss";
import ScriptureVerse from "../components/scripture-verse";
import Button from "../components/button";

import StaffInfo from "../components/staff-info";
import Exclamation from "../images/exclamation-solid.svg";
import { getMobileOperatingSystem, sanity, sanityUrlFor } from "../util/index";
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

  const churchCenterLink = () => {
    if (getMobileOperatingSystem() === "iOS") {
      return `itms-apps://apps.apple.com/us/app/church-center-app/id1357742931`;
    } else if (getMobileOperatingSystem() === "Android") {
      return `https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter`;
    } else {
      return "https://vbvf.churchcenter.com/check-ins";
    }
  };
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
      <div className="childrens-ministry-safety">
        <img src={Exclamation} alt="" />
        <p>
          Due to COVID precautions, space in our children's area is{" "}
          <strong>limited</strong>. For now we're asking that all children are
          checked in before service.
        </p>{" "}
      </div>
      <p className="childrens-ministry-check-in">
        Please check your child in using the{" "}
        <a href={churchCenterLink()}>Church Center App</a>. Registration opens 1
        hour before service begins. If your child has never been to Journey Kids
        before, please{" "}
        <a href="https://vbvf.churchcenter.com/registrations/events/588010">
          pre-register them here
        </a>
        .
      </p>

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
      ) : (
        <StaffInfo
          name={pageData?.ministryLeader.name}
          role={pageData?.ministryLeader.role}
          email={pageData?.ministryLeader.email}
          bio={pageData?.ministryLeader.bio}
          image={sanityUrlFor(pageData?.ministryLeader.image).width(500).url()}
          alt=""
        />
      )}
    </div>
  );
}
