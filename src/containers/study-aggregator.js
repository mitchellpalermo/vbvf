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

  return (
    <div className="studies">
      <div className="studies-desc">
        <h1>Bible Studies</h1>
        <p>
          Verse by Verse Fellowship prioritizes the teaching of the word. We
          believe that God uses His word to equip followers of Christ to walk in
          confidence and love. Please enjoy these teaching series from teachers
          here at VBVF. If you would like to listen to more bible teaching,
          please visit our sister ministry,{" "}
          <Link to="/sermon-redirect">Verse by Verse Ministry</Link>.
        </p>
      </div>
      {studies}
    </div>
  );
}
