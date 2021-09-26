// Importing necessary files
import React from "react";
import "./Selection.css";

// The Selection component
const Selection = (props) => {
  const { selection } = props;

  //Get the selected robots and filtered them as unique item
  const robotName = [];
  const robotValue = [];
  const uniqueName = [];
  const uniqueValue = [];

  //This will loop through the data and push them to the general arrays
  for (const robot of selection) {
    if (robotName.indexOf(robot) === -1) {
      robotName.push(robot.name);
    }
    if (robotValue.indexOf(robot) === -1) {
      robotValue.push(robot.value);
    }

    // This two loops will filter out the unique item from the general arrays
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

  // Calculating the total value
  const reducer = (prevValue, currentValue) => prevValue + currentValue;
  const totalValue = uniqueValue.reduce(reducer, 0);

  return (
    <div>
      <h2>Total Selection: {uniqueName.length}</h2>
      <h3>
        Total Value: <span>${totalValue}</span>
      </h3>
      {/* Showing the selected item in the UI */}
      {uniqueName.map((name) => (
        <div className="selected-robots" key={name}>
          <h4>{name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Selection;
