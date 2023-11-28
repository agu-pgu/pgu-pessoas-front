import React, { useState } from "react";
import "./Positions.scss";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createPositions } from "../../../services/callsAdministration/CallsPositions";

export default function Positions() {
  const [cargo, setCargo] = useState("");
  // const [cargoDescricao, setCargoDescricao] = useState("");

  const handleSubmitForCreateCargo = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CARGO: {
            cargo_nome: cargo,
          },
        },
      ],
    };

    try {
      const response = await createPositions(data);
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
      <h1 className="formulario-h2">Administrativo - Cargo</h1>
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateCargo}
          >
            <label className="form-label">*Cargo:</label>
            <input
              className="form-input"
              type="text"
              name="cargo"
              id="cargo"
              value={cargo}
              onChange={(event) => setCargo(event.target.value)}
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
