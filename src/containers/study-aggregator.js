import React from "react";
import Content from "../content/study-content";
import "../css/study-aggregator.scss";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardSubtitle } from "reactstrap";

export default function StudyAggregator() {
  const studies = Content.studies.map((study) => (
    <Link
      key={study.name}
      className="study-link"
      to={`bible-studies/${study.url}`}
    >
      <div className="study-icon">
        <Card body>
          <CardTitle>{study.name}</CardTitle>
          <CardSubtitle>{`Taught by ${study.teacher}`}</CardSubtitle>
        </Card>
      </div>
    </Link>
  ));

  return <div className="studies-container">{studies}</div>;
}
