import React, { useState } from "react";
import County from "./County/County";
import Gender from "./Gender/Gender";
import Module from "./Module/Module";
import Permission from "./Permission/Permission";
import "./Settings.scss";
import ShowAll from "./ShowAll/ShowAll";
import UfComponent from "./UfComponent/UfComponent";

export default function Settings() {
  const [currentPage, setCurrentPage] = useState("ShowAll");

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="settings-container">
        <div className="button-container-settings">
          <button
            className="button-settings"
            onClick={() => handleButtonClick("ShowAll")}
          >
            Mostrar Tudo
          </button>
          <button
            className="button-settings"
            onClick={() => handleButtonClick("Gender")}
          >
            Gênero
          </button>
          <button
            className="button-settings"
            onClick={() => handleButtonClick("Module")}
          >
            Módulo
          </button>
          <button
            className="button-settings"
            onClick={() => handleButtonClick("Permission")}
          >
            Permissões
          </button>
          <button
            className="button-settings"
            onClick={() => handleButtonClick("UF")}
          >
            UF
          </button>
          <button
            className="button-settings"
            onClick={() => handleButtonClick("County")}
          >
            Município
          </button>
        </div>
      </div>
      <div className="content-container-settings">
        {currentPage === "ShowAll" && <ShowAll />}
        {currentPage === "County" && <County />}
        {currentPage === "Gender" && <Gender />}
        {currentPage === "Module" && <Module />}
        {currentPage === "Permission" && <Permission />}
        {currentPage === "UF" && <UfComponent />}
      </div>
    </>
  );
}
