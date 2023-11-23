import React, { useEffect, useState } from "react";
import "./Vacation.scss";
import {
  createVacationStatus,
  getVacationStatus,
} from "../../../services/callsAdministration/callsVacation";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";

export default function Vacation() {
  const [feriasStatus, setFeriasStatus] = useState("");
  const [feriasStatusOrdemId, setFeriasStatusOrdemId] = useState("");
  const [optionsFeriasStatusOrdem, setOptionsFeriasStatusOrdem] = useState([]);
  // const [carreiraDescricao, setCarreiraDescricao] = useState("");

  const handleSubmitForCreateFeriasStatus = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          FERIAS_STATUS: {
            ferias_status_nome: feriasStatus,
            ferias_status_ordem: feriasStatusOrdemId,
          },
        },
      ],
    };

    try {
      const response = await createVacationStatus(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  useEffect(() => {
    const getPavimentarVacationOrdem = async () => {
      try {
        const response = await getVacationStatus();
        const feriasStatusOrdemData = response.data.RETORNO[0].RETORNO;
        const options = feriasStatusOrdemData.map((item) => (
          <option
            key={item.FERIAS_STATUS.ferias_status_id}
            value={item.FERIAS_STATUS.ferias_status_ordem}
          >
            {item.FERIAS_STATUS.ferias_status_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsFeriasStatusOrdem(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarVacationOrdem();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateFeriasStatus}
          >
            <label className="form-label">*Ferias Status:</label>
            <input
              className="form-input"
              type="text"
              name="feriasStatus"
              id="feriasStatus"
              value={feriasStatus}
              onChange={(event) => setFeriasStatus(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Ferias:</label>
            <select
              className="form-input"
              name="feriasStatusOrdemId"
              id="feriasStatusOrdemId"
              value={feriasStatusOrdemId}
              onChange={(event) => setFeriasStatusOrdemId(event.target.value)}
              required
            >
              {optionsFeriasStatusOrdem}
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
