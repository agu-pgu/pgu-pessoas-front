import React, { useState } from "react";
import "./Ticket.scss";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createTicket } from "../../../services/callsAdministration/callsTicket";

export default function Ticket() {
  const [ingresso, setIngresso] = useState("");
  const [ingressoDescricao, setIngressoDescricao] = useState("");

  const handleSubmitForCreateIngresso = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          INGRESSO: {
            ingresso_nome: ingresso,
            ingresso_descricao: ingressoDescricao,
          },
        },
      ],
    };

    try {
      const response = await createTicket(data);
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
      <h1 className="formulario-h2">Administrativo - Ingresso</h1>
        <div className="form-scroll">
        <h3 className="formulario-h3">Formulário administrativo de "Ingresso"</h3>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateIngresso}
          >
            <label className="form-label">*Ingresso:</label>
            <input
              className="form-input"
              type="text"
              name="ingresso"
              id="ingresso"
              value={ingresso}
              onChange={(event) => setIngresso(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Ingresso Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="ingressoDescricao"
              id="ingressoDescricao"
              value={ingressoDescricao}
              onChange={(event) => setIngressoDescricao(event.target.value)}
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
