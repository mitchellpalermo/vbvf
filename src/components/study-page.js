import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { sanity } from "../util/index";
import { useParams } from "react-router-dom";

import LessonBlock from "./lesson-block";

import "../css/study-page.scss";
import Button from "./button";

export default function StudyPage() {
  let { studyName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState({});
  const [lessons, setLessons] = useState({});

  const seriesQuery = `*[_type == 'series' && title == $studyName]{
    title, 
    seriesImage,
    description,
    ministrySeriesLink
  }`;

  const lessonQuery = `*[_type == 'lesson' && series->title == $studyName] | order(title) {
    title,
    videoId,
    audioLink,
    "notesUrl": notes.asset->url,
  }`;
  const params = { studyName: studyName.replace("-", " ") };

  useEffect(() => {
    sanity.fetch(seriesQuery, params).then((series) => {
      setSeries(series[0]);
    });
    sanity.fetch(lessonQuery, params).then((lessons) => {
      setLessons(lessons);
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, [lessonQuery, seriesQuery]);

  //render the lesson if it has either audio or video content
  const hasContent = (lesson) => {
    if (lesson.videoId || lesson.audioLink) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="study-container">
      <div className="description">
        <h3 className="description-title">{series.title}</h3>
        <p className="description-body">{series.description}</p>
        {series.ministrySeriesLink && (
          <div className="description-body-ministry-link">
            <p>
              Listen to the rest of this series on Verse by Verse Ministry's
              website
            </p>
            <Button
              title="Listen Here"
              buttonFunc={() => window.open(series.ministrySeriesLink)}
            />
          </div>
        )}
      </div>
      <div className="lesson-list">
        <h3 className="lesson-list-title">Available Lessons</h3>
        {isLoading ? (
          <>
            <p>Loading Lessons</p>
            <Spinner color="dark" />
          </>
        ) : (
          lessons.map((lesson, index) => {
            //render lesson block only if there's a meaningful content
            return hasContent(lesson) ? (
              <LessonBlock key={index} {...lesson} />
            ) : null;
          })
        )}
      </div>
    </div>
  );
}
