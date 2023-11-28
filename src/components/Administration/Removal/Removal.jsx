import React, { useEffect, useState } from "react";
import "./Removal.scss";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";
import {
  createRemovalStatus,
  createRemovalTipo,
  getAfastamentoStatus,
} from "../../../services/callsAdministration/callsRemoval";

export default function Removal() {
  const [afastamentoStatus, setAfastamentoStatus] = useState("");
  const [afastamentoTipo, setAfastamentoTipo] = useState("");
  const [afastamentoStatusOrdemId, setAfastamentoStatusOrdemId] = useState("");
  const [optionsAfastamentoStatusOrdem, setOptionsAfastamentoStatusOrdem] =
    useState([]);
  // const [carreiraDescricao, setCarreiraDescricao] = useState("");

  const handleSubmitForCreateAfastamentoStatus = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          AFASTAMENTO_STATUS: {
            afastamento_status_nome: afastamentoStatus,
            afastamento_status_ordem: afastamentoStatusOrdemId,
          },
        },
      ],
    };

    try {
      const response = await createRemovalStatus(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  const handleSubmitForCreateAfastamentoTipo = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          AFASTAMENTO_TIPO: {
            afastamento_tipo_nome: afastamentoTipo,
          },
        },
      ],
    };

    try {
      const response = await createRemovalTipo(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  useEffect(() => {
    const getPavimentarAfastamentoOrdem = async () => {
      try {
        const response = await getAfastamentoStatus();
        const afastamentoStatusOrdemData = response.data.RETORNO[0].RETORNO;
        const options = afastamentoStatusOrdemData.map((item) => (
          <option
            key={item.AFASTAMENTO_STATUS.afastamento_status_id}
            value={item.AFASTAMENTO_STATUS.afastamento_status_ordem}
          >
            {item.AFASTAMENTO_STATUS.afastamento_status_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsAfastamentoStatusOrdem(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarAfastamentoOrdem();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
      <h1 className="formulario-h2">Administrativo - Afastamento</h1>
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateAfastamentoTipo}
          >
            <label className="form-label">*Afastamento Tipo:</label>
            <input
              className="form-input"
              type="text"
              name="afastamentoTipo"
              id="afastamentoTipo"
              value={afastamentoTipo}
              onChange={(event) => setAfastamentoTipo(event.target.value)}
              maxLength={255}
              required
            />
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateAfastamentoStatus}
          >
            <label className="form-label">*Afastamento Status:</label>
            <input
              className="form-input"
              type="text"
              name="afastamentoStatus"
              id="afastamentoStatus"
              value={afastamentoStatus}
              onChange={(event) => setAfastamentoStatus(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Afastamento:</label>
            <select
              className="form-input"
              name="afastamentoStatusOrdemId"
              id="afastamentoStatusOrdemId"
              value={afastamentoStatusOrdemId}
              onChange={(event) =>
                setAfastamentoStatusOrdemId(event.target.value)
              }
              required
            >
              {optionsAfastamentoStatusOrdem}
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
