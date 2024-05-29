import React, { useState } from "react";
import "./Crew.scss";
import { crew } from "./crewData";
import Header from "../header/Header";

const Crew = ({ crew }) => {
  const { name, images, role, bio } = crew;

  return (
    <div className="Crew-card">
      <img src={images} alt={name} className="crew-image" />
      <div className="crew-details">
        <div className="detailes">
          <p className="role">{role}</p>
          <h3>{name}</h3>
          <p className="bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

const CrewList = () => {
  const [selectedCrew, setSelectedCrew] = useState("Douglas Hurley");

  const filteredCrews = crew.filter((crew) => crew.name === selectedCrew);

  return (
    <>
      <div className="crew">
        <Header />
        <div className="promoCrew">
          <p className="pageNumber">02</p>
          <p className="promoTxt">Meet your crew</p>
        </div>
        <div className="crew-container">
          <div className="Crew-list">
            {filteredCrews.map((crew) => (
              <Crew key={crew.name} crew={crew} />
            ))}
          </div>
          <div className="filter">
            <div
              className={selectedCrew === "Douglas Hurley" ? "active" : ""}
              onClick={() => setSelectedCrew("Douglas Hurley")}
            ></div>
            <div
              className={selectedCrew === "Mark Shuttleworth" ? "active" : ""}
              onClick={() => setSelectedCrew("Mark Shuttleworth")}
            ></div>
            <div
              className={selectedCrew === "Victor Glover" ? "active" : ""}
              onClick={() => setSelectedCrew("Victor Glover")}
            ></div>
            <div
              className={selectedCrew === "Anousheh Ansari" ? "active" : ""}
              onClick={() => setSelectedCrew("Anousheh Ansari")}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrewList;
