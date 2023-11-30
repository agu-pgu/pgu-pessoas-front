import React, { useEffect, useState } from "react";
import "./Removal.scss";
import {
  getAfastamentoTipo,
  getCid,
  getPessoa,
  getCidSub,
  getAfastamentoStatus,
  createRemoval,
} from "../../../services/CallsPerson/callsRemoval";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";

export default function Removal() {
  const [afastamentoDescricao, setAfastamentoDescricao] = useState("");
  const [afastamentoInicio, setAfastamentoInicio] = useState("");
  const [afastamentoFim, setAfastamentoFim] = useState("");
  const [afastamentoTipo, setAfastamentoTipo] = useState("");
  const [optionsAfastamento, setOptionsAfastamento] = useState([]);
  const [cid, setCid] = useState("");
  const [optionsCid, setOptionsCid] = useState([]);
  const [cidSub, setCidSub] = useState("");
  const [optionsCidSub, setOptionsCidSub] = useState([]);
  const [pessoa, setPessoa] = useState("");
  const [options, setOptions] = useState([]);
  const [
    afastamentoMotivoStatusDescricao,
    setAfastamentoMotivoStatusDescricao,
  ] = useState("");
  const [afastamentoStatus, setAfastamentoStatus] = useState(""); // pavimentar
  const [optionsAfastamentoStatus, setOptionsAfastamentoStatus] = useState([]);

  const handleSubmitCreateRemoval = async (e) => {
    e.preventDefault();

    const data = {
      CADASTRAR: [
        {
          AFASTAMENTO: {
            afastamento_descricao: afastamentoDescricao,
            afastamento_inicio: afastamentoInicio,
            afastamento_fim: afastamentoFim,
            afastamento_tipo_id: afastamentoTipo,
            cid_id: cid,
            pessoa_id: pessoa,
            cid_sub_id: cidSub,
          },
          AFASTAMENTO_MOTIVO_STATUS: {
            afastamento_motivo_status_descricao:
              afastamentoMotivoStatusDescricao,
            afastamento_status_id: afastamentoStatus,
          },
        },
      ],
    };

    try {
      const response = await createRemoval(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
    console.log(data);
  };

  useEffect(() => {
    const getPavimentarAfastamentoTipo = async () => {
      try {
        const response = await getAfastamentoTipo();
        const afastamentoTipoData = response.data.RETORNO[0].RETORNO;
        const options = afastamentoTipoData.map((item) => (
          <option
            key={item.AFASTAMENTO_TIPO.afastamento_tipo_id}
            value={item.AFASTAMENTO_TIPO.afastamento_tipo_id}
          >
            {item.AFASTAMENTO_TIPO.afastamento_tipo_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsAfastamento(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarAfastamentoTipo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCid = async () => {
      try {
        const response = await getCid();
        const cidData = response.data.RETORNO[0].RETORNO;
        const options = cidData.map((item) => (
          <option key={item.CID.cid_id} value={item.CID.cid_id}>
            {item.CID.cid_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCid(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCid();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCidSub = async () => {
      try {
        const response = await getCidSub();
        const cidSubData = response.data.RETORNO[0].RETORNO;
        const options = cidSubData.map((item) => (
          <option key={item.CID_SUB.cid_sub_id} value={item.CID_SUB.cid_sub_id}>
            {item.CID_SUB.cid_sub_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCidSub(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCidSub();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getPessoa();
        const pessoaData = response.data.RETORNO[0].RETORNO;
        const options = pessoaData.map((item) => (
          <option key={item.PESSOA.pessoa_id} value={item.PESSOA.pessoa_id}>
            {item.PESSOA.pessoa_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptions(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarPessoa();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarAfastamentoStatus = async () => {
      try {
        const response = await getAfastamentoStatus();
        const afastamentoStatusData = response.data.RETORNO[0].RETORNO;
        const options = afastamentoStatusData.map((item) => (
          <option
            key={item.AFASTAMENTO_STATUS.afastamento_status_id}
            value={item.AFASTAMENTO_STATUS.afastamento_status_id}
          >
            {item.AFASTAMENTO_STATUS.afastamento_status_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsAfastamentoStatus(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarAfastamentoStatus();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
      <h1 className="formulario-h2">Cadastre um Afastamento!</h1>
        <div className="form-scroll">
        <h3 className="formulario-h3">Formulário de "Afastamento"</h3>
          <form className="formulario-container" onSubmit={handleSubmitCreateRemoval}>
            <label className="form-label">Afastamento Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="afastamentoDescricao"
              id="afastamentoDescricao"
              value={afastamentoDescricao}
              onChange={(event) => setAfastamentoDescricao(event.target.value)}
              maxLength={1024}
            />
            <label className="form-label">*Afastamento Início:</label>
            <input
              className="form-input"
              type="date"
              name="afastamentoInicio"
              id="afastamentoInicio"
              value={afastamentoInicio}
              onChange={(event) => setAfastamentoInicio(event.target.value)}
              required
            />
            <label className="form-label">Afastamento Fim:</label>
            <input
              className="form-input"
              type="date"
              name="afastamentoFim"
              id="afastamentoFim"
              value={afastamentoFim}
              onChange={(event) => setAfastamentoFim(event.target.value)}
            />
            <label className="form-label">*Afastamento Tipo:</label>
            <select
              className="form-input"
              name="afastamentoTipo"
              id="afastamentoTipo"
              value={afastamentoTipo}
              onChange={(event) => setAfastamentoTipo(event.target.value)}
              required
            >
              {optionsAfastamento}
            </select>
            <label className="form-label">CID:</label>
            <select
              className="form-input"
              name="cid"
              id="cid"
              value={cid}
              onChange={(event) => setCid(event.target.value)}
              required
            >
              {optionsCid}
            </select>
            <label className="form-label">CID Sub:</label>
            <select
              className="form-input"
              name="cidSub"
              id="cidSub"
              value={cidSub}
              onChange={(event) => setCidSub(event.target.value)}
              required
            >
              {optionsCidSub}
            </select>
            <label className="form-label">*Pessoa:</label>
            <select
              className="form-input"
              name="pessoa"
              id="pessoa"
              value={pessoa}
              onChange={(event) => setPessoa(event.target.value)}
              required
            >
              {options}
            </select>
            <label className="form-label">*Afastamento - Motivo:</label>
            <input
              className="form-input"
              type="text"
              name="afastamentoMotivoStatusDescricao"
              id="afastamentoMotivoStatusDescricao"
              value={afastamentoMotivoStatusDescricao}
              onChange={(event) =>
                setAfastamentoMotivoStatusDescricao(event.target.value)
              }
              maxLength={255}
            />
            <label className="form-label">*Afastamento - Status:</label>
            <select
              className="form-input"
              name="afastamentoStatus"
              id="afastamentoStatus"
              value={afastamentoStatus}
              onChange={(event) => setAfastamentoStatus(event.target.value)}
              required
            >
              {optionsAfastamentoStatus}
            </select>
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
