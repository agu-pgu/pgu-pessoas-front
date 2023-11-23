import React, { useState } from "react";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import "./Contest.scss";
import {
  createContest,
  createContestCota,
} from "../../../services/callsAdministration/callsContest";

export default function Contest() {
  const [concurso, setConcurso] = useState("");
  const [concursoEdital, setConcursoEdital] = useState("");
  const [concursoAno, setConcursoAno] = useState("");
  const [concursoCota, setConcursoCota] = useState("");
  // const [concursoDescricao, setConcursoDescricao] = useState("");

  const handleSubmitForCreateConcurso = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CONCURSO: {
            concurso_nome: concurso,
            concurso_ano: concursoAno,
            concurso_edital: concursoEdital,
          },
        },
      ],
    };

    try {
      const response = await createContest(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  const handleSubmitForCreateConcursoCota = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CONCURSO_COTA: {
            concurso_cota_nome: concursoCota,
          },
        },
      ],
    };

    try {
      const response = await createContestCota(data);
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
            onSubmit={handleSubmitForCreateConcurso}
          >
            <label className="form-label">*Concurso:</label>
            <input
              className="form-input"
              type="text"
              name="concurso"
              id="concurso"
              value={concurso}
              onChange={(event) => setConcurso(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Concurso Ano:</label>
            <input
              className="form-input"
              type="text"
              name="concursoAno"
              id="concursoAno"
              value={concursoAno}
              onChange={(event) => setConcursoAno(event.target.value)}
              maxLength={4}
              required
            />
            <label className="form-label">*Concurso Edital:</label>
            <input
              className="form-input"
              type="text"
              name="concursoEdital"
              id="concursoEdital"
              value={concursoEdital}
              onChange={(event) => setConcursoEdital(event.target.value)}
              maxLength={255}
              required
            />
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateConcursoCota}
          >
            <label className="form-label">*Concurso Cota:</label>
            <input
              className="form-input"
              type="text"
              name="concursoCota"
              id="concursoCota"
              value={concursoCota}
              onChange={(event) => setConcursoCota(event.target.value)}
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
