import React from "react";
import PortableText from "@sanity/block-content-to-react";
import "../css/frequently-asked-questions.scss";

export default function FrequentlyAskedQuestions(props) {
  const serializers = {
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
