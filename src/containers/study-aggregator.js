import React from "react";
import Content from "../content/study-content";
import "../css/study-aggregator.scss";
import { Link } from "react-router-dom";

export default function StudyAggregator() {
  //onclick just sends the person to the lesson page with the content passed as props

  const studies = Content.studies.map((study) => (
    <Link
      key={study.name}
      className="study-icon"
      to={{
        pathname: "study",
        study: study,
      }}
    >
      <div>{study.name}</div>
    </Link>
  ));

  return <div className="studies-container">{studies}</div>;
}
