import React, { useState } from "react";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import "./WorkRegime.scss";
import {
  createWorkRegimeModalidade,
  createWorkRegimeTipo,
} from "../../../services/callsAdministration/callsWorkRegime";

export default function WorkRegime() {
  const [regimeTrabalhoModalidade, setRegimeTrabalhoModalidade] = useState("");
  const [regimeTrabalhoTipo, setRegimeTrabalhoTipo] = useState("");

  const handleSubmitForCreateRegimeTrabalhoModalidade = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          REGIME_TRABALHO_MODALIDADE: {
            regime_trabalho_modalidade_nome: regimeTrabalhoModalidade,
          },
        },
      ],
    };

    try {
      const response = await createWorkRegimeModalidade(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  const handleSubmitForCreateRegimeTrabalhoTipo = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          REGIME_TRABALHO_TIPO: {
            regime_trabalho_tipo_nome: regimeTrabalhoTipo,
          },
        },
      ],
    };

    try {
      const response = await createWorkRegimeTipo(data);
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
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateRegimeTrabalhoModalidade}
          >
            <label className="form-label">
              *Regime de Trabalho - Modalidade:
            </label>
            <input
              className="form-input"
              type="text"
              name="regimeTrabalhoModalidade"
              id="regimeTrabalhoModalidade"
              value={regimeTrabalhoModalidade}
              onChange={(event) =>
                setRegimeTrabalhoModalidade(event.target.value)
              }
              maxLength={255}
              required
            />
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateRegimeTrabalhoTipo}
          >
            <label className="form-label">*Regime de Trabalho - Tipo:</label>
            <input
              className="form-input"
              type="text"
              name="regimeTrabalhoTipo"
              id="regimeTrabalhoTipo"
              value={regimeTrabalhoTipo}
              onChange={(event) => setRegimeTrabalhoTipo(event.target.value)}
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
