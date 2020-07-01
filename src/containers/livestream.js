import React, { useEffect, useState } from "react";
import "../css/livestream.scss";
import { Link } from "react-router-dom";
import { getVideos } from "../util/index";
import { Spinner, Button } from "reactstrap";
import { getDocumentIds, getStudyNotes } from "../util/index";
import Content from "../content/study-content";

import DocumentIcon from "../images/lesson-page/document.svg";

export default function Livestream() {
  const [sundayArchiveVideos, setSundayArchiveVideos] = useState({});
  const [studyMaterials, setStudyMaterials] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [studyMaterialsIsLoading, setStudyMaterialsIsLoading] = useState(true);

  const ephesians = Content.studies[0];

  useEffect(() => {
    getVideos("1553779").then((vidArr) => {
      setSundayArchiveVideos(vidArr.data.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getDocumentIds(ephesians.dropBoxFolder).then((docIdArr) => {
      const arrLength = docIdArr.data.entries.length - 1;
      const document = docIdArr.data.entries[arrLength];
      console.log(arrLength);
      console.log(docIdArr.data.entries);
      getStudyNotes(document).then((studyMaterial) => {
        setStudyMaterials(studyMaterial);
        setStudyMaterialsIsLoading(false);
      });
    });
  }, []);

  let today = new Date();

  const day = (today) => {
    if (
      today.getDay() === 2 &&
      today.getHours() >= 18 &&
      today.getHours() <= 23
    ) {
      return "tuesday";
    } else if (
      today.getDay() === 0 &&
      today.getHours() >= 10 &&
      today.getHours() <= 13
    ) {
      return "sunday";
    } else {
      return null;
    }
  };

  const noStreamMessage = (
    <p>
      Verse by Verse Fellowship livestreams its Tuesday and Sunday services.
      While there's not a service streaming right now, please feel free to check
      out some of our recent services below. Recordings of our services are
      available on our <Link to="/bible-studies">Bible Studies</Link> page.
    </p>
  );

  const sundayStream = (
    <div className="livestream-video-player">
      <iframe
        title="Sunday Service"
        src="https://vimeo.com/event/51649/embed"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
  const tuesdayStream = (
    <>
      <div className="livestream-content-video-player">
        <iframe
          title="Tuesday Service"
          src="https://vimeo.com/event/49116/embed"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        {studyMaterialsIsLoading ? (
          <>
            <p>Loading Study Notes</p> <Spinner color="dark" />
          </>
        ) : (
          <div className="livestream-content-info">
            <div>
              <h2>{ephesians.name}</h2>
              <p>{ephesians.description}</p>
            </div>
            <Button href={studyMaterials.href}>
              Follow along with today's study materials
              <img src={DocumentIcon} />
            </Button>
          </div>
        )}
      </div>
    </>
  );

  const streamArchive = () => {
    return sundayArchiveVideos.slice(0, 3).map((video) => (
      <>
        <h3>{video.name}</h3>
        <div
          className="livestream-video-player"
          dangerouslySetInnerHTML={createMarkup(video)}
        ></div>
      </>
    ));
  };

  function createMarkup(video) {
    return { __html: video.embed.html };
  }

  return (
    <div className="livestream">
      <h1>Livestream</h1>
      {isLoading ? (
        <>
          <p>Loading Services</p>
          <Spinner color="dark" />
        </>
      ) : (
        <div className="livestream-content">
          {tuesdayStream}
          {/* {day === "tuesday"
            ? tuesdayStream
            : day === "sunday"
            ? sundayStream
            : streamArchive()} */}
        </div>
      )}
    </div>
  );
}
