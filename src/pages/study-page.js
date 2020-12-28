import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { sanity, isOver, sanityUrlFor } from "../util/index";
import { useParams } from "react-router-dom";

import LessonBlock from "../components/lesson-block";

import "../css/study-page.scss";
import VbvmiStudy from "../components/vbvmiStudy";

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
      setSeriesOver(isOver(series[0].endDate)); //determining if series is over
    });
    sanity.fetch(lessonQuery, params).then((lessons) => {
      setLessons(lessons);
      setIsLoading(false);
    });
    //eslint-disable-next-line
  }, [lessonQuery, seriesQuery]);

  const hasContent = (lesson) => {
    if (lesson.videoId || lesson.audioLink) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="study-container">
      {series.isVbvmiStudy ? (
        <VbvmiStudy {...series} />
      ) : (
        <>
          <div className="study-info">
            <>
              <img
                alt=""
                src={sanityUrlFor(series.seriesImage).size(500, 300).url()}
              />
              <h3 className="study-info-title">{series.title}</h3>
            </>
            {!seriesOver && (
              <div className="study-info-details">
                <div>
                  <h5>Meeting Time</h5>
                  {!series?.meetingTime?.secondServiceTime ? ( //if there's no second service show only first service
                    <p>{` ${series?.meetingTime?.day}s at ${series?.meetingTime?.time}`}</p>
                  ) : (
                    <p>{` ${series?.meetingTime?.day}s at ${series?.meetingTime?.time} and ${series?.meetingTime.secondServiceTime}`}</p>
                  )}
                </div>
                <div>
                  <h5>Childcare</h5>
                  <p>
                    {series.childCareProvided
                      ? "Childcare is provided"
                      : "None"}
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
        </>
      )}
    </div>
  );
}
