import React from "react";
import { useGlobalContext } from "../context/context";
import "animate.css";

const AddressInfo = () => {
  const { ipData, isLoading, error } = useGlobalContext();
  const { ip, location, time, isp } = ipData;

  if (!error && !isLoading) {
    return (
      <section className="address-info animate__animated animate__fadeInDown">
        <div className="info-container">
          <div className="info">
            <p>IP ADDRESS</p>
            <h4>{ip}</h4>
          </div>
          <div className="space"></div>
          <div className="info">
            <p>LOCATION</p>
            <h4>{location}</h4>
          </div>
          <div className="space"></div>
          <div className="info">
            <p>TIMEZONE</p>
            <h4>{time}</h4>
          </div>
          <div className="space"></div>
          <div className="info">
            <p>ISP</p>
            <h4>{isp}</h4>
          </div>
        </div>
      </section>
    );
  }
};

export default AddressInfo;
