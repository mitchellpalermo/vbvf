import React, { useState, useEffect } from "react";

import "../css/small-groups.scss";

import StaffInfo from "../components/staff-info";
import Logo from "../images/logos/small_group_logo.svg";
import PortableText from "@sanity/block-content-to-react";
import Button from "../components/button";
import Praying from "../images/small_groups/praying.jpg";
import AlertBubble from "../components/alert-bubble";

import { sanity, sanityUrlFor } from "../util/index";
import { Spinner } from "reactstrap";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";

export default function SmallGroups() {
  const query = `*[_type == "page" && title == "Small Groups"]{
    paragraphs,
    faq,
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
    <div className="small-group">
      <div className="small-group-header">
        <img alt="" src={Logo} />
        <h1>
          VBVF
          <br /> Small
          <br /> Groups
        </h1>
      </div>
      <AlertBubble />
      <div className="small-group-info">
        {pageDataIsLoading ? (
          <Spinner />
        ) : (
          <PortableText
            className="small-group-info-paragraph"
            renderContainerOnSingleChild={true}
            blocks={pageData.paragraphs[0].bodyText}
            serializers={serializers}
          />
        )}
        <img alt="" src={Praying} />
      </div>
      <div className="small-group-button-container">
        <Button
          color="green"
          title="Find a Small Group"
          size="large"
          link="https://vbvf.churchcenter.com/groups/small-groups"
        />
        <Button
          color="green"
          title="Become a leader"
          size="large"
          link="https://vbvf.churchcenter.com/people/forms/185037"
        />
      </div>

      {pageDataIsLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="small-group-faq">
            <FrequentlyAskedQuestions
              faq={pageData?.faq.faqs}
              layout="compact"
            />
          </div>

          <StaffInfo
            name={pageData?.ministryLeader.name}
            role={pageData?.ministryLeader.role}
            email={pageData?.ministryLeader.email}
            image={sanityUrlFor(pageData?.ministryLeader.image)
              .width(500)
              .url()}
            alt=""
            bio={pageData?.ministryLeader.bio}
          />
        </>
      )}
    </div>
  );
}
