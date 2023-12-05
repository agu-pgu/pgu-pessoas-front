import React, { useEffect, useState } from "react";
import {
  getMunicipioId,
  updateMunicipio,
} from "../../../../services/callsSettings/callsUpdateMunicipio";
import { CreateError, ErrorAtGetData, createPersonSucess } from "../../../../assets/js/Alerts";
import "./UpdateMunicipio.scss";

export default function UpdateMunicipio({ id, handleClose }) {
  const [nome, setNome] = useState("");
  const municipioId = String(id);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const data = {
      ATUALIZAR: [
        {
          MUNICIPIO: {
            municipio_id: municipioId,
            ATUALIZAR: {
              municipio_nome: nome,
            },
          },
        },
      ],
    };
    try {
      const response = await updateMunicipio(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
  };

  useEffect(() => {
    const getPavimentarMunicipio = async () => {
      try {
        const response = await getMunicipioId(municipioId);
        const municipioData = response.data.RETORNO[0].RETORNO[0];
        setNome(municipioData.MUNICIPIO.municipio_nome || "");
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarMunicipio();

    return () => {};
  }, [id]);

  return (
    <div className="update-municipio-modal">
      <div className="update-municipio-modal-content">
        <h2 className="update-h2">Atualizar Municipio</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">Nome:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <div className="button-container">
            <button className="cancel-button" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
