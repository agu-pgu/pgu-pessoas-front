import React, { useState } from "react";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import "./UfComponent.scss";
import { createUF } from "../../../services/callsSettings/callsUF";

export default function UfComponent() {
  const [ufNome, setUfNome] = useState("");
  const [ufSigla, setUfSigla] = useState("");
  const [ufRegiao, setUfRegiao] = useState("");

  const handleSubmitForCreateUf = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          UF: {
            uf_nome: ufNome,
            uf_sigla: ufSigla,
            uf_regiao: ufRegiao,
          },
        },
      ],
    };

    try {
      const response = await createUF(data);
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
        <h1 className="formulario-h2">Configurações - UF</h1>
        <div className="form-scroll">
          <h3 className="formulario-h3">Formulário de configurações - "UF"</h3>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateUf}
          >
            <label className="form-label">*UF:</label>
            <input
              className="form-input"
              type="text"
              name="uf"
              id="uf"
              value={ufNome}
              onChange={(event) => setUfNome(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*UF Sigla:</label>
            <input
              className="form-input"
              type="text"
              name="ufSigla"
              id="ufSigla"
              value={ufSigla}
              onChange={(event) => setUfSigla(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*UF Região:</label>
            <input
              className="form-input"
              type="text"
              name="ufRegiao"
              id="ufRegiao"
              value={ufRegiao}
              onChange={(event) => setUfRegiao(event.target.value)}
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
