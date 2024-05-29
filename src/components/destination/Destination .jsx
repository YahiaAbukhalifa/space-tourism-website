import React, { useState } from "react";
import "./Destination.scss";
import { Destinations } from "./data";
import Header from "../header/Header";

const DestinationCard = ({ destination }) => {
  const { name, images, description, distance, travel } = destination;

  return (
    <div className="destination-card">
      <img src={images} alt={name} className="destination-image" />
      <div className="destination-details">
        <div className="detailes">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <ul>
            <li>
              AVG. DISTANCE <p>{distance}</p>
            </li>
            <li>
              Est. travel time <p>{travel}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DestinationsList = () => {
  const [selectedDestination, setSelectedDestination] = useState("Moon");

  const filteredDestinations = Destinations.filter(
    (destination) => destination.name === selectedDestination
  );

  return (
    <>
      <div className="destination">
        <Header />

        <div className="promoDestination">
          <p className="pageNumber">01</p>
          <p className="promoTxt">Pick your destination</p>
        </div>

        <div className="destinations-container">
          <div className="filter">
            <p
              className={selectedDestination === "Moon" ? "active" : ""}
              onClick={() => setSelectedDestination("Moon")}
            >
              Moon
            </p>
            <p
              className={selectedDestination === "Mars" ? "active" : ""}
              onClick={() => setSelectedDestination("Mars")}
            >
              Mars
            </p>
            <p
              className={selectedDestination === "Titan" ? "active" : ""}
              onClick={() => setSelectedDestination("Titan")}
            >
              Titan
            </p>
            <p
              className={selectedDestination === "Europa" ? "active" : ""}
              onClick={() => setSelectedDestination("Europa")}
            >
              Europa
            </p>
          </div>
        </div>

        <div className="destination-list">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DestinationsList;
