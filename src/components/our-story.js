import React from "react";
import AboutMenu from "./about-menu";
import "../css/our-story.scss";

export default function OurStory() {
  return (
    <div className="our-story">
      <AboutMenu />
      <div className="our-story-text">
        <h1>Our Story</h1>
        <p>
          Verse By Verse Fellowship (VBVF) is the result of a church planting
          effort by Verse By Verse Ministry International (VBVMI), a
          non-denominational, Bible teaching ministry headquartered in San
          Antonio, Texas. Steve Armstrong was the President from VBVMI’s
          inception until January 2021 when God called him home. VBVMI features
          the in-depth Bible teaching of Pastor Stephen Armstrong. The ministry
          is committed to providing compelling, verse-by-verse teaching of God’s
          word at no charge (2Cor 2:17), thus ensuring the whole counsel of God
          is proclaimed (Acts 20:27){" "}
        </p>
        <p>
          On March 6, 2022, Tony Caffey Joined VBVF as its Senior Pastor. Our
          vision at VBVF is to reassert the importance and necessity of the
          public proclamation of God’s word through expository Bible teaching
          from the pulpit. We believe that when the Bible is taught methodically
          and properly, good things happen: lives are changed, relationships are
          restored, marriages are strengthened, addictions are cured, ministries
          begin and souls are saved.
        </p>{" "}
        <p>
          {" "}
          share As Christ followers, we are commanded by sc ripture to be
          lifelong students of God’s Word and walk in community with each other.
          Come share in that mission at Verse By Verse Fellowship.
        </p>
      </div>
    </div>
  );
}
