import React, { useState } from "react";
import { CreateError, createPersonSucess } from "../../../assets/js/Alerts";
import { createModule } from "../../../services/callsSettings/callsModule";

export default function Module() {
  const [modulo, setModulo] = useState("");

  const handleSubmitForCreateModule = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          MODULO: {
            modulo_nome: modulo,
          },
        },
      ],
    };

    try {
      const response = await createModule(data);
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
      <h1 className="formulario-h2">Configurações - Módulo</h1>
        <div className="form-scroll">
        <h3 className="formulario-h3">Formulário de configurações - "Módulo"</h3>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateModule}
          >
            <label className="form-label">*Módulo:</label>
            <input
              className="form-input"
              type="text"
              name="modulo"
              id="modulo"
              value={modulo}
              onChange={(event) => setModulo(event.target.value)}
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
