import React from "react";

const Robot = (props) => {
  const { avatar, call_code, made, name, value, version } = props.robot;
  return (
    <div className="robot">
      <img src={avatar} alt={call_code} />
      <p className="robo-name">{name}</p>
      <p className="robo-code">{call_code}</p>
      <p className="robo-company">Made by: {made}</p>
      <p className="robo-value">Value: {value}</p>
      <p className="robo-version">Version: {version}</p>
    </div>
  );
};

export default Robot;
