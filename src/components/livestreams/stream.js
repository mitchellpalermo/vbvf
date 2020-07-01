import React, { useEffect, useState } from "react";
import { getDocumentIds, getStudyNotes } from "../../util/index";
import { Link } from "react-router-dom";
import { Spinner, Button } from "reactstrap";
import "../../css/stream.scss";

export default function Stream(props) {
  const [studyMaterials, setStudyMaterials] = useState(true);
  const [studyMaterialsIsLoading, setStudyMaterialsIsLoading] = useState(true);

  useEffect(() => {
    getDocumentIds(props.dropBoxFolder).then((docIdArr) => {
      const arrLength = docIdArr.data.entries.length - 1;
      const document = docIdArr.data.entries[arrLength];
      getStudyNotes(document).then((studyMaterial) => {
        setStudyMaterials(studyMaterial);
        setStudyMaterialsIsLoading(false);
      });
    });
  }, []);

  return (
    <div className="stream">
      <div className="stream-video-player">
        <iframe
          title="Tuesday Service"
          src={props.streamUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div className="stream-info">
        {studyMaterialsIsLoading ? (
          <>
            <p>Loading Study Notes</p> <Spinner color="dark" />
          </>
        ) : (
          <>
            <div className="stream-info-title-link">
              <h2>{props.title}</h2>
              <a
                target="blank"
                rel="noopener noreferrer"
                href="#"
                onClick={() => window.open(studyMaterials.href)}
              >
                View study materials
              </a>
            </div>
            <p>{props.description}</p>
            <Link to={props.seriesLink}>Watch the rest of this series</Link>
          </>
        )}
      </div>
    </div>
  );
}
