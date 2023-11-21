import React, { useState } from "react";
import "./Vacation.scss";

export default function Vacation() {
  const [feriasInicio, setFeriasInicio] = useState("");
  const [feriasFim, setFeriasFim] = useState("");
  const [feriasAno, setFeriasAno] = useState("");
  const [pessoa, setPessoa] = useState(""); // pavimentar
  const [feriasMotivoStatusDescricao, setFeriasMotivoStatusDescricao] =
    useState("");
  const [feriasStatus, setFeriasStatus] = useState(""); // pavimentar

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      CADASTRAR: [
        {
          FERIAS: {
            ferias_inicio: feriasInicio,
            ferias_fim: feriasFim,
            ferias_ano: feriasAno,
            pessoa_id: pessoa,
          },
          FERIAS_MOTIVO_STATUS: {
            ferias_motivo_status_descricao: feriasMotivoStatusDescricao,
            ferias_status_id: feriasStatus,
          },
        },
      ],
    };

    console.log(data);
  };

  return (
    <div>
      <div className="formulario-container">
        <div className="form-scroll">
          <form className="formulario-container" onSubmit={handleSubmit}>
            <label className="form-label">*Ferias Início:</label>
            <input
              className="form-input"
              type="date"
              name="feriasInicio"
              id="feriasInicio"
              value={feriasInicio}
              onChange={(event) => setFeriasInicio(event.target.value)}
              required
            />
            <label className="form-label">*Ferias Fim:</label>
            <input
              className="form-input"
              type="date"
              name="feriasFim"
              id="feriasFim"
              value={feriasFim}
              onChange={(event) => setFeriasFim(event.target.value)}
              required
            />
            <label className="form-label">*Ferias Ano:</label>
            <input
              className="form-input"
              type="text"
              name="feriasAno"
              id="feriasAno"
              value={feriasAno}
              onChange={(event) => setFeriasAno(event.target.value)}
              required
            />
            <label className="form-label">*Pessoa:</label>
            <input
              className="form-input"
              type="text"
              name="pessoa"
              id="pessoa"
              value={pessoa}
              onChange={(event) => setPessoa(event.target.value)}
              required
            />
            <label className="form-label">
              *Ferias - Motivo - Descrição - Status:
            </label>
            <input
              className="form-input"
              type="text"
              name="feriasMotivoStatusDescricao"
              id="feriasMotivoStatusDescricao"
              value={feriasMotivoStatusDescricao}
              onChange={(event) =>
                setFeriasMotivoStatusDescricao(event.target.value)
              }
              required
            />
            <label className="form-label">*Ferias - Status:</label>
            <input
              className="form-input"
              type="text"
              name="feriasStatus"
              id="feriasStatus"
              value={feriasStatus}
              onChange={(event) => setFeriasStatus(event.target.value)}
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
