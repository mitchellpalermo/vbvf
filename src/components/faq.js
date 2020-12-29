import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";

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
      console.log(results[0]);
      setFaqIsLoading(!faqIsLoading);
    });
    //eslint-disable-next-line
  }, [faqQuery]);
  const faqList = faq.map((question) => (
    <li key={question.question}>
      <p>
        <strong>{question.question}</strong>
      </p>
      <p>
        {question.answer2[0].children.map((child) => (
          <span>{child.text}</span>
        ))}
      </p>
    </li>
  ));

  return (
    <div className="faq">
      <AboutMenu />

      {faqIsLoading ? <Spinner /> : <ul>{faqList}</ul>}
    </div>
  );
}
