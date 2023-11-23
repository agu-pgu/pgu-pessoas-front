import React, { useState } from "react";
import "./Ticket.scss";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createTicket } from "../../../services/callsAdministration/callsTicket";

export default function Ticket() {
  const [ingresso, setIngresso] = useState("");
  // const [setorDescricao, setSetorDescricao] = useState("");

  const handleSubmitForCreateIngresso = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          INGRESSO: {
            ingresso_nome: ingresso,
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
        <div className="form-scroll">
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
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
