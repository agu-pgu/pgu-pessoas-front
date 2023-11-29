import React, { useEffect, useState } from "react";
import {
    createCapacitacao,
  getCapacitacao,
  getCapacitacaoStatus,
  getPessoa,
} from "../../../services/CallsPerson/callsTraining";
import { CreateError, ErrorAtGetData, createPersonSucess } from "../../../assets/js/Alerts";
import "./Training.scss";

export default function Training() {
  const [nome, setNome] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [descricao, setDescricao] = useState("");
  const [capacitacao, setCapacitacao] = useState("");
  const [capacitacaoStatus, setCapacitacaoStatus] = useState("");
  const [pessoa, setPessoa] = useState("");
  const [capacitacaoOptions, setCapacitacaoOptions] = useState([]);
  const [capacitacaoStatusOptions, setCapacitacaoStatusOptions] = useState([]);
  const [pessoaOptions, setPessoaOptions] = useState([]);
  const [capacitacaoMotivoStatus, setCapacitacaoMotivoStatus] = useState("");

  const handleSubmitForCreateTraining = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CAPACITACAO: {
            capacitacao_nome: nome,
            capacitacao_descricao: descricao,
            capacitacao_inicio: dataInicio,
            capacitacao_fim: dataFim,
            capacitacao_tipo_id: capacitacao,
            pessoa_id: pessoa,
          },
          CAPACITACAO_MOTIVO_STATUS: {
            capacitacao_motivo_status_descricao: capacitacaoMotivoStatus,
            capacitacao_status_id: capacitacaoStatus,
          },
        },
      ],
    };
    try {
      const response = await createCapacitacao(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  useEffect(() => {
    const getPavimentarCapacitacao = async () => {
      try {
        const response = await getCapacitacao();
        const capacitacaoData = response.data.RETORNO[0].RETORNO;
        const options = capacitacaoData.map((item) => (
          <option
            key={item.CAPACITACAO_TIPO.capacitacao_tipo_id}
            value={item.CAPACITACAO_TIPO.capacitacao_tipo_id}
          >
            {item.CAPACITACAO_TIPO.capacitacao_tipo_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setCapacitacaoOptions(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCapacitacao();

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
        setPessoaOptions(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarPessoa();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCapacitacaoStatus = async () => {
      try {
        const response = await getCapacitacaoStatus();
        const capacitacaoStatusData = response.data.RETORNO[0].RETORNO;
        const options = capacitacaoStatusData.map((item) => (
          <option
            key={item.CAPACITACAO_STATUS.capacitacao_status_id}
            value={item.CAPACITACAO_STATUS.capacitacao_status_id}
          >
            {item.CAPACITACAO_STATUS.capacitacao_status_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setCapacitacaoStatusOptions(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCapacitacaoStatus();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
        <h1 className="formulario-h2">Cadastre uma Capacitação!</h1>
        <div className="form-scroll">
        <h3 className="formulario-h3">Formulário de "Capacitação"</h3>

          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateTraining}
          >
            <label className="form-label">*Capacitação:</label>
            <input
              className="form-input"
              type="text"
              name="capacitacao_nome"
              id="capacitacao_nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="capacitacao_descricao"
              id="capacitacao_descricao"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Capacitação - início:</label>
            <input
              className="form-input"
              type="date"
              name="capaciatacao_inicio"
              id="capaciatacao_inicio"
              value={dataInicio}
              onChange={(event) => setDataInicio(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Capacitação - fim:</label>
            <input
              className="form-input"
              type="date"
              name="capaciatacao_fim"
              id="capaciatacao_fim"
              value={dataFim}
              onChange={(event) => setDataFim(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">Capacitação - Tipo:</label>
            <select
              className="form-input"
              name="genero_id"
              id="genero_id"
              value={capacitacao}
              onChange={(event) => setCapacitacao(event.target.value)}
            >
              {capacitacaoOptions}
            </select>
            <label className="form-label">Pessoa:</label>
            <select
              className="form-input"
              name="pessoa"
              id="pessoa"
              value={pessoa}
              onChange={(event) => setPessoa(event.target.value)}
            >
              {pessoaOptions}
            </select>
            <label className="form-label">*Capacitação - Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="capacitacao_descricao"
              id="capacitacao_descricao"
              value={capacitacaoMotivoStatus}
              onChange={(event) =>
                setCapacitacaoMotivoStatus(event.target.value)
              }
              maxLength={255}
              required
            />
            <label className="form-label">Capacitação - Status:</label>
            <select
              className="form-input"
              name="capacitação_status"
              id="capacitação_status"
              value={capacitacaoStatus}
              onChange={(event) => setCapacitacaoStatus(event.target.value)}
            >
              {capacitacaoStatusOptions}
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
