import React, { useState } from "react";
import { Button } from "reactstrap";

export default function TabStyleSelector(props) {
  // Data looks like this
  // options: [
  //     {
  //         title: "",
  //         desc: "",
  //         link: ""
  //     },
  //     {
  //         title: "",
  //         desc: "",
  //         link: ""
  //     }
  // ]

  const [selectedOption, setSelectedOption] = useState(`${props.options[0]}`);
  return (
    <div>
      <ul>
        {/* Tab options go here */}
        {props.options.map((option) => (
          <h3
            className={`${option == selectedOption ? "activeOption" : null} `}
          >
            {" "}
            {/*apply style if option is selected*/}
            {option.title}
          </h3>
        ))}
      </ul>
      <div>
        <p>{selectedOption.desc}</p>
        {selectedOption.link && (
          <Button
            title={selectedOption.buttonTitle}
            link={selectedOption.link}
          />
        )}
      </div>
    </div>
  );
}
