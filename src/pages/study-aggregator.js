import React, { useState, useEffect } from "react";
import "../css/study-aggregator.scss";
import { Link } from "react-router-dom";
import { sanity, sanityUrlFor, isOver } from "../util/index";
import AlertBubble from "../components/alert-bubble";
import { Spinner } from "reactstrap";
export default function StudyAggregator() {
  const query = `*[_type == "series"] | order(endDate desc) {
    title,
    seriesImage,
    endDate,
    
  }`;
  const [series, setSeries] = useState([]);
  const [isSeriesLoading, setIsSeriesLoading] = useState(true);

  useEffect(() => {
    sanity.fetch(query).then((results) => {
      setSeries(results);
      setIsSeriesLoading(false);
    });
  }, [query]);
  const studies = series.map((study) => (
    <Link
      key={study.title}
      className="study-link"
      to={`bible-studies/${study.title.replace(" ", "-")}`}
    >
      <div className={`study-icon `}>
        <span
          className={`indicator-${
            !isOver(study?.endDate) ? "active" : "hidden"
          }`}
        >
          Active Series
        </span>
        <img src={sanityUrlFor(study.seriesImage).width(400).url()} alt="" />
        <h3>{study.title}</h3>
      </div>
    </Link>
  ));

  return (
    <div className="studies">
      <div className="studies-desc">
        <h1>Bible Teaching</h1>
        <AlertBubble />
        <p>
          Verse by Verse Fellowship prioritizes the teaching of the word. We
          believe that God uses His word to equip followers of Christ to walk in
          confidence and love. Please enjoy these teaching series from teachers
          here at VBVF. If you would like to listen to more Bible teaching,
          please visit our sister ministry,{" "}
          <Link to={{ pathname: "/sermon-redirect", deepDive: "" }}>
            Verse by Verse Ministry
          </Link>
          .
        </p>
      </div>
      <div className="studies-array">
        {isSeriesLoading ? <Spinner /> : studies}
      </div>
    </div>
  );
}
