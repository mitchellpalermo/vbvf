import React, { useState } from "react";
import "../css/lesson-block.scss";
import PlayIcon from "../images/lesson-page/play-outline.svg";
import DocumentIcon from "../images/lesson-page/document.svg";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

export default function LessonBlock(props) {
  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

  return (
    <div className="lesson-block">
      {props.videoId && (
        <>
          <h4 className="lesson-block-title">{props.title}</h4>
          <span className="lesson-block-icon" onClick={modalToggle}>
            <img alt="play icon" src={PlayIcon} />
            Watch
          </span>
          <Modal isOpen={modal} toggle={modalToggle} size="lg">
            <ModalHeader toggle={modalToggle}>{props.title}</ModalHeader>
            <ModalBody>
              <div className="lesson-modal">
                <div className="lesson-modal-video">
                  <iframe
                    allowFullScreen
                    title={props.title}
                    src={`https://player.vimeo.com/video/${props.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
                  ></iframe>
                </div>
                <div className="lesson-modal-button">
                  <Button
                    color="info"
                    onClick={() => window.open(props.notesUrl)}
                  >
                    Download notes
                  </Button>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </>
      )}
      <span
        className="lesson-block-icon"
        role="button"
        onClick={() => window.open(props.notesUrl)}
        target="_blank"
      >
        <img alt="play icon" src={DocumentIcon} />
        Notes
      </span>
    </div>
  );
}
