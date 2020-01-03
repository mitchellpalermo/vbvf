import React from "react";
import "../css/scripture-verse.scss";

export default function ScriptureVerse(props) {
  return (
    <div className="scripture-container">
      <h3 className="scripture-verse">{props.verse}</h3>
      <h3 className="scripture-reference">{props.reference}</h3>
    </div>
  );
}
