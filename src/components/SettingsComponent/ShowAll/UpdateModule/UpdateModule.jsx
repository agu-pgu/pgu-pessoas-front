import React, { useEffect, useState } from "react";
import { getModuloId, updateModule } from "../../../../services/callsSettings/callsUpdateModulo";
import { CreateError, ErrorAtGetData, createPersonSucess } from "../../../../assets/js/Alerts";
import "./UpdateModule.scss";
export default function UpdateModule({id, handleClose}) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const moduleId = String(id);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const data = {
      ATUALIZAR: [
        {
          MODULO: {
            modulo_id: moduleId,
            ATUALIZAR: {
              modulo_nome: nome,
              modulo_descricao: descricao,
            },
          },
        },
      ],
    };
    try {
      const response = await updateModule(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
  };

  useEffect(() => {
    const getPavimentarModulo = async () => {
      try {
        const response = await getModuloId(moduleId);
        const moduloData = response.data.RETORNO[0].RETORNO[0];
        setNome(moduloData.MODULO.modulo_nome || "");
        setDescricao(moduloData.MODULO.modulo_descricao || "");
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarModulo();

    return () => {};
  }, [id]);

  return (
    <div className="update-module-modal">
      <div className="update-module-modal-content">
        <h2 className="update-h2">Atualizar Módulo</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">Nome:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label className="label-update">Descrição:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
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
