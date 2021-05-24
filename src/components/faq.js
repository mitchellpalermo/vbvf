import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import FrequentlyAskedQuestions from "./frequently-asked-questions";
import { sanity } from "../util/index";
import "../css/faq.scss";
import AboutMenu from "./about-menu";
import AlertBubble from "./alert-bubble";

export default function FAQ() {
  const query = `*[_type == "page" && title == "About Page"]{...}`;

  const [pageData, setPageData] = useState([]);
  const [faqIsLoading, setFaqIsLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);

      setFaqIsLoading(!faqIsLoading);
    });
    //eslint-disable-next-line
  }, [query]);

  return (
    <div className="faq">
      <AlertBubble />
      <AboutMenu />
      {faqIsLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>FAQ</h1>
          <FrequentlyAskedQuestions
            faq={pageData?.faq.faqs}
            layout="vertical"
          />
        </>
      )}
    </div>
  );
}
