import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import smoothscroll from "smoothscroll-polyfill";
import { sanity } from "../util/index";
import { useParams } from "react-router-dom";
import "../css/childrens/childrens-unit-page.scss";
import { Link } from "react-router-dom";

export default function ChildrensUnitPage() {
  let { unitId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [unit, setUnit] = useState({});
  const [lessons, setLessons] = useState({});
  const [currentLesson, setCurrentLesson] = useState({});
  smoothscroll.polyfill();
  const unitQuery = `*[_type == "childrensUnit" && unitNumber == $unitNumber] [0] {
    unitNumber,
    title,
    seriesImage,
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
      setCurrentLesson(lesson[0]);
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
        <div className="unit-content">
          <div className="unit-content-assets">
            <Link to="/childrens-content">Back to Children's Content</Link>
            <h3 className="unit-content-assets-title">
              {`Unit ${unit.unitNumber} - ${unit.title}`}
            </h3>

            <p className="unit-content-assets-body">{unit.description}</p>
          </div>

          <div className="unit-content-video">
            <iframe
              allowFullScreen
              title={currentLesson.title}
              src={`https://player.vimeo.com/video/${currentLesson.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
            ></iframe>
          </div>
          <h5>
            {" "}
            Currently Playing: Lesson {currentLesson.number}{" "}
            {currentLesson.title}
          </h5>
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
            <div
              className={`unit-lesson-list-item ${
                lesson.title === currentLesson.title ? "active" : " "
              }`}
              key="index"
            >
              <button
                className="mobile-play-button"
                onClick={() => {
                  setCurrentLesson(lesson);
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <h4>Play Lesson {lesson.number}</h4>
              </button>
              <button
                className="play-button"
                onClick={() => {
                  setCurrentLesson(lesson);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6z" />
                </svg>
                <h5>Play Lesson</h5>
              </button>
              <h3 className="desktop-title">
                {lesson.title} <span>Lesson {lesson.number}</span>
              </h3>

              <div className="unit-lesson-list-item-worksheets">
                <h6>Download Worksheets</h6>
                <div className="unit-lesson-list-item-worksheets-group">
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}
