import React, { useEffect, useState } from "react";
import "./ShowAll.scss";
import ShowPerson from "./ShowPerson/ShowPerson";
import {
  getAfastamento,
  getCarreira,
  getFerias,
  getPessoa,
} from "../../../services/CallsPerson/callsShowAll";
import ShowCareer from "./ShowCareer/ShowCareer";
import ShowVacation from "./ShowVacation/ShowVacation";
import ShowRemoval from "./ShowRemoval/ShowRemoval";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);
  const [peopleList, setPeopleList] = useState([]);
  const [careerList, setCareerList] = useState([]);
  const [vacationList, setVacationList] = useState([]);
  const [removalList, setRemovalList] = useState([]);

  const lists = {
    Pessoa: peopleList,
    Carreira: careerList,
    Ferias: vacationList,
    Afastamento: removalList,
  };

  const handleButtonClick = (list) => {
    setSelectedList(list);
  };

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
          id: pessoa.PESSOA.pessoa_id,
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
          id: career.CARREIRA.carreira_id,
        }));

        setCareerList(formattedCareerData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaCarreira();
  }, []);

  useEffect(() => {
    const getPavimentaFerias = async () => {
      try {
        const response = await getFerias();
        const vacationData = response.data.RETORNO[0][0].RETORNO;

        const formattedFeriasData = vacationData.map((ferias) => ({
          feriasAno:
            ferias.FERIAS.ferias_ano || "Ano das Férias não disponível",
          feriasFim:
            ferias.FERIAS.ferias_fim || "Data de Fim das Férias não disponível",
          feriasInicio:
            ferias.FERIAS.ferias_inicio ||
            "Data de Início das Férias não disponível",
          pessoaNome:
            ferias.FERIAS.pessoa_id[0]?.PESSOA?.pessoa_nome ||
            "Nome da Pessoa não disponível",
          pessoaSiape:
            ferias.FERIAS.pessoa_id[0]?.PESSOA?.pessoa_siape ||
            "SIAPE da Pessoa não disponível",
          feriasMotivoStatusDescricao:
            ferias.FERIAS_MOTIVO_STATUS?.RETORNO[0]?.FERIAS_MOTIVO_STATUS
              ?.ferias_motivo_status_descricao ||
            "Descrição do Motivo das Férias não disponível",
          feriasStatusNome:
            ferias.FERIAS_MOTIVO_STATUS?.RETORNO[0]?.FERIAS_MOTIVO_STATUS
              ?.ferias_status_id[0]?.FERIAS_STATUS?.ferias_status_nome ||
            "Nome do Status das Férias não disponível",
          id: ferias.FERIAS.ferias_id,
        }));

        setVacationList(formattedFeriasData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaFerias();
  }, []);

  useEffect(() => {
    const getPavimentaAfastamento = async () => {
      try {
        const response = await getAfastamento();
        const afastamentoData = response.data.RETORNO[0][0].RETORNO;

        const formattedAfastamentoData = afastamentoData.map((afastamento) => ({
          afastamentoNome:
            afastamento.AFASTAMENTO.afastamento_nome ||
            "Nome do afastamento não disponível",
          afastamentoTipoNome:
            afastamento.AFASTAMENTO.afastamento_tipo_id[0]?.AFASTAMENTO_TIPO
              .afastamento_tipo_nome || "Tipo de afastamento não disponível",
          cidCategoriaNome:
            afastamento.AFASTAMENTO.cid_id[0]?.CID.cid_categoria_id[0]
              ?.CID_CATEGORIA.cid_categoria_nome ||
            "Categoria CID não disponível",
          cidNome:
            afastamento.AFASTAMENTO.cid_id[0]?.CID.cid_nome ||
            "CID não disponível",
          cidSubNome:
            afastamento.AFASTAMENTO.cid_sub_id[0]?.CID_SUB.cid_sub_nome ||
            "Subcategoria CID não disponível",
          pessoaNome:
            afastamento.AFASTAMENTO.pessoa_id[0]?.PESSOA.pessoa_nome ||
            "Nome não disponível",
          pessoaCpf:
            afastamento.AFASTAMENTO.pessoa_id[0]?.PESSOA.pessoa_cpf ||
            "CPF não disponível",
        }));

        setRemovalList(formattedAfastamentoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentaAfastamento();
  }, []);

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
          className={selectedList === "Ferias" ? "selected" : ""}
          onClick={() => handleButtonClick("Ferias")}
        >
          Férias
        </button>
        <button
          className={selectedList === "Afastamento" ? "selected" : ""}
          onClick={() => handleButtonClick("Afastamento")}
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
        {selectedList === "Ferias" && (
          <ShowVacation peopleList={lists[selectedList]} />
        )}
        {selectedList === "Afastamento" && (
          <ShowRemoval peopleList={lists[selectedList]} />
        )}
      </div>
    </div>
  );
}
