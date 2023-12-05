import React, { useEffect, useState } from "react";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../../assets/js/Alerts";
import { getUfId, updateUf } from "../../../../services/callsSettings/callsUpdateUf";

export default function UpdateUf({ id, handleClose }) {
  const [nome, setNome] = useState("");
  const [regiao, setRegiao] = useState("");
  const [sigla, setSigla] = useState("");
  const ufId = String(id);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const data = {
      ATUALIZAR: [
        {
          UF: {
            uf_id: ufId,
            ATUALIZAR: {
              uf_nome: nome,
              uf_regiao: regiao,
              uf_sigla: sigla,
            },
          },
        },
      ],
    };
    try {
      const response = await updateUf(data);
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
        const response = await getUfId(ufId);
        const ufData = response.data.RETORNO[0].RETORNO[0];
        setNome(ufData.UF.uf_nome || "");
        setRegiao(ufData.UF.uf_regiao || "");
        setSigla(ufData.UF.uf_sigla || "");
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
        <h2 className="update-h2">Atualizar UF</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">Nome:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label className="label-update">Região:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Região"
            value={regiao}
            onChange={(e) => setRegiao(e.target.value)}
          />
          <label className="label-update">Sigla:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Sigla"
            value={sigla}
            onChange={(e) => setSigla(e.target.value)}
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
