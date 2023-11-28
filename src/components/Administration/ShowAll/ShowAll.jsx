import React, { useEffect, useState } from "react";
import "./ShowAll.scss";
import ShowSector from "./ShowSector/ShowSector";
import {
  getCoordenacao,
  getFuncao,
  getSetor,
} from "../../../services/callsAdministration/callsShowAll";
import ShowCoordination from "./ShowCoordination/ShowCoordination";
import ShowFunction from "./ShowFunction/ShowFunction";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);
  const [sectorList, setSectorList] = useState([]);
  const [coordenacaoList, setCoordenacaoList] = useState([]);
  const [functionList, setFunctionList] = useState([]);

  const lists = {
    Setor: sectorList,
    Coordenacao: coordenacaoList,
    Funcao: functionList,
    Nucleo: "",
    Cargos: "",
    Regiao: "",
    Unidade: "",
    CID: "",
    Ingresso: "",
    Concurso: "",
    Carreira: "",
    Afastamento: "",
    Ferias: "",
    RegimeDeTrabalho: "",
  };

  const handleButtonClick = (list) => {
    setSelectedList(list);
  };

  useEffect(() => {
    const getPavimentaSetor = async () => {
      try {
        const response = await getSetor();
        const setorData = response.data.RETORNO[0].RETORNO;

        const formattedSetorData = setorData.map((item) => ({
          sigla: item.SETOR.setor_sigla || "Sigla não disponível",
          nome: item.SETOR.setor_nome || "Nome não disponível",
          descricao: item.SETOR.setor_descricao || "Descrição não disponível",
        }));
        setSectorList(formattedSetorData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaSetor();
  }, []);

  useEffect(() => {
    const getPavimentaCoordenacao = async () => {
      try {
        const response = await getCoordenacao();
        const coordenacaoData = response.data.RETORNO[0].RETORNO;

        const formattedCoordenacaoData = coordenacaoData.map((item) => ({
          sigla: item.COORDENACAO.coordenacao_sigla || "Sigla não disponível",
          nome: item.COORDENACAO.coordenacao_nome || "Nome não disponível",
          descricao:
            item.COORDENACAO.coordenacao_descricao ||
            "Descrição não disponível",
        }));
        setCoordenacaoList(formattedCoordenacaoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaCoordenacao();
  }, []);

  useEffect(() => {
    const getPavimentaFuncao = async () => {
      try {
        const response = await getFuncao();
        const funcaoData = response.data.RETORNO[0].RETORNO;

        const formattedFuncaoData = funcaoData.map((item) => ({
          nome: item.FUNCAO.funcao_nome || "Nome não disponível",
          descricao: item.FUNCAO.funcao_descricao || "Descrição não disponível",
        }));
        setFunctionList(formattedFuncaoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaFuncao();
  }, []);

  return (
    <div className="show-all-container">
      <div className="button-container-administration">
        <button
          className={selectedList === "Setor" ? "selected" : ""}
          onClick={() => handleButtonClick("Setor")}
        >
          Setor
        </button>
        <button
          className={selectedList === "Coordenacao" ? "selected" : ""}
          onClick={() => handleButtonClick("Coordenacao")}
        >
          Coordenacao
        </button>
        <button
          className={selectedList === "Funcao" ? "selected" : ""}
          onClick={() => handleButtonClick("Funcao")}
        >
          Função
        </button>
        <button
          className={selectedList === "Nucleo" ? "selected" : ""}
          onClick={() => handleButtonClick("Nucleo")}
        >
          Núcleo
        </button>
        <button
          className={selectedList === "Cargos" ? "selected" : ""}
          onClick={() => handleButtonClick("Cargos")}
        >
          Cargos
        </button>
        <button
          className={selectedList === "Regiao" ? "selected" : ""}
          onClick={() => handleButtonClick("Regiao")}
        >
          Região
        </button>
        <button
          className={selectedList === "Unidade" ? "selected" : ""}
          onClick={() => handleButtonClick("Unidade")}
        >
          Unidade
        </button>
        <button
          className={selectedList === "CID" ? "selected" : ""}
          onClick={() => handleButtonClick("CID")}
        >
          CID
        </button>
        <button
          className={selectedList === "Ingresso" ? "selected" : ""}
          onClick={() => handleButtonClick("Ingresso")}
        >
          Ingresso
        </button>
        <button
          className={selectedList === "Concurso" ? "selected" : ""}
          onClick={() => handleButtonClick("Concurso")}
        >
          Concurso
        </button>
        <button
          className={selectedList === "Carreira" ? "selected" : ""}
          onClick={() => handleButtonClick("Carreira")}
        >
          Carreira
        </button>
        <button
          className={selectedList === "Afastamento" ? "selected" : ""}
          onClick={() => handleButtonClick("Afastamento")}
        >
          Afastamento
        </button>
        <button
          className={selectedList === "Ferias" ? "selected" : ""}
          onClick={() => handleButtonClick("Ferias")}
        >
          Ferias
        </button>
        <button
          className={selectedList === "RegimeDeTrabalho" ? "selected" : ""}
          onClick={() => handleButtonClick("RegimeDeTrabalho")}
        >
          Regime De Trabalho
        </button>
      </div>

      <div className="list-container">
        <h2 className="list-container-h2">
          {selectedList
            ? `Lista Selecionada: ${selectedList}`
            : "Selecione uma Lista!"}
        </h2>
        {selectedList === "Setor" && (
          <ShowSector peopleList={lists[selectedList]} />
        )}
        {selectedList === "Coordenacao" && (
          <ShowCoordination peopleList={lists[selectedList]} />
        )}
        {selectedList === "Funcao" && (
          <ShowFunction peopleList={lists[selectedList]} />
        )}
      </div>
    </div>
  );
}