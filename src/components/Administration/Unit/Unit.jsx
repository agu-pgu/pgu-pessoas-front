import React, { useState } from "react";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createUnit } from "../../../services/callsAdministration/callsUnit";
import "./Unit.scss";

export default function Unit() {
  const [unidade, setUnidade] = useState("");
  const [unidadeDescricao, setUnidadeDescricao] = useState("");
  const [unidadeSigla, setUnidadeSigla] = useState("");

  const handleSubmitForCreateUnidade = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          UNIDADE: {
            unidade_nome: unidade,
            unidade_sigla: unidadeSigla,
            unidade_descricao: unidadeDescricao,
          },
        },
      ],
    };

    try {
      const response = await createUnit(data);
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
        <h1 className="formulario-h2">Administrativo - Unidade</h1>
        <div className="form-scroll">
          <h3 className="formulario-h3">
            Formulário administrativo de "Unidade"
          </h3>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateUnidade}
          >
            <label className="form-label">*Unidade:</label>
            <input
              className="form-input"
              type="text"
              name="unidade"
              id="unidade"
              value={unidade}
              onChange={(event) => setUnidade(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Unidade Sigla:</label>
            <input
              className="form-input"
              type="text"
              name="unidadeSigla"
              id="unidadeSigla"
              value={unidadeSigla}
              onChange={(event) => setUnidadeSigla(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Unidade Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="unidadeDescricao"
              id="unidadeDescricao"
              value={unidadeDescricao}
              onChange={(event) => setUnidadeDescricao(event.target.value)}
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
