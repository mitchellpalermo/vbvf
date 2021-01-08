import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import FrequentlyAskedQuestions from "./frequently-asked-questions";
import { sanity } from "../util/index";
import "../css/faq.scss";
import AboutMenu from "./about-menu";

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
      <AboutMenu />
      {faqIsLoading ? <Spinner /> : <FrequentlyAskedQuestions faq={faq} />}
    </div>
  );
}
