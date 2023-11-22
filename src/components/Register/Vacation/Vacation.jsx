import React, { useEffect, useState } from "react";
import "./Vacation.scss";
import {
  createVacation,
  getFeriasStatus,
  getPessoa,
} from "../../../services/CallsPerson/callsVacation";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";

export default function Vacation() {
  const [feriasInicio, setFeriasInicio] = useState("");
  const [feriasFim, setFeriasFim] = useState("");
  const [feriasAno, setFeriasAno] = useState("");
  const [pessoa, setPessoa] = useState("");
  const [options, setOptions] = useState([]);
  const [feriasMotivoStatusDescricao, setFeriasMotivoStatusDescricao] =
    useState("");
  const [feriasStatus, setFeriasStatus] = useState(""); // pavimentar
  const [optionsStatus, setOptionsStatus] = useState([]);

  const handleSubmitToCreateVacation = async (e) => {
    e.preventDefault();

    const data = {
      CADASTRAR: [
        {
          FERIAS: {
            ferias_inicio: feriasInicio,
            ferias_fim: feriasFim,
            ferias_ano: feriasAno,
            pessoa_id: pessoa,
          },
          FERIAS_MOTIVO_STATUS: {
            ferias_motivo_status_descricao: feriasMotivoStatusDescricao,
            ferias_status_id: feriasStatus,
          },
        },
      ],
    };
    try {
      const response = await createVacation(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

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
    const getPavimentarFeriasStatus = async () => {
      try {
        const response = await getFeriasStatus();
        const FeriasStatusData = response.data.RETORNO[0].RETORNO;
        const optionsStatus = FeriasStatusData.map((item) => (
          <option
            key={item.FERIAS_STATUS.ferias_status_id}
            value={item.FERIAS_STATUS.ferias_status_id}
          >
            {item.FERIAS_STATUS.ferias_status_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        optionsStatus.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsStatus(optionsStatus);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarFeriasStatus();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitToCreateVacation}
          >
            <label className="form-label">*Ferias Início:</label>
            <input
              className="form-input"
              type="date"
              name="feriasInicio"
              id="feriasInicio"
              value={feriasInicio}
              onChange={(event) => setFeriasInicio(event.target.value)}
              required
            />
            <label className="form-label">*Ferias Fim:</label>
            <input
              className="form-input"
              type="date"
              name="feriasFim"
              id="feriasFim"
              value={feriasFim}
              onChange={(event) => setFeriasFim(event.target.value)}
              required
            />
            <label className="form-label">*Ferias Ano:</label>
            <input
              className="form-input"
              type="text"
              name="feriasAno"
              id="feriasAno"
              value={feriasAno}
              onChange={(event) => setFeriasAno(event.target.value)}
              maxLength={4}
              required
            />
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
            <label className="form-label">
              *Ferias - Descrição:
            </label>
            <input
              className="form-input"
              type="text"
              name="feriasMotivoStatusDescricao"
              id="feriasMotivoStatusDescricao"
              value={feriasMotivoStatusDescricao}
              onChange={(event) =>
                setFeriasMotivoStatusDescricao(event.target.value)
              }
              maxLength={255}
              required
            />
            <label className="form-label">*Ferias - Status:</label>
            <select
              className="form-input"
              name="feriasStatus"
              id="feriasStatus"
              value={feriasStatus}
              onChange={(event) => setFeriasStatus(event.target.value)}
              required
            >
              {optionsStatus}
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
