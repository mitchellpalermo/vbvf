import React from "react";
import Content from "../content/study-content";
import "../css/study-aggregator.scss";
import { Link } from "react-router-dom";

export default function StudyAggregator() {
  const studies = Content.studies.map((study) => (
    <Link
      key={study.name}
      className="study-icon"
      to={`bible-studies/${study.url}`}
    >
      <div>{study.name}</div>
    </Link>
  ));

  return <div className="studies-container">{studies}</div>;
}
