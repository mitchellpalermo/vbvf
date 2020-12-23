import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { sanity } from "../util/index";
import { useParams } from "react-router-dom";

import LessonBlock from "../components/lesson-block";

import "../css/study-page.scss";
import Button from "../components/button";

export default function StudyPage() {
  let { studyName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState({});
  const [seriesOver, setSeriesOver] = useState(true);

  const [lessons, setLessons] = useState({});

  const seriesQuery = `*[_type == 'series' && title == $studyName]{
    title, 
    location,
    meetingTime,
    endDate,
    isVbvmiStudy,
    ministrySeriesLink,
    childcareProvided,
    seriesImage,
    description,
  }`;

  const lessonQuery = `*[_type == 'lesson' && series->title == $studyName] | order(lessonNumber asc) {
    lessonNumber,
    versesCovered,
    videoId,
    audioLink,
    "notesUrl": notes.asset->url,
  }`;
  const params = { studyName: studyName.replace("-", " ") };

  useEffect(() => {
    sanity.fetch(seriesQuery, params).then((series) => {
      setSeries(series[0]);
      console.log(series[0]);
      isOver(series[0].endDate); //determining if series is over
    });
    sanity.fetch(lessonQuery, params).then((lessons) => {
      setLessons(lessons);
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, [lessonQuery, seriesQuery]);

  const isOver = (date) => {
    const end = new Date();
    const dateArr = date.split("-");
    end.setFullYear(dateArr[0]);
    end.setMonth(dateArr[1] - 1); //months start at 0 hence decrementing by 1
    end.setDate(dateArr[2]);
    const now = Date();
    if (end > now) {
      //if end date is in the future
      setSeriesOver(false);
    } else {
      setSeriesOver(true);
    }
  };

  const hasContent = (lesson) => {
    if (lesson.videoId || lesson.audioLink) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="study-container">
      <div className="study-info">
        <h3 className="study-info-title">{series.title}</h3>
        {!seriesOver && (
          <div className="study-info-details">
            <div>
              <h5>Meeting Time</h5>
              <p>{` ${series?.meetingTime?.day}s at ${series?.meetingTime?.time}`}</p>
            </div>
            <div>
              <h5>Childcare</h5>
              <p>
                {series.childCareProvided ? "Childcare is provided" : "None"}
              </p>
            </div>
            <div>
              <h5>Location</h5>
              <p>{series?.location}</p>
            </div>
          </div>
        )}
        <div className="description">
          <p className="description-body">{series.description}</p>
        </div>
        {/* render link to series on the ministry site if there is one */}
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
        <h3 className="lesson-list-title">Lessons</h3>
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
