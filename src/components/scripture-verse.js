import React from "react";
import "../css/scripture-verse.scss";
import PortableText from "@sanity/block-content-to-react";

export default function ScriptureVerse(props) {
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

  return (
    <div className="scripture">
      <PortableText
        renderContainerOnSingleChild={true}
        className="scripture-verse"
        blocks={props.verse}
        serializers={serializers}
      />
      <h3 className="scripture-reference">{props.reference}</h3>
    </div>
  );
}
