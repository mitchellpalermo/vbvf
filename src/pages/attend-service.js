import React, { useState, useEffect } from "react";
import "../css/attend-service.scss";
import PortableText from "@sanity/block-content-to-react";
import { sanity } from "../util/index";
import { Spinner } from "reactstrap";

export default function AttendService() {
  const [pageData, setPageData] = useState();
  const [pageDataIsLoading, setPageDataIsLoading] = useState(true);
  const query = `*[_type == "page" && title == "Attend a Service"]{
    paragraphs,
    faq,
    scripture
  }`;
  useEffect(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
    //eslint-disable-next-line
  }, [query]);

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

  const paragraphs = pageData?.paragraphs.map((paragraph) => (
    <section>
      <h4>{paragraph.paragraphTitle}</h4>
      <PortableText blocks={paragraph.bodyText} serializers={serializers} />
    </section>
  ));

  return (
    <div className="attend">
      <h1>
        Attending a Service <br />
        <span id="highlight">Verse by Verse Fellowship</span>
      </h1>

      <div className="attend-desc">
        {pageDataIsLoading ? <Spinner color="dark" /> : paragraphs}
      </div>
      <p>
        {" "}
        For more information, please contact the church at info@vbvf.org or call
        210-460-7556.
      </p>
    </div>
  );
}
