import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { getVideos, getDocumentIds, buildLessons } from "../util/index";
import { useParams } from "react-router-dom";

import Content from "../content/study-content";
import LessonBlock from "./lesson-block";

import "../css/study-page.scss";

export default function StudyPage() {
  let { studyId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [lessons, setLessons] = useState([]);
  //using the url param to search through studies and grab the right one
  const study = Content.studies.find((study) => study.url === studyId);

  useEffect(() => {
    const videos = getVideos(study.vimeoFolder); //videos at data.data
    const documents = getDocumentIds(study.dropBoxFolder); //docs at data.entries

    Promise.all([videos, documents]).then((values) => {
      buildLessons(values[0], values[1]).then((lessons) => {
        lessons.sort((a, b) => a.video.name.localeCompare(b.video.name)); //sorting lessons alphabetically
        setLessons(lessons);
      });
      setIsLoading(false);
    });
  }, [study.dropBoxFolder, study.vimeoFolder]);
  console.log(lessons);
  return (
    <div className="study-container">
      <div className="description">
        <h3 className="description-title">{study.name}</h3>
        <p className="description-body">{study.description}</p>
      </div>
      <div className="lesson-list">
        <h3 className="lesson-list-title">Available Lessons</h3>
        {isLoading ? (
          <>
            <p>Loading Lessons</p>
            <Spinner color="dark" />
          </>
        ) : (
          lessons.map((lesson) => <LessonBlock key={lesson.id} {...lesson} />)
        )}
      </div>
    </div>
  );
}
