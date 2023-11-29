import React, { useEffect, useState } from "react";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";
import { createParticipacao, getParticipacaoStatus, getParticipacaoTipo, getPessoa } from "../../../services/CallsPerson/callsParticipation";
import "./Participation.scss"

export default function Participation() {
  const [nome, setNome] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [descricao, setDescricao] = useState("");
  const [participacao, setParticipacao] = useState("");
  const [participacaoStatus, setParticipacaoStatus] = useState("");
  const [pessoa, setPessoa] = useState("");
  const [participacaoOptions, setParticipacaoOptions] = useState([]);
  const [participacaoStatusOptions, setParticipacaoStatusOptions] = useState([]);
  const [pessoaOptions, setPessoaOptions] = useState([]);
  const [participacaoMotivoStatus, setParticipacaoMotivoStatus] = useState("");

  const handleSubmitForCreateParticipation = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          PARTICIPACAO: {
            participacao_nome: nome,
            participacao_descricao: descricao,
            participacao_inicio: dataInicio,
            participacao_fim: dataFim,
            participacao_tipo_id: participacao,
            pessoa_id: pessoa,
          },
          PARTICIPACAO_MOTIVO_STATUS: {
            participacao_motivo_status_descricao: participacaoMotivoStatus,
            participacao_status_id: participacaoStatus,
          },
        },
      ],
    };
    try {
      const response = await createParticipacao(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  useEffect(() => {
    const getPavimentarParticipacao = async () => {
      try {
        const response = await getParticipacaoTipo();
        const participacaoData = response.data.RETORNO[0].RETORNO;
        const options = participacaoData.map((item) => (
          <option
            key={item.PARTICIPACAO_TIPO.participacao_tipo_id}
            value={item.PARTICIPACAO_TIPO.participacao_tipo_id}
          >
            {item.PARTICIPACAO_TIPO.participacao_tipo_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setParticipacaoOptions(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarParticipacao();

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
    const getPavimentarparticipacaoStatus = async () => {
      try {
        const response = await getParticipacaoStatus();
        const participacaoStatusData = response.data.RETORNO[0].RETORNO;
        console.log(participacaoStatusData)
        const options = participacaoStatusData.map((item) => (
          <option
            key={item.PARTICIPACAO_STATUS.participacao_status_id}
            value={item.PARTICIPACAO_STATUS.participacao_status_id}
          >
            {item.PARTICIPACAO_STATUS.participacao_status_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setParticipacaoStatusOptions(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarparticipacaoStatus();

    return () => {};
  }, []);
  return (
    <div>
      <div className="formulario-container">
        <h1 className="formulario-h2">Cadastre uma Participação!</h1>
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateParticipation}
          >
            <label className="form-label">*Participação:</label>
            <input
              className="form-input"
              type="text"
              name="participacao_nome"
              id="participacao_nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="participacao_descricao"
              id="participacao_descricao"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Participação - início:</label>
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
            <label className="form-label">*Participação - fim:</label>
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
            <label className="form-label">Participação - Tipo:</label>
            <select
              className="form-input"
              name="genero_id"
              id="genero_id"
              value={participacao}
              onChange={(event) => setParticipacao(event.target.value)}
            >
              {participacaoOptions}
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
            <label className="form-label">*Participação - Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="participacao_descricao"
              id="participacao_descricao"
              value={participacaoMotivoStatus}
              onChange={(event) =>
                setParticipacaoMotivoStatus(event.target.value)
              }
              maxLength={255}
              required
            />
            <label className="form-label">Participação - Status:</label>
            <select
              className="form-input"
              name="Participação_status"
              id="Participação_status"
              value={participacaoStatus}
              onChange={(event) => setParticipacaoStatus(event.target.value)}
            >
              {participacaoStatusOptions}
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
