import React from "react";
import "../css/lesson-block.scss";
import PlayIcon from "../images/lesson-page/play-outline.svg";
import DocumentIcon from "../images/lesson-page/document.svg";
import { getStudyNotes } from "../util/index";
export default function LessonBlock(props) {
  const downloadFile = (document) => {
    getStudyNotes(document);
  };

  return (
    <div className="lesson-block">
      <h5 className="lesson-block-title">{props.video.name}</h5>
      <img className="lesson-block-icon" src={PlayIcon} />
      {/* TODO: Study notes link isn't coming through */}
      <a href="#" onClick={() => downloadFile(props.document)}>
        <img className="lesson-block-icon" src={DocumentIcon} />
      </a>
    </div>
  );
}
