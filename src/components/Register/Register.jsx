import React, { useState } from "react";
import Career from "./Career/Career";
import Person from "./Person/Person";
import Vacation from "./Vacation/Vacation";
import Removal from "./Removal/Removal";
import "./Register.scss";

export default function Register() {
  const [currentPage, setCurrentPage] = useState("Person");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button className="button-register" onClick={() => handleButtonClick("Person")}>Pessoa</button>
        <button className="button-register" onClick={() => handleButtonClick("Career")}>Carreira</button>
        <button className="button-register" onClick={() => handleButtonClick("Vacation")}>Férias</button>
        <button className="button-register" onClick={() => handleButtonClick("Removal")}>Afastamento</button>
      </div>

      {currentPage === "Person" && <Person />}
      {currentPage === "Career" && <Career/>}
      {currentPage === "Vacation" && <Vacation/>}
      {currentPage === "Removal" && <Removal/>}
    </div>
  );
}
