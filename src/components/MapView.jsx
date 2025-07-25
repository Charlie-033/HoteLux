import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = [41.8719, 12.5674];
  return (
    <div className="pt-8 flex flex-col items-center">
      <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl pt-10">
        FIND US ON MAP
      </h1>
      <p className="text-center w-4/5 lg:w-3/5 mx-auto pb-12">
        Locate us effortlessly! Our interactive map provides precise directions
        to our doorstep. Simply click the "Find Us on Map" link to view our
        exact location, plan your route, and discover nearby landmarks. We're
        easy to find and look forward to welcoming you soon, whether you're
        driving, walking, or using public transport.
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-5 px-5 pb-12 pt-7">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", borderRadius: "10px", height: "420px", maxHeight: "620px" }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <strong>Rome</strong> <br /> Capital of Italy 🇮🇹.
            </Popup>
          </Marker>
        </MapContainer>
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          }}
          className="w-full lg:w-[50%]"
        >
          <h2 className="text-2xl lg:text-3xl">Your Gateway to Rome!</h2>
        
          <p className="font-semibold mb-2">City Name/ Regison: Rome</p>
          <p className="font-semibold mb-2">
            Hotel Name: Lakeside Boutique Resort
          </p>
          <p className="font-semibold mb-2">
            Specific Landmarks/Attractions: Colosseum, Roman Forum, Pantheon,
            Trevi Fountain, Spanish Steps, Vatican City (St. Peter's Basilica,
            Vatican Museums), Piazza Navona, Galleria Borghese.{" "}
          </p>
          <div className="font-semibold mb-2">
            Neighborhood Name:{" "}
            <ul>
              <li>Trastevere (e.g., "charming Trastevere neighborhood")</li>
              <li>Monti (e.g., "historic Monti district")</li>
              <li>Prati (e.g., "upscale Prati area")</li>
              <li>
                Spanish Steps/Trevi Fountain area (e.g., "the iconic Spanish
                Steps area")
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
