import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define custom icon options
const redIconOptions = {
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
};

// Create custom icon using Leaflet's Icon class
const redIcon = L.icon(redIconOptions);

// Coordinates for the locations
const locations = [
  { name: "New Zealand", position: [-40.9006, 174.886], icon: redIcon },
  { name: "Sri Lanka", position: [7.8731, 80.7718], icon: redIcon },
];

const CompanyMap = () => {
  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "500px", width: "100%" }}
        className="rounded-lg shadow-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            icon={location.icon || null} // Use custom icon if defined, otherwise default marker
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CompanyMap;
