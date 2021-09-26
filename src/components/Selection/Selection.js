import React from "react";
import "./Selection.css";

const Selection = (props) => {
  const { selection } = props;

  const robotName = [];
  const robotValue = [];
  const uniqueName = [];
  const uniqueValue = [];
  for (const robot of selection) {
    if (robotName.indexOf(robot) === -1) {
      robotName.push(robot.name);
    }
    if (robotValue.indexOf(robot) === -1) {
      robotValue.push(robot.value);
    }
    for (const unique of robotName) {
      if (uniqueName.indexOf(unique) === -1) {
        uniqueName.push(unique);
      }
    }
    for (const unique of robotValue) {
      if (uniqueValue.indexOf(unique) === -1) {
        uniqueValue.push(unique);
      }
    }
  }

  const reducer = (prevValue, currentValue) => prevValue + currentValue;
  const totalValue = uniqueValue.reduce(reducer, 0);

  return (
    <div>
      <h2>Total Selection: {uniqueName.length}</h2>
      <h3>
        Total Value: <span>${totalValue.toFixed(2)}</span>
      </h3>
      {uniqueName.map((name) => (
        <div className="selected-robots" key={name}>
          <h4>{name.slice(0, 10)}</h4>
        </div>
      ))}
    </div>
  );
};

export default Selection;
