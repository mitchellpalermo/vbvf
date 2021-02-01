import React, { useState, useEffect } from "react";
import "../css/giving.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { getMobileOperatingSystem } from "../util/index";
const Giving = (props) => {
  const [onlineModal, setOnlineModal] = useState(false);
  const [mailModal, setMailModal] = useState(false);

  const onlineModalToggle = () => setOnlineModal(!onlineModal);
  const mailModalToggle = () => setMailModal(!mailModal);
  const [givingLink, setGivingLink] = useState("/giving-redirect");

  useEffect(() => {
    getMobileOperatingSystem() === "iOS"
      ? setGivingLink("/giving-redirect")
      : setGivingLink(
          "https://vbvf.churchcenter.com/giving?open-in-church-center-modal=true"
        );
  }, [givingLink]);

  return (
    <div className="giving">
      <div className="giving-desc">
        <h1>Giving to VBVF</h1>
        <p>
          We're so grateful that you're interested in supporting Verse by Verse
          Fellowship.
        </p>
      </div>
      <Button size="large" color="green" link={givingLink} title="Give Now" />

      <div className="giving-option-question">
        <p>I have questions about giving:</p>
        <div className="giving-option-question-icons">
          <div
            onClick={onlineModalToggle}
            className="giving-option-question-icons-option"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
            </svg>
            <p>Online</p>
            <Modal isOpen={onlineModal} toggle={onlineModalToggle} size="lg">
              <ModalHeader toggle={onlineModalToggle}>
                Giving Online
              </ModalHeader>
              <ModalBody>
                <div className="giving-video">
                  <iframe
                    title="Giving Online"
                    src="https://www.youtube.com/embed/NBxfSTsuc78"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <p>
                  The video above explains the process of giving online. If you
                  have more questions, please send us an email at{" "}
                  <Link href="mailto:info@vbvf.org">info@vbvf.org</Link>
                </p>
              </ModalBody>
            </Modal>
          </div>
          <div
            onClick={mailModalToggle}
            className="giving-option-question-icons-option"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
            </svg>
            <p>By Mail</p>
            <Modal isOpen={mailModal} toggle={mailModalToggle} size="lg">
              <ModalHeader toggle={mailModalToggle}>Giving Online</ModalHeader>
              <ModalBody>
                <p>
                  If you would like to give by mail, please send your gift to:{" "}
                </p>
                <span className="giving-option-question-icons-option-mailing-address">
                  814 Arion Parkway, #410 San Antonio, TX 78216
                </span>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giving;
