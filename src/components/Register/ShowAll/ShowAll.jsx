import React, { useEffect, useState } from "react";
import "./ShowAll.scss";
import ShowPerson from "./ShowPerson/ShowPerson";
import {
  getCarreira,
  getPessoa,
} from "../../../services/CallsPerson/callsShowAll";
import ShowCareer from "./ShowCareer/ShowCareer";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);
  const [peopleList, setPeopleList] = useState([]);
  const [careerList, setCareerList] = useState([]);

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

  useEffect(() => {
    const getPavimentaCarreira = async () => {
      try {
        const response = await getCarreira();
        const carreiraData = response.data.RETORNO[0][0].RETORNO;
        const formattedCareerData = carreiraData.map((career) => ({
          name:
            career.CARREIRA.pessoa_id[0]?.PESSOA.pessoa_nome ||
            "Nome não disponível",
          gender:
            career.CARREIRA.pessoa_id[0]?.PESSOA.genero_id[0]?.GENERO
              .genero_nome || "Gênero não disponível",
          municipality:
            career.CARREIRA.pessoa_id[0]?.PESSOA.municipio_id[0]?.MUNICIPIO
              .municipio_nome || "Município não disponível",
          UF:
            career.CARREIRA.pessoa_id[0]?.PESSOA.municipio_id[0]?.MUNICIPIO
              .uf_id[0]?.UF.uf_sigla || "UF não disponível",
          birthDate:
            career.CARREIRA.pessoa_id[0]?.PESSOA.pessoa_data_nascimento ||
            "Data de Nascimento não disponível",
          cpf:
            career.CARREIRA.pessoa_id[0]?.PESSOA.pessoa_cpf ||
            "CPF não disponível",
          siape:
            career.CARREIRA.pessoa_id[0]?.PESSOA.pessoa_siape ||
            "SIAPE não disponível",
          cargo:
            career.CARREIRA.cargo_id[0]?.CARGO.cargo_nome ||
            "Cargo não disponível",
          carreiraType:
            career.CARREIRA.carreira_tipo_id[0]?.CARREIRA_TIPO
              .carreira_tipo_nome || "Tipo de Carreira não disponível",
          concurso:
            career.CARREIRA.concurso_id[0]?.CONCURSO.concurso_nome ||
            "Concurso não disponível",
          coordenacao:
            career.CARREIRA.coordenacao_id[0]?.COORDENACAO.coordenacao_nome ||
            "Coordenação não disponível",
          funcao:
            career.CARREIRA.funcao_id[0]?.FUNCAO.funcao_nome ||
            "Função não disponível",
          ingresso:
            career.CARREIRA.ingresso_id[0]?.INGRESSO.ingresso_nome ||
            "Ingresso não disponível",
          nucleo:
            career.CARREIRA.nucleo_id[0]?.NUCLEO.nucleo_nome ||
            "Núcleo não disponível",
          setor:
            career.CARREIRA.setor_id[0]?.SETOR.setor_nome ||
            "Setor não disponível",
        }));

        setCareerList(formattedCareerData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaCarreira();
  }, []);

  const lists = {
    Pessoa: peopleList,
    Carreira: careerList,
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
          className={selectedList === "Carreira" ? "selected" : ""}
          onClick={() => handleButtonClick("Carreira")}
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
        {selectedList === "Carreira" && (
          <ShowCareer peopleList={lists[selectedList]} />
        )}
      </div>
    </div>
  );
}
