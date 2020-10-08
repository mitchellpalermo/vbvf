import React from "react";
import "../css/home.scss";
import Button from "../components/button";
import ConnectionImage from "../images/Connection_Meeting_Square.jpg";
import CrownOfThorns from "../images/matthew_crown.png";
import { Link } from "react-router-dom";
import MissionBanner from "../components/mission-banner";
import SecondSamuel from "../images/home_page/2_Samuel.jpg";

// function useOnScreen(ref, rootMargin = "0px") {
//   // State and setter for storing whether element is visible
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Update our state when observer callback fires

//         setIntersecting(entry.isIntersecting);
//       },
//       {
//         rootMargin,
//       }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => {
//       observer.unobserve(ref.current);
//     };
//   }, []); // Empty array ensures that effect is only run on mount and unmount

//   return isIntersecting;
// }

const Home = () => {
  // const ref = useRef();
  // const onScreen = useOnScreen(ref, "-100px");

  return (
    <div>
      <div className="main-header">
        <div className="main-header-titles">
          <h1>Trust the Word</h1>
          <h2 style={{ color: "white" }}>John 1:1</h2>

          <div className="main-header-buttons">
            <Button link="/livestream" size="medium" title="View livestream" />
            <Button link="/attend" size="medium" title="Attend a service" />
          </div>
        </div>
        <span className="see-more-arrow" />
      </div>
      <MissionBanner />
      <div className="secondary-content">
        <div id="connection-meeting" className="secondary-content-block">
          <div className="secondary-content-block-words">
            <h2>Connect with us!</h2>
            <p>
              Hear about our vision, beliefs and how you can join in our
              journey. Visit our Connect Page to learn how you can make VBVF
              your church.
            </p>
            <Button link="/connect" size="medium" title="Connect Page" />
          </div>
          <img
            loading="lazy"
            src={ConnectionImage}
            alt="connection meeting logo"
          />
        </div>
      </div>
      <div>
        <div className={`series-promo `} id="samuel-series">
          <img src={SecondSamuel} alt="" />

          <span className="series-promo-desc">
            <p>
              The book of second Samuel continues the historical account of
              David's rise as king of Israel. The story picks up where first
              Samuel ends, as David contends with the deaths of Saul and his
              best friend, Jonathan, and the fight for the throne of Israel
              begins. The book traces the rise of David to power, his fall into
              temptation and the discipline of the Lord, and his renewal as a
              man after God's own heart.{" "}
            </p>
            <Button
              title={`Listen to 2 Samuel`}
              size="small"
              link={`/bible-studies/2-Samuel`}
            />
          </span>
        </div>
        <div className="series-promo" id="matthew-series">
          <span className="series-promo-desc">
            <h2>Current Series</h2>
            <p>
              As we present this important book, we’ll give careful attention to
              the details without losing sight of Matthew’s major ideas and
              themes. Together with our previous studies in Luke and John, we’re
              rounding out the full story of Jesus’ arrival and work on earth.
              Every Christian can profit from such a grounding.
            </p>
            <Link
              to={{
                pathname: "/sermon-redirect",
                deepDive: "bible-studies/gospel-of-matthew",
              }}
            >
              <Button size="small" title="Listen to Matthew" />
            </Link>
          </span>
          <img loading="lazy" src={CrownOfThorns} alt="crown of thorns" />
        </div>
      </div>
    </div>
  );
};

export default Home;
