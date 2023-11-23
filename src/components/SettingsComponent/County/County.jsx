import React, { useEffect, useState } from "react";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";
import {
  createCounty,
  getUf,
} from "../../../services/callsSettings/callsCounty";
import "./County.scss";

export default function County() {
  const [municipio, setMunicipio] = useState("");
  const [ufId, setUfId] = useState("");
  const [optionsUf, setOptionsUf] = useState([]);

  const handleSubmitForCreateCounty = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          MUNICIPIO: {
            municipio_nome: municipio,
            uf_id: ufId,
          },
        },
      ],
    };

    try {
      const response = await createCounty(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  useEffect(() => {
    const getPavimentarUf = async () => {
      try {
        const response = await getUf();
        const ufData = response.data.RETORNO[0].RETORNO;
        const options = ufData.map((item) => (
          <option key={item.UF.uf_id} value={item.UF.uf_id}>
            {item.UF.uf_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsUf(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarUf();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateCounty}
          >
            <label className="form-label">*Município:</label>
            <input
              className="form-input"
              type="text"
              name="municipio"
              id="municipio"
              value={municipio}
              onChange={(event) => setMunicipio(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*UF:</label>
            <select
              className="form-input"
              name="ufId"
              id="ufId"
              value={ufId}
              onChange={(event) => setUfId(event.target.value)}
              required
            >
              {optionsUf}
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
