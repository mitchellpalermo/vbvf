import React, { useState } from "react";
import "../css/lesson-block.scss";
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
      <div className="lesson-block-icons">
        {/* render video */}
        {props.videoId && (
          <span className="lesson-block-icons-image" onClick={modalToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Watch
          </span>
        )}
        {/* render audio */}
        {props.audioLink && (
          <span
            className="lesson-block-icons-image"
            onClick={() => {
              window.open(props.audioLink.split("?")[0]);
            }}
          >
            {/* <img alt="listen to lesson audio" src={AudioIcon} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            Listen
          </span>
        )}
        {/* render notes */}
        {props.notesUrl && (
          <span
            className="lesson-block-icons-image"
            role="button"
            onClick={() => window.open(props.notesUrl)}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clipRule="evenodd"
              />
            </svg>
            Sermon <br />
            Manuscript
          </span>
        )}
        {props.questionsUrl && (
          <span
            className="lesson-block-icons-image"
            role="button"
            onClick={() => window.open(props.questionsUrl)}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            Application <br />
            Questions
          </span>
        )}
      </div>
    </div>
  );
}
