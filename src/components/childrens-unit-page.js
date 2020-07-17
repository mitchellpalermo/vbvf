import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";

import { sanity } from "../util/index";
import { useParams } from "react-router-dom";
import "../css/childrens-unit-page.scss";

export default function ChildrensUnitPage() {
  let { unitId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [unit, setUnit] = useState({});
  const [lessons, setLessons] = useState({});

  const unitQuery = `*[_type == "childrensUnit" && unitNumber == $unitNumber] [0] {
    unitNumber,
    title,
    description
  }`;
  //using the url param to query Sanity for the Unit's videos and documents sorted by lesson
  const lessonQuery = `*[_type == "childrensLesson" && unit->unitNumber == $unitNumber] | order(lessonNumber asc) {
  title,
  videoId,
  "olderUrl" : olderWorksheet.asset->url,
  "youngerUrl":youngerWorksheet.asset->url,
  "preschoolUrl":preschoolWorksheet.asset->url,
  "number": lessonNumber
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
    //eslint-disable-next-line
  }, [unitQuery, lessonQuery]);

  return (
    <div className="unit">
      {isLoading ? (
        <div className="loading-spinner">
          <p>Loading Unit</p>
          <Spinner color="dark" />
        </div>
      ) : (
        <div className="unit-description">
          <h3 className="unit-description-title">
            {`Unit ${unit.unitNumber} - ${unit.title}`}
          </h3>
          <p className="unit-description-body">{unit.description}</p>
        </div>
      )}
      <div className="unit-lesson-list">
        {isLoading ? (
          <div className="loading-spinner">
            <p>Loading Lessons</p>
            <Spinner style={{ alignSelf: "center" }} color="dark" />
          </div>
        ) : (
          lessons.map((lesson, index) => (
            <div className="unit-lesson-list-item" key="index">
              <h3>
                {lesson.title} <span>Lesson {lesson.number}</span>
              </h3>

              <div className="unit-lesson-list-item-worksheets">
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
    </div>
  );
}
