import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-curve";

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

const blueIconOptions = {
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
};

const redIcon = L.icon(redIconOptions);
const blueIcon = L.icon(blueIconOptions);

// Coordinates for the locations
const locations = [
  { name: "New Zealand", position: [-41.5000831, 172.8344077], icon: redIcon },
  { name: "Sri Lanka", position: [7.5554942, 80.7137847], icon: redIcon },
  { name: "Australia", position: [-24.7761086, 134.755], icon: blueIcon }, // Blue icon for Australia
  { name: "United Kingdom", position: [54.7023545, -3.2765753], icon: redIcon },
  { name: "Sweden", position: [59.6749712, 14.5208584], icon: redIcon },
];

// Function to create a Bézier curve path between two locations
const createCurvePath = (from, to) => {
  const controlPoint1 = [(from[0] + to[0]) / 2]; // Midpoint with some offset for curve height
  const controlPoint2 = [(from[0] + to[0]) / 2]; // Midpoint with some offset for curve height

  return [
    "M",
    from, // Move to the starting point
    "C",
    controlPoint1,
    controlPoint2,
    to, // Create curve with control points
  ];
};

const CurvedPolyline = ({ positions }) => {
  const map = useMap();

  React.useEffect(() => {
    if (L.curve) {
      const path = createCurvePath(positions[0], positions[1]);
      const curve = L.curve(path, { color: "red", weight: 1 }).addTo(map);

      return () => {
        map.removeLayer(curve);
      };
    }
  }, [map, positions]);

  return null;
};

const CompanyMap = () => {
  const AustraliaPosition = locations.find((location) => location.name === "Australia").position;

  return (
    <div className="w-full h-[600px]">
      <MapContainer
        center={[20, 80]}
        zoom={2}
        style={{ height: "600px", width: "100%" }}
        className="rounded-lg shadow-lg">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={location.icon || null}>
            <Tooltip permanent>{location.name}</Tooltip>
          </Marker>
        ))}
        {locations
          .filter((location) => location.name !== "Australia")
          .map((location, index) => (
            <CurvedPolyline key={index} positions={[AustraliaPosition, location.position]} />
          ))}
      </MapContainer>
    </div>
  );
};

export default CompanyMap;
