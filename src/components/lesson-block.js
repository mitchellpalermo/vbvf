import React, { useState, useEffect } from "react";
import "../css/lesson-block.scss";
import PlayIcon from "../images/lesson-page/play-outline.svg";
import DocumentIcon from "../images/lesson-page/document.svg";
import { getStudyNotesSimple, getStudyNotes } from "../util/index";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function LessonBlock(props) {
  useEffect(() => {
    getStudyNotes(props.document).then((link) => {
      console.log(link);
      setDocLink(link);
    });
  }, []);
  function createMarkup() {
    return { __html: props.video.embed.html };
  }

  const [docLink, setDocLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);
  const dualToggle = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
    setModal(!modal);
  };
  return (
    <div className="lesson-block">
      <h5 className="lesson-block-title">{props.video.name}</h5>
      <Link onClick={modalToggle}>
        <img className="lesson-block-icon" src={PlayIcon} />
        <span>Watch</span>
      </Link>
      <Modal isOpen={modal} toggle={modalToggle} size="lg">
        <ModalHeader toggle={modalToggle}>{props.video.name}</ModalHeader>
        <ModalBody>
          <div className="lesson-modal">
            <div
              className="lesson-modal-video"
              dangerouslySetInnerHTML={createMarkup()}
            />

            <div className="lesson-modal-button">
              <Button color="info">
                Download notes
                <img src={DocumentIcon} />
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <span
        role="button"
        onClick={() => window.open(docLink.href)}
        target="_blank"
      >
        <img className="lesson-block-icon" src={DocumentIcon} />
        <span>Download Notes</span>
      </span>
    </div>
  );
}
