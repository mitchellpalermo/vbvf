import React, { useEffect, useState } from "react";
import { sanity } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import "../css/pastor-search.scss";

import Banner from "../images/pastor-search/cropped_banner.jpg";

export default function PastorSearch() {
  const pageQuery = `*[_type == "page" && title == "Pastor Search"] {
    paragraphs,
  documents[]{
    documentTitle,
      "documentUrl": document.asset->url
  }
}`;
  useEffect(() => {
    sanity.fetch(pageQuery).then((result) => {
      setPageContent(result[0]);
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
  const [componentToShow, setComponentToShow] = useState("The Opportunity");

  const Opportunity = () => (
    <div>
      <h1>The Opportunity</h1>
      <p>
        The Verse by Verse Fellowship (VBVF), Senior Pastor position, is located
        in beautiful and historic San Antonio, Texas. The Senior Pastor leads a
        vibrant and growing congregation of approximately 300 people at our
        church, which is centrally located in San Antonio.
      </p>
      <p>
        VBVF is a church that follows Jesus through teaching the whole counsel
        of God, making disciples, and living with eyes for eternity. We believe
        that expository Bible teaching from the Word is central to changing
        hearts and lives for Christ.
      </p>
      <p>
        We aim to model Jesus; inviting one another to grow toward maturity in
        Him with an anticipation of our eternal reward. The Senior Pastor will
        join this elder-led congregation as shepherds, moving the congregation
        toward spiritual maturity and equipping them for the work of the
        ministry.
      </p>
      <p>
        The Senior Pastor will model a faithful life of service to Christ in his
        teaching, discipling and personal life.
      </p>
    </div>
  );

  const showMe = () => {
    if (componentToShow === "The Opportunity") {
      return <Opportunity />;
    } else {
      let textToRender = pageContent?.paragraphs?.find((paragraph) =>
        paragraph.paragraphTitle.includes(componentToShow)
      );
      let documentForDownload = pageContent?.documents?.find((document) =>
        document.documentTitle.includes(componentToShow)
      );
      console.log(documentForDownload);
      return (
        <>
          <h1>{textToRender.paragraphTitle}</h1>
          <PortableText
            blocks={textToRender.bodyText}
            serializers={serializers}
          />
          {documentForDownload !== undefined && (
            <a
              target="blank "
              rel="noopener noreferrer"
              href={documentForDownload.documentUrl}
            >
              Download {documentForDownload.documentTitle} document
            </a>
          )}
        </>
      );
    }
  };

  return (
    <div className="pastor-search">
      <img src={Banner} alt="" />

      <div className="pastor-search-container">
        <div className={`pastor-search-menu `}>
          <ul>
            <li
              onClick={() => setComponentToShow("The Opportunity")}
              className={
                componentToShow.includes("Opportunity") ? "selected" : null
              }
            >
              The Opportunity
            </li>
            {pageContent?.paragraphs.map((paragraph) => (
              <li
                onClick={() => setComponentToShow(paragraph.paragraphTitle)}
                className={
                  componentToShow.includes(paragraph.paragraphTitle)
                    ? "selected"
                    : null
                }
              >
                {paragraph.paragraphTitle}
              </li>
            ))}
          </ul>
        </div>
        <div className="pastor-search-content">{showMe()}</div>
      </div>
    </div>
  );
}
