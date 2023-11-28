import React, { useState } from "react";
import "./Coordination.scss";
import { createCoordination } from "../../../services/callsAdministration/CallsCoordination";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";

export default function Coordination() {
  const [coordenacao, setCoordenacao] = useState("");
  // const [setorDescricao, setSetorDescricao] = useState("");
  const [coordenacaoSigla, setCoordenacaoSigra] = useState("");

  const handleSubmitForCreateCoordenacao = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          COORDENACAO: {
            coordenacao_nome: coordenacao,
            coordenacao_sigla: coordenacaoSigla,
          },
        },
      ],
    };

    try {
      const response = await createCoordination(data);
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
      <h1 className="formulario-h2">Administrativo - Coordenação</h1>
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateCoordenacao}
          >
            <label className="form-label">*Coordenação:</label>
            <input
              className="form-input"
              type="text"
              name="coordenacao"
              id="coordenacao"
              value={coordenacao}
              onChange={(event) => setCoordenacao(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Coordenação Sigla:</label>
            <input
              className="form-input"
              type="text"
              name="coordenacaoSigla"
              id="coordenacaoSigla"
              value={coordenacaoSigla}
              onChange={(event) => setCoordenacaoSigra(event.target.value)}
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
