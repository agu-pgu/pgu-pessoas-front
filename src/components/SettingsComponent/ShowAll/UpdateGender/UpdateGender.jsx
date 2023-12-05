import React, { useEffect, useState } from "react";
import "./UpdateGender.scss";
import { getGeneroId, updateGender } from "../../../../services/callsSettings/callsUpdateGender";
import { CreateError, ErrorAtGetData, createPersonSucess } from "../../../../assets/js/Alerts";

export default function UpdateGender({id, handleClose}) {
  const [genero, setGenero] = useState("");
  const generoId = String(id);


  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const data = {
      ATUALIZAR: [
        {
          GENERO: {
            genero_id: generoId,
            ATUALIZAR: {
              genero_nome: genero,
            },
          },
        },
      ],
    };
    try {
      const response = await updateGender(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
  };

  useEffect(() => {
    const getPavimentarGenero = async () => {
      try {
        const response = await getGeneroId(generoId);
        const generoData = response.data.RETORNO[0].RETORNO[0];
        setGenero(generoData.GENERO.genero_nome || "");
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarGenero();

    return () => {};
  }, [id]);

 return (
    <div className="update-gender-modal">
      <div className="update-gender-modal-content">
        <h2 className="update-h2">Atualizar Gênero</h2>
        <form onSubmit={handleConfirm}>
        <label className="label-update">Gênero:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Gênero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
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
