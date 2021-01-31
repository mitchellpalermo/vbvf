import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import FrequentlyAskedQuestions from "./frequently-asked-questions";
import { sanity } from "../util/index";
import "../css/faq.scss";
import AboutMenu from "./about-menu";
import AlertBubble from "./alert-bubble";

export default function FAQ() {
  const faqQuery = `*[_type == "faq" && title == "About Page"] {
    faqs
  }`;

  const [faq, setFaq] = useState([]);
  const [faqIsLoading, setFaqIsLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(faqQuery).then((results) => {
      setFaq(results[0].faqs);

      setFaqIsLoading(!faqIsLoading);
    });
    //eslint-disable-next-line
  }, [faqQuery]);

  return (
    <div className="faq">
      <AlertBubble />
      <AboutMenu />
      {faqIsLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>FAQ</h1>
          <FrequentlyAskedQuestions faq={faq} />
        </>
      )}
    </div>
  );
}
