import React, { useEffect, useState } from "react";
import { sanity } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import "../css/pastor-search.scss";

import Banner from "../images/pastor-search/cropped_banner.jpg";
import { Spinner } from "reactstrap";

export default function PastorSearch() {
  const pageQuery = `*[_type == "page" && title == "Pastor Search"] {
    paragraphs,
    videoId,
  documents[]{
    documentTitle,
      "documentUrl": document.asset->url
  }
}`;
  useEffect(() => {
    sanity.fetch(pageQuery).then((result) => {
      setPageContent(result[0]);
      setPageContentIsLoading(false);
    });
    //eslint-disable-next-line
  }, []);

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

  const [pageContent, setPageContent] = useState();
  const [pageContentIsLoading, setPageContentIsLoading] = useState(true);

  const congregationalUpdate = () => {
    let textToRender = pageContent?.paragraphs?.find((paragraph) =>
      paragraph.paragraphTitle.includes("Congregational Update")
    );
    return (
      <>
        <h1>{textToRender.paragraphTitle}</h1>
        <PortableText
          blocks={textToRender.bodyText}
          serializers={serializers}
        />
      </>
    );
  };

  return (
    <div className="pastor-search">
      <img src={Banner} alt="" />

      <div className="pastor-search-container">
        {pageContentIsLoading ? (
          <Spinner color="dark" />
        ) : (
          <div className="pastor-search-content">{congregationalUpdate()}</div>
        )}
      </div>
    </div>
  );
}
