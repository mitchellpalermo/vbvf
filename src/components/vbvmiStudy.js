import React from "react";
import Button from "./button";
import { sanityUrlFor } from "../util/index";

import "../css/vbvmiStudy.scss";

export default function VbvmiStudy(props) {
  return (
    <div className="study">
      <span>
        <img
          alt=""
          src={sanityUrlFor(props.seriesImage).size(500, 300).url()}
        />
        <h1>
          The Book of <br />
          {props.title}
        </h1>
      </span>
      <p>{props.description}</p>
      <p>
        The teaching material is hosted by our sister ministry, Verse by Verse
        Ministry. Access that teaching using the button below.
      </p>
      <Button
        size="large"
        color="green"
        title={`Listen to ${props.title}`}
        buttonFunc={() => window.open(props.ministrySeriesLink)}
      />
    </div>
  );
}
