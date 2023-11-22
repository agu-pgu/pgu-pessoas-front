import React, { useState } from "react";
import "./Administration.scss";

export default function Administration() {
  const [currentPage, setCurrentPage] = useState("Administration");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="administration-container">
        <div className="button-container-administration">
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Person")}
          >
            Setor
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Career")}
          >
            Coordenação
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Vacation")}
          >
            Função
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Núcleo
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Cargos
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Região
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Unidade
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Relação
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            CID
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Ingresso
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Concurso
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
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
            onClick={() => handleButtonClick("Removal")}
          >
            Férias
          </button>
          <button
            className="button-administration"
            onClick={() => handleButtonClick("Removal")}
          >
            Regime de trabalho
          </button>
        </div>
      </div>
      <div className="content-container-administration">
        {currentPage === "Person" && <Person />}
        {currentPage === "Career" && <Career />}
        {currentPage === "Vacation" && <Vacation />}
        {currentPage === "Removal" && <Removal />}
      </div>
    </>
  );
}
