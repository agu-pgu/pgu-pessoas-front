import React, { useState } from "react";
import "./Administration.scss";
import Sector from "./Sector/Sector";
import Coordination from "./Coordination/Coordination";
import Functions from "./Functions/Functions";
import Region from "./Region/Region";
import Core from "./Core/Core";
import Positions from "./Positions/Positions";
import Relationship from "./Relationship/Relationship";
import Unit from "./Unit/Unit";
import CID from "./CID/CID";
import Ticket from "./Ticket/Ticket";
import Contest from "./Contest/Contest";
import Career from "./Career/Career";
import Removal from "./Removal/Removal";
import Vacation from "./Vacation/Vacation";
import WorkRegime from "./WorkRegime/WorkRegime";

export default function Administration() {
  const [currentPage, setCurrentPage] = useState("Sector");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="administration-container">
        <div className="button-container-administration">
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Sector")}
          >
            Setor
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Coordination")}
          >
            Coordenação
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Function")}
          >
            Função
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Core")}
          >
            Núcleo
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Positions")}
          >
            Cargos
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Region")}
          >
            Região
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Unit")}
          >
            Unidade
          </button>
          {/* <button
            className="button-administration"
            onClick={() => handleButtonClick("Relationship")}
          >
            Relação
          </button> */}
          <button
            className="button-administration"
            onClick={() => handleButtonClick("CID")}
          >
            CID
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Ticket")}
          >
            Ingresso
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Contest")}
          >
            Concurso
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Career")}
          >
            Carreira
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Afastamento
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Vacation")}
          >
            Férias
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("WorkRegime")}
          >
            Regime de trabalho
          </button>
        </div>
      </div>
      <div className="content-container-administration">
        {currentPage === "Sector" && <Sector />}
        {currentPage === "Coordination" && <Coordination />}
        {currentPage === "Function" && <Functions />}
        {currentPage === "Core" && <Core />}
        {currentPage === "Positions" && <Positions />}
        {currentPage === "Region" && <Region />}
        {currentPage === "Unit" && <Unit />}
        {/* {currentPage === "Relationship" && <Relationship />} */}
        {currentPage === "CID" && <CID />}
        {currentPage === "Ticket" && <Ticket />}
        {currentPage === "Contest" && <Contest />}
        {currentPage === "Career" && <Career />}
        {currentPage === "Removal" && <Removal />}
        {currentPage === "Vacation" && <Vacation />}
        {currentPage === "WorkRegime" && <WorkRegime />}
      </div>
    </>
  );
}
