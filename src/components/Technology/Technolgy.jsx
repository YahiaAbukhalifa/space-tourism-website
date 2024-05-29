import React, { useState } from 'react';
import "./Technolgy.scss";
import Header from '../header/Header';
import { Technologies } from "./techData";

const TechnolgyCard = ({ technology }) => {
  const { name, images, description } = technology;

  return (
    <div className="tech">
      <div className="technolgy-card">
        <img src={images} alt={name} className="technolgy-image" />
        <div className="technolgy-details">
          <div className="detailes">
            <p className='promo'>THE TERMINOLOGY…</p>
            <h3>{name}</h3>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnologiesList = () => {
  const [selectedTech, setSelectedTech] = useState("Launch vehicle");

  const filteredTechs = Technologies.filter(
    (technology) => technology.name === selectedTech
  );

  return (
    <div className="Technolgy">
      <Header/>
      <div className="main-container">
        <div className="promotech">
          <p className="pageNumber">03</p>
          <p className="promoTxt">SPACE LAUNCH 101</p>
        </div>
        <div className="tech-container">
          <div className="filter">
            <p
              className={selectedTech === "Launch vehicle" ? "active" : ""}
              onClick={() => setSelectedTech("Launch vehicle")}
            >
              1
            </p>
            <p
              className={selectedTech === "Spaceport" ? "active" : ""}
              onClick={() => setSelectedTech("Spaceport")}
            >
              2
            </p>
            <p
              className={selectedTech === "Space capsule" ? "active" : ""}
              onClick={() => setSelectedTech("Space capsule")}
            >
              3
            </p>
          </div>
        </div>
        <div className="tech-list">
          {filteredTechs.map((technology) => (
            <TechnolgyCard key={technology.name} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesList;
