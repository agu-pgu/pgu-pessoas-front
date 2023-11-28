import React, { useState } from "react";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createRegion } from "../../../services/callsAdministration/callsRegion";

export default function Region() {
  const [regiao, setRegiao] = useState("");
  const [regiaoSigla, setRegiaoSigla] = useState("");
  // const [cargoDescricao, setCargoDescricao] = useState("");

  const handleSubmitForCreateRegiao = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          REGIAO: {
            regiao_nome: regiao,
            regiao_sigla: regiaoSigla,
          },
        },
      ],
    };

    try {
      const response = await createRegion(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  return (
    <div>
      <div className="formulario-container">
      <h1 className="formulario-h2">Administrativo - Região</h1>
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateRegiao}
          >
            <label className="form-label">*Região:</label>
            <input
              className="form-input"
              type="text"
              name="regiao"
              id="regiao"
              value={regiao}
              onChange={(event) => setRegiao(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Região Sigla:</label>
            <input
              className="form-input"
              type="text"
              name="regiaoSigla"
              id="regiaoSigla"
              value={regiaoSigla}
              onChange={(event) => setRegiaoSigla(event.target.value)}
              maxLength={255}
              required
            />
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
