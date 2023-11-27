import React, { useEffect, useState } from "react";
import "./ShowAll.scss";
import ShowPerson from "./ShowPerson/ShowPerson";
import { getPessoa } from "../../../services/CallsPerson/callsShowAll";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    const getPavimentaPessoa = async () => {
      try {
        const response = await getPessoa();
        const pessoaData = response.data.RETORNO[0].RETORNO;

        const formattedPeopleData = pessoaData.map((pessoa) => ({
          name: pessoa.PESSOA.pessoa_nome || "Nome não disponível",
          gender:
            pessoa.PESSOA.genero_id[0]?.GENERO.genero_nome ||
            "Gênero não disponível",
          municipality:
            pessoa.PESSOA.municipio_id[0]?.MUNICIPIO.municipio_nome ||
            "Município não disponível",
          UF:
            pessoa.PESSOA.municipio_id[0]?.MUNICIPIO.uf_id[0]?.UF.uf_sigla ||
            "UF não disponível",
          birthDate:
            pessoa.PESSOA.pessoa_data_nascimento ||
            "Data de Nascimento não disponível",
          cpf: pessoa.PESSOA.pessoa_cpf || "CPF não disponível",
          siape: pessoa.PESSOA.pessoa_siape || "SIAPE não disponível",
        }));

        setPeopleList(formattedPeopleData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaPessoa();
  }, []);

  const lists = {
    Pessoa: peopleList,
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
