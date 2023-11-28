import React, { useEffect, useState } from "react";
import "./ShowAll.scss";
import { getGenero } from "../../../services/callsSettings/callsShowAll";
import ShowGender from "./ShowGender/ShowGender";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);
  const [genderList, setGenderList] = useState([]);

  const lists = {
    Genero: genderList,
    Modulo: "",
    Permissao: "",
    UF: "",
    Municipio: "",
  };

  const handleButtonClick = (list) => {
    setSelectedList(list);
  };

  useEffect(() => {
    const getPavimentarGenero = async () => {
      try {
        const response = await getGenero();
        const generoData = response.data.RETORNO[0].RETORNO;

        const formattedGeneroData = generoData.map((item) => ({
          nome: item.GENERO.genero_nome || "Nome não disponível",
        }));

        setGenderList(formattedGeneroData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarGenero();
  }, []);

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
        {selectedList === "Genero" && (
              <ShowGender peopleList={lists[selectedList]} />
            )}
      </div>
    </div>
  );
}
