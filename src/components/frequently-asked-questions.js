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
  console.log(props);

  const faqList = props.faq.map((question) => (
    <li>
      <h3>{question.question}</h3>
      <p>
        {/* making use of sanity's component for reading in portable text */}
        <PortableText blocks={question.answer} serializers={serializers} />
      </p>
    </li>
  ));

  return (
    <div className="faq-list">
      <h1>FAQ</h1>
      <ul>{faqList}</ul>
    </div>
  );
}
