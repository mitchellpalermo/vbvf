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

  const faqList = props.faq?.map((question) => (
    <div className="faq-list-item">
      <h3>{question.question}</h3>

      {/* making use of sanity's component for reading in portable text */}
      <p>
        <PortableText blocks={question.answer2} serializers={serializers} />
      </p>
    </div>
  ));

  return <div className={`faq-list ${props.layout}`}>{faqList}</div>;
}
