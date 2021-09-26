import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-area">
      <h1>Choose your Robots</h1>
      <p>
        Be an awesome robot manager and get ready
        <br />
        for the upcoming tournament!
        <br />
        Your initial budget is <span>$1 Billion</span> 🤯
        <br />
        Keep selecting untill the funds end.
      </p>
    </div>
  );
};

export default Header;
