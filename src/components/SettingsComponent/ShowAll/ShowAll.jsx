import React, { useState } from "react";
import "./ShowAll.scss";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);

  const lists = {
    Genero: "",
    Modulo: "",
    Permissao: "",
    UF: "",
    Municipio: "",
  };

  const handleButtonClick = (list) => {
    setSelectedList(list);
  };

  return (
    <div className="show-all-container">
      <div className="button-container-settings">
        <button
          className={selectedList === "Genero" ? "selected" : ""}
          onClick={() => handleButtonClick("Genero")}
        >
          Gênero
        </button>
        <button
          className={selectedList === "Modulo" ? "selected" : ""}
          onClick={() => handleButtonClick("Modulo")}
        >
          Modulo
        </button>
        <button
          className={selectedList === "Permissao" ? "selected" : ""}
          onClick={() => handleButtonClick("Permissao")}
        >
          Permissao
        </button>
        <button
          className={selectedList === "UF" ? "selected" : ""}
          onClick={() => handleButtonClick("UF")}
        >
          UF
        </button>
        <button
          className={selectedList === "Municipio" ? "selected" : ""}
          onClick={() => handleButtonClick("Municipio")}
        >
          Município
        </button>
      </div>

      <div className="list-container">
        <h2 className="list-container-h2">
          {selectedList
            ? `Lista Selecionada: ${selectedList}`
            : "Selecione uma Lista!"}
        </h2>
        {/* {selectedList === "Setor" && (
              <ShowSector peopleList={lists[selectedList]} />
            )} */}
      </div>
    </div>
  );
}
