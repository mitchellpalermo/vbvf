import React, { useEffect, useState } from "react";
import "../css/livestream.scss";
import { Link } from "react-router-dom";
import { getVideos } from "../util/index";
import { Spinner } from "reactstrap";

export default function Livestream() {
  const [sundayArchiveVideos, setSundayArchiveVideos] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideos("1553779").then((vidArr) => {
      setSundayArchiveVideos(vidArr.data.data);
      setIsLoading(false);
    });
  }, []);

  let today = new Date();

  const contStyle = {
    padding: "56.25% 0 0 0",
    position: "relative",
  };
  const vidStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const sundayStream = (
    <div style={contStyle}>
      <iframe
        title="Sunday Service"
        src="https://vimeo.com/event/51649/embed"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={vidStyle}
      ></iframe>
    </div>
  );
  const tuesdayStream = (
    <div style={contStyle}>
      <iframe
        title="Tuesday Service"
        src="https://vimeo.com/event/49116/embed"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={vidStyle}
      ></iframe>
    </div>
  );

  function renderVideoContent(day) {
    console.log(day.getDay + day.getHours());
    if (day.getDay() === 0 && day.getHours() >= 10 && day.getHours() <= 13) {
      return sundayStream;
    } else if (
      day.getDay() === 2 &&
      day.getHours() >= 17 &&
      day.getMinutes() > 30
    ) {
      return tuesdayStream;
    } else if (day.getDay() !== 2 || day.getDay() !== 0) {
      return sundayArchiveVideos.slice(0, 3).map((video) => (
        <>
          <h3>{video.name}</h3>
          <div
            className="livestream-video-player"
            dangerouslySetInnerHTML={createMarkup(video)}
          ></div>
        </>
      ));
    }
  }

  function createMarkup(video) {
    return { __html: video.embed.html };
  }

  return (
    <div className="livestream">
      <h1>Livestream</h1>
      <p className="livestream-body">
        Verse by Verse Fellowship livestreams its Tuesday and Sunday services.
        While there's not a service streaming right now, please feel free to
        check out some of our recent services below. Recordings of our services
        are available on our <Link to="/bible-studies">Bible Studies</Link>{" "}
        page.
      </p>

      {isLoading ? (
        <>
          <p>Loading Services</p>
          <Spinner color="dark" />
        </>
      ) : (
        <div className="livestream-video">{renderVideoContent(today)}</div>
      )}
    </div>
  );
}
