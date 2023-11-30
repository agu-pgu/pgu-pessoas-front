import React, { useState } from "react";
import "./Functions.scss";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createFunction } from "../../../services/callsAdministration/callsFuncion";

export default function Functions() {
  const [funcao, setFuncao] = useState("");
  // const [funcaoDescricao, setFuncaoDescricao] = useState("");

  const handleSubmitForCreateFuncao = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          FUNCAO: {
            funcao_nome: funcao,
          },
        },
      ],
    };

    try {
      const response = await createFunction(data);
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
      <h1 className="formulario-h2">Administrativo - Funções</h1>
        <div className="form-scroll">
        <h3 className="formulario-h3">Formulário administrativo de "Funções"</h3>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateFuncao}
          >
            <label className="form-label">*Função:</label>
            <input
              className="form-input"
              type="text"
              name="funcao"
              id="funcao"
              value={funcao}
              onChange={(event) => setFuncao(event.target.value)}
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
