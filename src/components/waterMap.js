
// components/WaterMap.js
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "react-leaflet-search/css/index.css";
import { ReactLeafletSearch } from "react-leaflet-search";
 
const WaterMap = () => {
  const mapCenter = [51.505, -0.09]; // Default map center coordinates
 
  const handleSearch = (data) => {
    // Handle search results here
    console.log("Search results:", data);
  };
 
  return (
    <div className="map-container">
      <MapContainer center={mapCenter} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ReactLeafletSearch position="topleft" inputPlaceholder="Search for a location..." zoom={15} showMarker={true} showPopup={false} closeResultsOnClick={true} provider="OpenStreetMap" providerOptions={{ region: "us" }} search={handleSearch} />
      </MapContainer>
    </div>
  );
};
 
export default WaterMap;
