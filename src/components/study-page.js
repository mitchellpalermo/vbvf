import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { sanity, sanityUrlFor } from "../util/index";
import { useParams } from "react-router-dom";

import LessonBlock from "./lesson-block";

import "../css/study-page.scss";

export default function StudyPage() {
  let { studyName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState({});
  const [lessons, setLessons] = useState({});

  const seriesQuery = `*[_type == 'series' && title == $studyName]{
    title, 
    seriesImage,
    description
  }`;

  const lessonQuery = `*[_type == 'lesson' && series->title == $studyName] | order(title) {
    title,
    "notesUrl": notes.asset->url,
    videoId
  }`;
  const params = { studyName };

  useEffect(() => {
    sanity.fetch(seriesQuery, params).then((series) => {
      setSeries(series[0]);
    });
    sanity.fetch(lessonQuery, params).then((lessons) => {
      setLessons(lessons);
      setIsLoading(false);
    });
  }, [lessonQuery, seriesQuery]);

  return (
    <div className="study-container">
      <div className="description">
        <h3 className="description-title">{series.title}</h3>
        <p className="description-body">{series.description}</p>
      </div>
      <div className="lesson-list">
        <h3 className="lesson-list-title">Available Lessons</h3>
        {isLoading ? (
          <>
            <p>Loading Lessons</p>
            <Spinner color="dark" />
          </>
        ) : (
          lessons.map((lesson) => (
            <LessonBlock key={lesson.title} {...lesson} />
          ))
        )}
      </div>
    </div>
  );
}
