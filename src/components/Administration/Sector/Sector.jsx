import React, { useState } from "react";
import "./Sector.scss";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createSector } from "../../../services/callsAdministration/callsSector";

export default function Sector() {
  const [setor, setSetor] = useState("");
  // const [setorDescricao, setSetorDescricao] = useState("");
  const [setorSigla, setSetorSigra] = useState("");

  const handleSubmitForCreateSetor = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          SETOR: {
            setor_nome: setor,
            setor_sigla: setorSigla,
          },
        },
      ],
    };

    try {
      const response = await createSector(data);
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
        <h1 className="formulario-h2">Administrativo - Setor</h1>
        <div className="form-scroll">
          <h3 className="formulario-h3">
            Formulário administrativo de "Setor"
          </h3>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateSetor}
          >
            <label className="form-label">*Setor:</label>
            <input
              className="form-input"
              type="text"
              name="setor"
              id="setor"
              value={setor}
              onChange={(event) => setSetor(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Setor Sigla:</label>
            <input
              className="form-input"
              type="text"
              name="setorSigla"
              id="setorSigla"
              value={setorSigla}
              onChange={(event) => setSetorSigra(event.target.value)}
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
