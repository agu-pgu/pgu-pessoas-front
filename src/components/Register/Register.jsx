import React, { useState } from "react";
import Career from "./Career/Career";
import Person from "./Person/Person";
import Vacation from "./Vacation/Vacation";
import Removal from "./Removal/Removal";
import "./Register.scss";
import ShowAll from "./ShowAll/ShowAll";
import Training from "./Training/Training";

export default function Register() {
  const [currentPage, setCurrentPage] = useState("ShowAll");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="register-container">
        <div className="button-container-register">
          <button
            className="button-register"
            onClick={() => handleButtonClick("ShowAll")}
          >
            Mostrar Tudo
          </button>
          <button
            className="button-register"
            onClick={() => handleButtonClick("Person")}
          >
            Pessoa
          </button>
          <button
            className="button-register"
            onClick={() => handleButtonClick("Career")}
          >
            Carreira
          </button>
          <button
            className="button-register"
            onClick={() => handleButtonClick("Vacation")}
          >
            Férias
          </button>
          <button
            className="button-register"
            onClick={() => handleButtonClick("Removal")}
          >
            Afastamento
          </button>
          <button
            className="button-register"
            onClick={() => handleButtonClick("Training")}
          >
            Capacitação
          </button>
          <button
            className="button-register"
            onClick={() => handleButtonClick("Participation")}
          >
            Participação
          </button>
        </div>
      </div>
      <div className="content-container-register">
        {currentPage === "ShowAll" && <ShowAll />}
        {currentPage === "Person" && <Person />}
        {currentPage === "Career" && <Career />}
        {currentPage === "Vacation" && <Vacation />}
        {currentPage === "Removal" && <Removal />}
        {currentPage === "Training" && <Training />}
      </div>
    </>
  );
}
