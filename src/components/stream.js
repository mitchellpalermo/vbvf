import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import "../css/stream.scss";
import { sanity } from "../util/index";

export default function Stream(props) {
  const [studyMaterials, setStudyMaterials] = useState(null);
  const [studyMaterialsIsLoading, setStudyMaterialsIsLoading] = useState(true);

  const docQuery = `*[_type == "lesson" && series->title == $seriesName] | order(_createdAt desc) [0] {
    "notesUrl": notes.asset->url
  }`;
  const params = { seriesName: props.title };
  useEffect(() => {
    sanity.fetch(docQuery, params).then((document) => {
      console.log(document);
      setStudyMaterials(document);
      setStudyMaterialsIsLoading(false);
    });
  }, [docQuery]);

  return (
    <div className="stream">
      <div className="stream-video-player">
        <iframe
          title={props.title}
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
              {studyMaterials?.notesUrl && (
                <div>
                  <span>
                    We encourage you to follow along in the provided study
                    materials.
                  </span>
                  <button
                    target="blank"
                    rel="noopener noreferrer"
                    onClick={() => window.open(studyMaterials.notesUrl)}
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
