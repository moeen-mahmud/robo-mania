import React from "react";
import "./Robot.css";

const Robot = (props) => {
  const { avatar, call_code, made, name, value, version } = props.robot;
  return (
    <div className="robot">
      <img src={avatar} alt={call_code} />
      <p className="robo-name">{name.slice(0, 10)}</p>
      <p className="robo-code">
        Code Name: <span>{call_code.slice(0, 10)}</span>
      </p>
      <p className="robo-company">
        Made by: <span>{made.slice(0, 10)}</span>
      </p>
      <p className="robo-value">
        Value: <span>${value}</span>
      </p>
      <p className="robo-version">
        Version: <span>{version}</span>
      </p>
      <button onClick={() => props.handleClick(props.robot)}>Purchase</button>
    </div>
  );
};

export default Robot;
