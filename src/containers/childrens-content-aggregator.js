import React, { useState, useEffect } from "react";

import "../css/childrens-content-aggregator.scss";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardSubtitle } from "reactstrap";
import { sanity } from "../util/index";

export default function ChildrensContentAggregator() {
  const query = `*[_type == "childrensUnit"] | order(unitNumber asc) {
    unitNumber,
    title
  }`;
  const [childrensUnits, setChildrensUnits] = useState([]);

  useEffect(() => {
    sanity.fetch(query).then((results) => setChildrensUnits(results));
  }, [query]);

  return (
    <div className="units">
      <div className="units-desc">
        <h1>Children's Teaching Materials</h1>
      </div>
      {childrensUnits.map((unit) => (
        <Link
          key={unit.unitNumber}
          className="unit-link"
          to={`/childrens-content/unit-${unit.unitNumber}`}
        >
          <div className="unit-icon">
            <Card body>
              <CardTitle>{`Unit ${unit.unitNumber}`}</CardTitle>
              <CardSubtitle>{unit.title}</CardSubtitle>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
}
