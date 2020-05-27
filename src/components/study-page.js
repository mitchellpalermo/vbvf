import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getVideos, getDocumentIds, buildLessons } from "../util/index";
import { Link } from "react-router-dom";

export default function StudyPage(props) {
  const study = props.location.study;

  //make a call to vimeo ✅
  //make a call to dropbox ✅
  //combine lessons
  //render lessons in a list

  const videos = getVideos(study.vimeoFolder); //videos at data.data
  const documents = getDocumentIds(study.dropBoxFolder); //docs at data.entries

  const lessons = Promise.all([videos, documents]).then((values) => {
    return buildLessons(values[0], values[1]);
  });

  const lessonList = lessons.map((lesson) => (
    <li key={lesson.id}>
      <h4>lesson.video.name</h4>
      <img src={DocumentIcon} href={lesson.notesLink} />
    </li>
  ));

  return (
    <div>
      <div className="study-container">
        <div className="description">
          <h3 className="description-title">{study.name}</h3>
          <p className="description-body">Study Description</p>
        </div>
        <div className="lesson-list">
          <h3 className="lesson-list-title">Available Lessons</h3>
          <ul>{lessonList}</ul>
        </div>
      </div>
    </div>
  );
}
