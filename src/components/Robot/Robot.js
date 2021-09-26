// Importing the React module
import React from "react";

// Importing the style file
import "./Robot.css";

// Importing Fontawesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

// The Robot component
const Robot = (props) => {
  //Get the key from data
  const { avatar, call_code, made, name, value, version, address } =
    props.robot;

  //Robot icon for button
  const robotIcon = <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>;

  return (
    // Individual Card for robot
    <div className="robot">
      <img src={avatar} alt={call_code} />
      {/* Robot full name */}
      <p className="robo-name">{name}</p>
      {/* Robot's primary information */}
      <div className="robo-info">
        <div>
          <p className="robo-code">Code Name:</p>
          <p className="robo-company">Made by:</p>
          <p className="robo-version">Version:</p>
          <p className="robo-address">Address:</p>
          <p className="robo-value">Value:</p>
        </div>
        <div>
          <p>{call_code.slice(0, 10)}</p>
          <p>{made.slice(0, 15)}</p>
          <p>{version}</p>
          <p>{address}</p>
          <p>${value}</p>
        </div>
      </div>
      {/* Button for selection */}
      <button onClick={() => props.handleClick(props.robot)}>
        Grab Me <span className="btn-icon">{robotIcon}</span>
      </button>
    </div>
  );
};

export default Robot;
