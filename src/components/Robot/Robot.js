import React from "react";
import "./Robot.css";

const Robot = (props) => {
  const { avatar, call_code, made, name, value, version, address } =
    props.robot;
  return (
    <div className="robot">
      <img src={avatar} alt={call_code} />
      <p className="robo-name">{name.slice(0, 10)}</p>
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
          <p>{made.slice(0, 10)}</p>
          <p>{version}</p>
          <p>{address}</p>
          <p>${value}</p>
        </div>
      </div>
      <button onClick={() => props.handleClick(props.robot)}>Purchase</button>
    </div>
  );
};

export default Robot;
