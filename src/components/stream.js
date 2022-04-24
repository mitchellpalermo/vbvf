import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//SPINNER ONLY NEEDED IF LOADING NOTES
import { Spinner } from "reactstrap";
import "../css/stream.scss";
import { sanity } from "../util/index";
import ConnectWidget from "../components/connect-widget";

export default function Stream(props) {
  //eslint-disable-next-line
  const [studyMaterials, setStudyMaterials] = useState(null);
  //eslint-disable-next-line
  const [studyMaterialsIsLoading, setStudyMaterialsIsLoading] = useState(true);

  const docQuery = `*[_type == "lesson" && series->title == $seriesName] | order(_createdAt desc) [0] {
    "notesUrl": notes.asset->url
  }`;
  const params = { seriesName: props.title };
  useEffect(() => {
    if (!props.isVbvmiStudy) {
      //if it's a vbvmi study don't fetch the docs
      sanity
        .fetch(docQuery, params)
        .then((document) => {
          setStudyMaterials(document);
        })
        .catch((error) => console.log(error));
      setStudyMaterialsIsLoading(false);
    }
    //eslint-disable-next-line
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
      {/* NOTICE: the code below only works when the notes have been added to our
      site ahead of time. */}
      <div className="stream-info">
        {studyMaterialsIsLoading && !props.isVbvmiStudy ? ( //don't show loading spinner if vbvmistudy = true
          <>
            <p>Loading Study Notes</p> <Spinner color="dark" />
          </>
        ) : (
          <>
            <div className="stream-info-title-link">
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
          </>
        )}
      </div>
      <div className="stream-supporting-materials">
        <ConnectWidget />
        <div className="stream-supporting-materials-from-cms">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          {props.seriesLink && (
            <Link to={props.seriesLink}>Watch the rest of this series</Link>
          )}
        </div>
      </div>
    </div>
  );
}
