import React, { useState } from "react";
import "../css/lesson-block.scss";
import PlayIcon from "../images/lesson-page/play-outline.svg";
import DocumentIcon from "../images/lesson-page/document.svg";
import AudioIcon from "../images/lesson-page/music-notes.svg";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Button from "./button";

export default function LessonBlock(props) {
  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);
  return (
    <div className="lesson-block">
      <span className="lesson-block-title">
        <h4 className="lesson-block-title-lesson">{`Lesson ${props.lessonNumber}`}</h4>
        {/* only render verses covered if props contains it */}
        {props.versesCovered && (
          <h5 className="lesson-block-title-verses">{props.versesCovered}</h5>
        )}
      </span>
      {/* render video */}
      {props.videoId && (
        <span className="lesson-block-icon" onClick={modalToggle}>
          <img alt="play icon" src={PlayIcon} />
          Watch
        </span>
      )}
      <Modal isOpen={modal} toggle={modalToggle} size="lg">
        <ModalHeader toggle={modalToggle}>{}</ModalHeader>
        <ModalBody>
          <div className="lesson-modal">
            <h3>{props?.versesCovered}</h3>
            <div className="lesson-modal-video">
              <iframe
                allowFullScreen
                title={props.versesCovered}
                src={`https://player.vimeo.com/video/${props.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
              ></iframe>
            </div>
            <div className="lesson-modal-button">
              <Button
                title="Download notes"
                buttonFunc={() => window.open(props.notesUrl)}
              />
            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* render audio */}
      {props.audioLink && (
        <span
          className="lesson-block-icon"
          onClick={() => {
            window.open(props.audioLink.split("?")[0]);
          }}
        >
          <img alt="audio icon" src={AudioIcon} />
          Listen
        </span>
      )}
      {/* render notes */}
      {props.notesUrl && (
        <span
          className="lesson-block-icon"
          role="button"
          onClick={() => window.open(props.notesUrl)}
          target="_blank"
        >
          <img alt="play icon" src={DocumentIcon} />
          Notes
        </span>
      )}
    </div>
  );
}
