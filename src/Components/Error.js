import React from "react";
import logo from "../assets/fail2.png";
import "animate.css";
const Error = () => {
  return (
    <div className="error-container ">
      <img
        src={logo}
        alt="fail"
        className="animate__animated animate__headShake"
      />
      <p className="error-msg">No matching ip found, please enter a new one.</p>
    </div>
  );
};

export default Error;
