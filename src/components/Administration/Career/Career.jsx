import React, { useEffect, useState } from "react";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";
import {
  createCareerStatus,
  createCarreiraTipo,
  getCarreiraStatus,
} from "../../../services/callsAdministration/callsCareer";
import "./Career.scss";

export default function Career() {
  const [carreiraStatus, setCarreiraStatus] = useState("");
  const [carreiraTipo, setCarreiraTipo] = useState("");
  const [carreiraStatusOrdemId, setCarreiraStatusOrdemId] = useState("");
  const [optionsCarreiraStatusOrdem, setOptionsCarreiraStatusOrdem] = useState(
    []
  );
  // const [carreiraDescricao, setCarreiraDescricao] = useState("");

  const handleSubmitForCreateCarreiraStatus = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CARREIRA_STATUS: {
            carreira_status_nome: setCarreiraStatus,
            carreira_status_ordem: setCarreiraStatusOrdemId,
          },
        },
      ],
    };

    try {
      const response = await createCareerStatus(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  const handleSubmitForCreateCarreiraTipo = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CARREIRA_TIPO: {
            carreira_tipo_nome: carreiraTipo,
          },
        },
      ],
    };

    try {
      const response = await createCarreiraTipo(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  useEffect(() => {
    const getPavimentarCarreiraStatusOrdem = async () => {
      try {
        const response = await getCarreiraStatus();
        const carreiraStatusData = response.data.RETORNO[0].RETORNO;
        const options = carreiraStatusData.map((item) => (
          <option
            key={item.CARREIRA_STATUS.carreira_status_id}
            value={item.CARREIRA_STATUS.carreira_status_ordem}
          >
            {item.CARREIRA_STATUS.carreira_status_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCarreiraStatusOrdem(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCarreiraStatusOrdem();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateCarreiraTipo}
          >
            <label className="form-label">*Carreira Tipo:</label>
            <input
              className="form-input"
              type="text"
              name="carreiraTipo"
              id="carreiraTipo"
              value={carreiraTipo}
              onChange={(event) => setCarreiraTipo(event.target.value)}
              maxLength={255}
              required
            />
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateCarreiraStatus}
          >
            <label className="form-label">*Carreira Status:</label>
            <input
              className="form-input"
              type="text"
              name="carreiraStatus"
              id="carreiraStatus"
              value={carreiraStatus}
              onChange={(event) => setCarreiraStatus(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Carreira:</label>
            <select
              className="form-input"
              name="carreiraStatusOrdemId"
              id="carreiraStatusOrdemId"
              value={carreiraStatusOrdemId}
              onChange={(event) => setCarreiraStatusOrdemId(event.target.value)}
              required
            >
              {optionsCarreiraStatusOrdem}
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
