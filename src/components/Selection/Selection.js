import React from "react";
import "./Selection.css";

const Selection = (props) => {
  const { selection } = props;

  let total = 0;
  let totalSelection = 0;
  let robotName = [];
  let uniqueName = [];
  for (const robot of selection) {
    if (!robot.quantity) {
      robot.quantity = 1;
    }
    if (robotName.indexOf(robot) === -1) {
      robotName.push(robot.name);
    }
    for (const unique of robotName) {
      if (uniqueName.indexOf(unique) === -1) {
        uniqueName.push(unique);
      }
    }
    total = total + robot.value * robot.quantity;
    totalSelection = totalSelection + robot.quantity;
  }
  console.log(selection);

  return (
    <div>
      <h3>Total Selection: {totalSelection}</h3>
      {uniqueName.map((name) => (
        <div key={name.id}>
          <img src={name.avatar} alt={name.name} />
          <h4>{name.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Selection;
