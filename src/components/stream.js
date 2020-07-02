import React, { useEffect, useState } from "react";
import { getDocumentIds, getStudyNotes } from "../util/index";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import "../css/stream.scss";

export default function Stream(props) {
  const [studyMaterials, setStudyMaterials] = useState(null);
  const [studyMaterialsIsLoading, setStudyMaterialsIsLoading] = useState(true);

  useEffect(() => {
    if (props.dropBoxFolder != null) {
      getDocumentIds(props.dropBoxFolder).then((docIdArr) => {
        const arrLength = docIdArr.data.entries.length - 1;
        const document = docIdArr.data.entries[arrLength];
        getStudyNotes(document).then((studyMaterial) => {
          setStudyMaterials(studyMaterial);
          setStudyMaterialsIsLoading(false);
        });
      });
    } else {
      setStudyMaterialsIsLoading(false);
    }
  }, [props.dropBoxFolder]);

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
              {studyMaterials && (
                <div>
                  <span>
                    We encourage you to follow along in the provided study
                    materials.
                  </span>
                  <button
                    target="blank"
                    rel="noopener noreferrer"
                    onClick={() => window.open(studyMaterials.href)}
                  >
                    View study materials
                  </button>
                </div>
              )}
            </div>
            <p>{props.description}</p>

            <Link to={props.seriesLink}>Watch the rest of this series</Link>
          </>
        )}
      </div>
    </div>
  );
}
