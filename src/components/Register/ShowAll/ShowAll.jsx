import React, { useState } from "react";
import "./ShowAll.scss";
import ShowPerson from "./ShowPerson/ShowPerson";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);

  const lists = {
    Pessoa: [
      {
        name: "Person 1",
        gender: "Male",
        municipality: "City 1",
        UF: "SP",
        birthDate: "01/01/1990",
        cpf: "123.456.789-00",
        siape: "1234567",
      },
      {
        name: "Person 2",
        gender: "Female",
        municipality: "City 2",
        UF: "RJ",
        birthDate: "02/02/1995",
        cpf: "987.654.321-00",
        siape: "7654321",
      },
      {
        name: "Person 3",
        gender: "Other",
        municipality: "City 3",
        UF: "MG",
        birthDate: "03/03/1985",
        cpf: "111.222.333-44",
        siape: "9876543",
      },
    ],
    career: ["Job 1", "Job 2", "Job 3"],
    vacations: ["Vacation 1", "Vacation 2", "Vacation 3"],
    leave: ["Leave 1", "Leave 2", "Leave 3"],
  };

  const handleButtonClick = (list) => {
    setSelectedList(list);
  };

  return (
    <div className="show-all-container">
      <div className="button-container">
        <button
          className={selectedList === "Pessoa" ? "selected" : ""}
          onClick={() => handleButtonClick("Pessoa")}
        >
          Pessoa
        </button>
        <button
          className={selectedList === "career" ? "selected" : ""}
          onClick={() => handleButtonClick("career")}
        >
          Carreira
        </button>
        <button
          className={selectedList === "vacations" ? "selected" : ""}
          onClick={() => handleButtonClick("vacations")}
        >
          Férias
        </button>
        <button
          className={selectedList === "leave" ? "selected" : ""}
          onClick={() => handleButtonClick("leave")}
        >
          Afastamento
        </button>
      </div>

      <div className="list-container">
        <h2 className="list-container-h2">
          {selectedList
            ? `Lista Selecionada: ${selectedList}`
            : "Selecione uma Lista!"}
        </h2>
        {selectedList === "Pessoa" && (
          <ShowPerson peopleList={lists[selectedList]} />
        )}
      </div>
    </div>
  );
}
