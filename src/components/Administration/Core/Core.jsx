import React, { useState } from 'react'
import "./Core.scss";
import { CreateError, createPersonSucess } from '../../../assets/js/Alerts';
import { createCore } from '../../../services/callsAdministration/CallsCore';

export default function Core() {
  const [nucleo, setNucleo] = useState("");
  // const [nucleoDescricao, setNucleoDescricao] = useState("");

  const handleSubmitForCreateNucleo = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          NUCLEO: {
            nucleo_nome: nucleo,
          },
        },
      ],
    };

    try {
      const response = await createCore(data);
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
      <h1 className="formulario-h2">Administrativo - Núcleo</h1>
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateNucleo}
          >
            <label className="form-label">*Núcleo:</label>
            <input
              className="form-input"
              type="text"
              name="nucleo"
              id="nucleo"
              value={nucleo}
              onChange={(event) => setNucleo(event.target.value)}
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
