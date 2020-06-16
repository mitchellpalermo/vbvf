import React, { useState, useEffect } from "react";
import "../css/lesson-block.scss";
import PlayIcon from "../images/lesson-page/play-outline.svg";
import DocumentIcon from "../images/lesson-page/document.svg";
import { getStudyNotes } from "../util/index";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

export default function LessonBlock(props) {
  useEffect(() => {
    getStudyNotes(props.document).then((link) => {
      setDocLink(link);
    });
  }, [props.document]);
  function createMarkup() {
    return { __html: props.video.embed.html };
  }

  const [docLink, setDocLink] = useState("");
  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

  return (
    <div className="lesson-block">
      <h4 className="lesson-block-title">{props.video.name}</h4>

      <span className="lesson-block-icon" onClick={modalToggle}>
        <img alt="play icon" src={PlayIcon} />
        Watch
      </span>
      <Modal isOpen={modal} toggle={modalToggle} size="lg">
        <ModalHeader toggle={modalToggle}>{props.video.name}</ModalHeader>
        <ModalBody>
          <div className="lesson-modal">
            <div
              className="lesson-modal-video"
              dangerouslySetInnerHTML={createMarkup()}
            />

            <div className="lesson-modal-button">
              <Button color="info" onClick={() => window.open(docLink.href)}>
                Download notes
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <span
        className="lesson-block-icon"
        role="button"
        onClick={() => window.open(docLink.href)}
        target="_blank"
      >
        <img alt="play icon" src={DocumentIcon} />
        Notes
      </span>
    </div>
  );
}
