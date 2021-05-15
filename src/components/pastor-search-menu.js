import React, { useState } from "react";
import "../css/pastor-search-menu.scss";

export default function PastorSearchMenu(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  return (
    <div className={`mobile-menu ${menuCollapsed ? "collapsed" : "visible"}`}>
      <span onClick={() => setMenuCollapsed(!menuCollapsed)}>
        {menuCollapsed ? "Tap for Menu" : "Tap to Close"}
      </span>
      <ul>
        <li
          onClick={() => props.setParentState("The Opportunity")}
          className={
            props.currentComponent.includes("Opportunity") ? "selected" : null
          }
        >
          The Opportunity
        </li>
        <li
          onClick={() => props.setParentState("About VBVF")}
          className={
            props.currentComponent.includes("About") ? "selected" : null
          }
        >
          About VBVF
        </li>
        <li
          onClick={() => props.setParentState("What We Believe")}
          className={
            props.currentComponent.includes("Believe") ? "selected" : null
          }
        >
          What We Believe
        </li>
        <li
          onClick={() => props.setParentState("The Successful Candidate")}
          className={
            props.currentComponent.includes("Candidate") ? "selected" : null
          }
        >
          The Successful Candidate Will...
        </li>
        <li
          onClick={() => props.setParentState("Hiring Process")}
          className={
            props.currentComponent.includes("Hiring") ? "selected" : null
          }
        >
          The Hiring Process
        </li>
        <li
          onClick={() => props.setParentState("How to Apply")}
          className={
            props.currentComponent.includes("Apply") ? "selected" : null
          }
        >
          How to Apply
        </li>
      </ul>
    </div>
  );
}
