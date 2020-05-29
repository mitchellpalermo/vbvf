import React from "react";

export default function LessonBlock(props) {
  return (
    <div className="lesson-block" key={props.id}>
      <h5>props.video.name</h5>
      <img />
      //this will be a link to open a modal with the video and document inside
      <img></img> //this will be a link to view the notes
    </div>
  );
}
