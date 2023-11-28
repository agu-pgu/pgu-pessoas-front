import React, { useEffect, useState } from "react";
import "./ShowAll.scss";
import ShowSector from "./ShowSector/ShowSector";
import {
  getCargo,
  getCid,
  getConcurso,
  getCoordenacao,
  getFuncao,
  getIngresso,
  getNucleo,
  getRegiao,
  getRegimeTrabalhoModalidade,
  getRegimeTrabalhoTipo,
  getSetor,
  getUnidade,
} from "../../../services/callsAdministration/callsShowAll";
import ShowCoordination from "./ShowCoordination/ShowCoordination";
import ShowFunction from "./ShowFunction/ShowFunction";
import ShowNucleo from "./ShowNucleo/ShowNucleo";
import ShowPositions from "./ShowPositions/ShowPositions";
import ShowRegion from "./ShowRegion/ShowRegion";
import ShowUnit from "./ShowUnit/ShowUnit";
import ShowCid from "./ShowCid/ShowCid";
import ShowTicket from "./ShowTicket/ShowTicket";
import ShowContest from "./ShowContest/ShowContest";
import ShowWorkRegimeModality from "./ShowWorkRegimeModality/ShowWorkRegimeModality";
import ShowWorkRegimeType from "./ShowWorkRegimeType/ShowWorkRegimeType";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);
  const [sectorList, setSectorList] = useState([]);
  const [coordenacaoList, setCoordenacaoList] = useState([]);
  const [functionList, setFunctionList] = useState([]);
  const [nucleoList, setNucleoList] = useState([]);
  const [positionsList, setPositionsList] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [cidList, setCidList] = useState([]);
  const [ticketList, setTicketList] = useState([]);
  const [contestList, setContestList] = useState([]);
  const [workRegimeModalityList, setWorkRegimeModalityList] = useState([]);
  const [workRegimeTypeList, setWorkRegimeTypeList] = useState([]);

  const lists = {
    Setor: sectorList,
    Coordenacao: coordenacaoList,
    Funcao: functionList,
    Nucleo: nucleoList,
    Cargos: positionsList,
    Regiao: regionList,
    Unidade: unitList,
    CID: cidList,
    Ingresso: ticketList,
    Concurso: contestList,
    RegimeDeTrabalhoModalidade: workRegimeModalityList,
    RegimeDeTrabalhoTipo: workRegimeTypeList,
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
          id: item.SETOR.setor_id,
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
          id: item.COORDENACAO.coordenacao_id,
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
          id: item.FUNCAO.funcao_id,
        }));
        setFunctionList(formattedFuncaoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaFuncao();
  }, []);

  useEffect(() => {
    const getPavimentaNucleo = async () => {
      try {
        const response = await getNucleo();
        const nucleoData = response.data.RETORNO[0].RETORNO;

        const formattedNucleoData = nucleoData.map((item) => ({
          nome: item.NUCLEO.nucleo_nome || "Nome não disponível",
          descricao: item.NUCLEO.nucleo_descricao || "Descrição não disponível",
          id: item.NUCLEO.nucleo_id,
        }));
        setNucleoList(formattedNucleoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaNucleo();
  }, []);

  useEffect(() => {
    const getPavimentaCargo = async () => {
      try {
        const response = await getCargo();
        const cargoData = response.data.RETORNO[0].RETORNO;

        const formattedCargoData = cargoData.map((item) => ({
          nome: item.CARGO.cargo_nome || "Nome não disponível",
          descricao: item.CARGO.cargo_descricao || "Descrição não disponível",
          id: item.CARGO.cargo_id,
        }));
        setPositionsList(formattedCargoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaCargo();
  }, []);

  useEffect(() => {
    const getPavimentaRegiao = async () => {
      try {
        const response = await getRegiao();
        const regiaoData = response.data.RETORNO[0].RETORNO;

        const formattedRegiaoData = regiaoData.map((item) => ({
          nome: item.REGIAO.regiao_nome || "Nome não disponível",
          descricao: item.REGIAO.regiao_descricao || "Descrição não disponível",
          sigla: item.REGIAO.regiao_sigla || "Descrição não disponível",
          id: item.REGIAO.regiao_id,
        }));
        setRegionList(formattedRegiaoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaRegiao();
  }, []);

  useEffect(() => {
    const getPavimentarUnidade = async () => {
      try {
        const response = await getUnidade();
        const unidadeData = response.data.RETORNO[0].RETORNO;

        const formattedUnidadeData = unidadeData.map((item) => ({
          nome: item.UNIDADE.unidade_nome || "Nome não disponível",
          descricao:
            item.UNIDADE.unidade_descricao || "Descrição não disponível",
          sigla: item.UNIDADE.unidade_sigla || "Sigla não disponível",
          id: item.UNIDADE.unidade_id,
        }));
        setUnitList(formattedUnidadeData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarUnidade();
  }, []);

  useEffect(() => {
    const getPavimentarCid = async () => {
      try {
        const response = await getCid();
        const cidData = response.data.RETORNO[0].RETORNO;

        const formattedCidData = cidData.map((item) => ({
          nome: item.CID.cid_nome || "Nome não disponível",
          descricao: item.CID.cid_descricao || "Descrição não disponível",
          classe: item.CID.cid_classe || "Classe não disponível",
          cidCategoriaNome:
            item.CID.cid_categoria_id[0]?.CID_CATEGORIA?.cid_categoria_nome ||
            "Nome da Categoria não disponível",
          cidCategoriaDescricao:
            item.CID.cid_categoria_id[0]?.CID_CATEGORIA
              ?.cid_categoria_descricao ||
            "Descrição da Categoria não disponível",
          id: item.CID.cid_id,
        }));

        setCidList(formattedCidData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarCid();
  }, []);

  useEffect(() => {
    const getPavimentarIngresso = async () => {
      try {
        const response = await getIngresso();
        const ingressoData = response.data.RETORNO[0].RETORNO;

        const formattedIngressoData = ingressoData.map((item) => ({
          nome: item.INGRESSO.ingresso_nome || "Nome não disponível",
          descricao:
            item.INGRESSO.ingresso_descricao || "Descrição não disponível",
          id: item.INGRESSO.ingresso_id,
        }));

        setTicketList(formattedIngressoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarIngresso();
  }, []);

  useEffect(() => {
    const getPavimentarConcurso = async () => {
      try {
        const response = await getConcurso();
        const concursoData = response.data.RETORNO[0].RETORNO;

        const formattedConcursoData = concursoData.map((item) => ({
          nome: item.CONCURSO.concurso_nome || "Nome não disponível",
          descricao:
            item.CONCURSO.concurso_descricao || "Descrição não disponível",
          ano: item.CONCURSO.concurso_ano || "Ano não disponível",
          edital: item.CONCURSO.concurso_edital || "Edital não disponível",
          id: item.CONCURSO.concurso_id,
        }));

        setContestList(formattedConcursoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarConcurso();
  }, []);

  useEffect(() => {
    const getPavimentarRegimeDeTrabalhoModalidade = async () => {
      try {
        const response = await getRegimeTrabalhoModalidade();
        const regimeDeTrabalhoModalidadeData = response.data.RETORNO[0].RETORNO;

        const formattedRegimeDeTrabalhoModalidadeData =
          regimeDeTrabalhoModalidadeData.map((item) => ({
            nome:
              item.REGIME_TRABALHO_MODALIDADE.regime_trabalho_modalidade_nome ||
              "Nome não disponível",
            descricao:
              item.REGIME_TRABALHO_MODALIDADE
                .regime_trabalho_modalidade_descricao ||
              "Descrição não disponível",
            id: item.REGIME_TRABALHO_MODALIDADE.regime_trabalho_modalidade_id,
          }));

        setWorkRegimeModalityList(formattedRegimeDeTrabalhoModalidadeData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarRegimeDeTrabalhoModalidade();
  }, []);

  useEffect(() => {
    const getPavimentarRegimeDeTrabalhoTipo = async () => {
      try {
        const response = await getRegimeTrabalhoTipo();
        const regimeDeTrabalhoTipoData = response.data.RETORNO[0].RETORNO;

        const formattedRegimeDeTrabalhoTipoData = regimeDeTrabalhoTipoData.map(
          (item) => ({
            nome:
              item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_nome ||
              "Nome não disponível",
            descricao:
              item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_descricao ||
              "Descrição não disponível",
              id:
              item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_id
          })
        );

        setWorkRegimeTypeList(formattedRegimeDeTrabalhoTipoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarRegimeDeTrabalhoTipo();
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
          className={
            selectedList === "RegimeDeTrabalhoModalidade" ? "selected" : ""
          }
          onClick={() => handleButtonClick("RegimeDeTrabalhoModalidade")}
        >
          Regime De Trabalho-Modalidade
        </button>
        <button
          className={selectedList === "RegimeDeTrabalhoTipo" ? "selected" : ""}
          onClick={() => handleButtonClick("RegimeDeTrabalhoTipo")}
        >
          Regime De Trabalho-Tipo
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
        {selectedList === "Nucleo" && (
          <ShowNucleo peopleList={lists[selectedList]} />
        )}
        {selectedList === "Cargos" && (
          <ShowPositions peopleList={lists[selectedList]} />
        )}
        {selectedList === "Regiao" && (
          <ShowRegion peopleList={lists[selectedList]} />
        )}
        {selectedList === "Unidade" && (
          <ShowUnit peopleList={lists[selectedList]} />
        )}
        {selectedList === "CID" && <ShowCid peopleList={lists[selectedList]} />}
        {selectedList === "Ingresso" && (
          <ShowTicket peopleList={lists[selectedList]} />
        )}
        {selectedList === "Concurso" && (
          <ShowContest peopleList={lists[selectedList]} />
        )}
        {selectedList === "RegimeDeTrabalhoModalidade" && (
          <ShowWorkRegimeModality peopleList={lists[selectedList]} />
        )}
        {selectedList === "RegimeDeTrabalhoTipo" && (
          <ShowWorkRegimeType peopleList={lists[selectedList]} />
        )}
      </div>
    </div>
  );
}
