import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";

import { getSingleVideo, sanity } from "../util/index";
import { useParams } from "react-router-dom";
import "../css/childrens-unit-page.scss";

export default function ChildrensUnitPage() {
  let { unitId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [unit, setUnit] = useState({});
  const [lessons, setLessons] = useState({});
  const [video, setVideo] = useState();

  const unitQuery = `*[_type == "childrensUnit" && unitNumber == $unitNumber] {
    unitNumber,
    subtitle,
    description
  }`;
  //using the url param to query Sanity for the Unit's videos and documents
  const lessonQuery = `*[_type == "childrensLesson" && unit->unitNumber == $unitNumber] {
  title,
  videoID,
  "olderUrl" : olderWorksheet.asset->url,
  "youngerUrl":youngerWorksheet.asset->url,
  "preschoolUrl":preschoolWorksheet.asset->url
}`;
  const params = { unitNumber: unitId.split("-")[1] };
  useEffect(() => {
    sanity.fetch(unitQuery, params).then((unit) => {
      setUnit(unit);
    });
    sanity.fetch(lessonQuery, params).then((lesson) => {
      setLessons(lesson);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="unit">
      {isLoading ? (
        <>
          <p>Loading Unit</p>
          <Spinner color="dark" />
        </>
      ) : (
        <div className="unit-description">
          <h3 className="unit-description-title">
            {`Unit ${unit[0].unitNumber} - ${unit[0].subtitle}`}
          </h3>
          <p className="unit-description-body">{unit[0].description}</p>
        </div>
      )}

      {isLoading ? (
        <>
          <p>Loading Lessons</p>
          <Spinner color="dark" />
        </>
      ) : (
        lessons.map((lesson, index) => (
          <div className="unit-lesson" key="index">
            <h3>{lesson.title}</h3>
            <div className="unit-lesson-video-container">
              <iframe
                allowFullScreen
                title={lesson.title}
                src={`https://player.vimeo.com/video/${lesson.videoID}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
              ></iframe>
            </div>
            <h4>Download Worksheets</h4>
            <div className="unit-lesson-worksheets">
              <button
                target="blank"
                rel="noopener noreferrer"
                onClick={() => window.open(lesson.preschoolUrl)}
              >
                Preschool
              </button>
              <button
                target="blank"
                rel="noopener noreferrer"
                onClick={() => window.open(lesson.youngerUrl)}
              >
                Kinder-2nd Grade
              </button>
              <button
                target="blank"
                rel="noopener noreferrer"
                onClick={() => window.open(lesson.olderUrl)}
              >
                3rd-5th Grade
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
