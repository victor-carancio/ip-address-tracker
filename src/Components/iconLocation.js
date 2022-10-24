import L from "leaflet";
import marker from "../assets/marker.svg";

export const iconLocation = L.icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
