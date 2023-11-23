import React, { useState } from "react";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createGender } from "../../../services/callsSettings/callsGender";
import "./Gender.scss";

export default function Gender() {
  const [genero, setGenero] = useState("");

  const handleSubmitForCreateGender = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          GENERO: {
            genero_nome: genero,
          },
        },
      ],
    };

    try {
      const response = await createGender(data);
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
            onSubmit={handleSubmitForCreateGender}
          >
            <label className="form-label">*Gênero:</label>
            <input
              className="form-input"
              type="text"
              name="genero"
              id="genero"
              value={genero}
              onChange={(event) => setGenero(event.target.value)}
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
