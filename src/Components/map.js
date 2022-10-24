import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useGlobalContext } from "../context/context";
import "leaflet/dist/leaflet.css";
import { iconLocation } from "./iconLocation";
import Loading from "./Loading";
import Error from "./Error";
import "animate.css";

const MapView = () => {
  const { ipData, error, isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && error) {
    return <Error />;
  }

  if (!error && !isLoading) {
    const { geoCode } = ipData;

    return (
      <MapContainer
        center={geoCode}
        zoom={13}
        scrollWheelZoom={false}
        className="animate__animated  animate__fadeIn"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={geoCode} icon={iconLocation}></Marker>
      </MapContainer>
    );
  }
};

export default MapView;
