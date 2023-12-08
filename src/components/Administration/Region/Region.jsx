import React, { useState } from "react";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createRegion } from "../../../services/callsAdministration/callsRegion";

export default function Region() {
  const [regiao, setRegiao] = useState("");
  const [regiaoSigla, setRegiaoSigla] = useState("");
  const [regiaoDescricao, setRegiaoDescricao] = useState("");

  const handleSubmitForCreateRegiao = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          REGIAO: {
            regiao_nome: regiao,
            regiao_sigla: regiaoSigla,
            regiao_descricao: regiaoDescricao,
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
          <h3 className="formulario-h3">
            Formulário administrativo de "Região"
          </h3>
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
            <label className="form-label">*Região Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="regiaoDescricao"
              id="regiaoDescricao"
              value={regiaoDescricao}
              onChange={(event) => setRegiaoDescricao(event.target.value)}
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
