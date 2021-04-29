import React, { useEffect, useState } from "react";
import { sanity } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import "../css/pastor-search.scss";
// import Banner from "../images/pastor-search/banner.jpg";
import Banner from "../images/pastor-search/cropped_banner.jpg";

export default function PastorSearch() {
  const pageQuery = `*[_type == "page" && title == "Pastor Search"]`;
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

  const currentComponent = () => {
    let textToRender = "";
    switch (componentToShow) {
      case "Opportunity":
        return <Opportunity />;
      case "About":
        textToRender = pageContent?.paragraphs?.filter((paragraph) =>
          paragraph.paragraphTitle.includes("About")
        );
        return (
          <>
            <h1>{textToRender[0].paragraphTitle}</h1>
            <PortableText
              blocks={textToRender[0].bodyText}
              serializers={serializers}
            />
          </>
        );
      case "Believe":
        textToRender = pageContent?.paragraphs?.filter((paragraph) =>
          paragraph.paragraphTitle.includes("Believe")
        );
        return (
          <>
            <h1>{textToRender[0].paragraphTitle}</h1>
            <PortableText
              blocks={textToRender[0].bodyText}
              serializers={serializers}
            />
          </>
        );
      case "Candidate":
        textToRender = pageContent?.paragraphs?.filter((paragraph) =>
          paragraph.paragraphTitle.includes("Candidate")
        );
        return (
          <>
            <h1>{textToRender[0].paragraphTitle}</h1>
            <PortableText
              blocks={textToRender[0].bodyText}
              serializers={serializers}
            />
          </>
        );
      case "Hiring":
        textToRender = pageContent?.paragraphs?.filter((paragraph) =>
          paragraph.paragraphTitle.includes("Hiring")
        );
        return (
          <>
            <h1>{textToRender[0].paragraphTitle}</h1>
            <PortableText
              blocks={textToRender[0].bodyText}
              serializers={serializers}
            />
          </>
        );
      case "Apply":
        textToRender = pageContent?.paragraphs?.filter((paragraph) =>
          paragraph.paragraphTitle.includes("Apply")
        );
        return (
          <>
            <h1>{textToRender[0].paragraphTitle}</h1>
            <PortableText
              blocks={textToRender[0].bodyText}
              serializers={serializers}
            />
          </>
        );

      default:
        return <Opportunity />;
    }
  };
  return (
    <div className="pastor-search">
      <img src={Banner} alt="" />
      <div className="pastor-search-container">
        <div className="pastor-search-menu">
          <ul>
            <li
              onClick={() => setComponentToShow("Opportunity")}
              className={
                componentToShow.includes("Opportunity") ? "selected" : null
              }
            >
              The Opportunity
            </li>
            <li
              onClick={() => setComponentToShow("About")}
              className={componentToShow.includes("About") ? "selected" : null}
            >
              About VBVF
            </li>
            <li
              onClick={() => setComponentToShow("Believe")}
              className={
                componentToShow.includes("Believe") ? "selected" : null
              }
            >
              What We Believe
            </li>
            <li
              onClick={() => setComponentToShow("Candidate")}
              className={
                componentToShow.includes("Candidate") ? "selected" : null
              }
            >
              The Successful Candidate Will...
            </li>
            <li
              onClick={() => setComponentToShow("Hiring")}
              className={componentToShow.includes("Hiring") ? "selected" : null}
            >
              The Hiring Process
            </li>
            <li
              onClick={() => setComponentToShow("Apply")}
              className={componentToShow.includes("Apply") ? "selected" : null}
            >
              How to Apply
            </li>
          </ul>
        </div>
        <div className="pastor-search-content">{currentComponent()}</div>
      </div>
    </div>
  );
}
