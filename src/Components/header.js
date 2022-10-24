import React, { useState } from "react";
import arrowImg from "../assets/icon-arrow.svg";
import { useGlobalContext } from "../context/context";

const NavHeader = () => {
  const { ip, setIp, error } = useGlobalContext();
  const [input, isInput] = useState(ip);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIp(input);
  };
  return (
    <section>
      <div className="header-container">
        <h2 className="header-title">IP Address Tracker</h2>
        <form onSubmit={handleSubmit} className="input-container">
          <input
            type="text"
            className="ip-input"
            onChange={(e) => isInput(e.target.value)}
            value={input}
          />
          <button type="submit" className="btn-submit">
            <img src={arrowImg} alt="arrow" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NavHeader;
