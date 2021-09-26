// Importing hooks
import React, { useEffect, useState } from "react";

// Importing the robot and selection components
import Robot from "../Robot/Robot";
import Selection from "../Selection/Selection";

// Importing style files
import "./Hall.css";

// The Hall component
const Hall = () => {
  //Set data to the states
  const [robots, setRobots] = useState([]);
  const [selection, setSelection] = useState([]);

  //Using effects for loading data
  useEffect(() => {
    fetch("./robotData.json")
      .then((res) => res.json())
      .then((data) => setRobots(data));
  }, []);

  //Click handler for selecting robots
  const handleClick = (robot) => {
    const newSelection = [...selection, robot];
    setSelection(newSelection);
  };

  return (
    <div className="hall-container">
      {/* Displaying all robots */}
      <div className="robots-area">
        {robots.map((robot) => (
          <Robot key={robot.id} robot={robot} handleClick={handleClick}></Robot>
        ))}
      </div>
      {/* Displaying the selected robots */}
      <div className="selection-area">
        <Selection selection={selection}></Selection>
      </div>
    </div>
  );
};

export default Hall;
