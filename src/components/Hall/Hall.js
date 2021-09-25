import React, { useEffect, useState } from "react";
import Robot from "../Robot/Robot";

const Hall = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("./mockData.json")
      .then((res) => res.json())
      .then((data) => setRobots(data));
  }, []);

  return (
    <div className="hall-container">
      <div className="robots-area">
        {robots.map((robot) => (
          <Robot key={robot.id} robot={robot}></Robot>
        ))}
      </div>
      <div className="selection-area">
        <h3>Total Robots select</h3>
      </div>
    </div>
  );
};

export default Hall;
