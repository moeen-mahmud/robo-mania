import React, { useEffect, useState } from "react";
import Robot from "../Robot/Robot";
import Selection from "../Selection/Selection";
import "./Hall.css";

const Hall = () => {
  const [robots, setRobots] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    fetch("./robotData.json")
      .then((res) => res.json())
      .then((data) => setRobots(data));
  }, []);

  const handleClick = (robot) => {
    const newSelection = [...selection, robot];
    setSelection(newSelection);
  };

  return (
    <div className="hall-container">
      <div className="robots-area">
        {robots.map((robot) => (
          <Robot key={robot.id} robot={robot} handleClick={handleClick}></Robot>
        ))}
      </div>
      <div className="selection-area">
        <Selection selection={selection}></Selection>
      </div>
    </div>
  );
};

export default Hall;
