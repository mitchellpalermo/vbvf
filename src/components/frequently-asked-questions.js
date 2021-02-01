import React from "react";
import PortableText from "@sanity/block-content-to-react";
import "../css/frequently-asked-questions.scss";

export default function FrequentlyAskedQuestions(props) {
  const serializers = {
    //this helps react understand how to present links
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return <a href={href}>{children}</a>;
      },
    },
  };

  const faqList = props.faq.map((question) => (
    <li>
      <h3>{question.question}</h3>
      <p>
        {/* making use of sanity's component for reading in portable text */}
        <PortableText blocks={question.answer2} serializers={serializers} />
      </p>
    </li>
  ));

  return (
    <div className="faq-list">
      <ul>{faqList}</ul>
    </div>
  );
}
