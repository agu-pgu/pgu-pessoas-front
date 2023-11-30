import React, { useEffect, useState } from "react";
import {
  getFeriasId,
  getFeriasStatus,
  getPessoa,
  updateVacation,
} from "../../../../services/CallsPerson/callsUpdateVacation";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../../assets/js/Alerts";
import "./UpdateVacation.scss";

export default function UpdateVacation({ id, handleClose }) {
  const idString = String(id);
  const [feriasInicio, setFeriasInicio] = useState("");
  const [initialFeriasInicio, setInicialFeriasInicio] = useState("");
  const [feriasFim, setFeriasFim] = useState("");
  const [initialFeriasFim, setInicialFeriasFim] = useState("");
  const [feriasAno, setFeriasAno] = useState("");
  const [pessoaId, setPessoaId] = useState("");
  const [feriasStatusId, setFeriasStatusId] = useState("");
  //   const [feriasMotivoStatus, setFeriasMotivoStatus] = useState("");
  const [optionsPessoa, setOptionsPessoa] = useState([]);
  const [optionsFeriasStatus, setOptionsFeriasStatus] = useState([]);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    const pessoaString = String(pessoaId);
    const feriasStatusString = String(feriasStatusId);

    e.preventDefault();
    const data = {
      ATUALIZAR: [
        {
          FERIAS: {
            ferias_id: idString,
            ATUALIZAR: {
              ferias_inicio: feriasInicio,
              ferias_fim: feriasFim,
              ferias_ano: feriasAno,
              pessoa_id: pessoaString,
            },
          },
          FERIAS_MOTIVO_STATUS: {
            ferias_status_id: feriasStatusString,
          },
        },
      ],
    };

    try {
      const response = await updateVacation(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
  };

  useEffect(() => {
    const getPavimentarFerias = async () => {
      try {
        const response = await getFeriasId(idString);
        const feriasData = response.data.RETORNO[0][0].RETORNO[0];
        console.log(feriasData);

        setInicialFeriasInicio(feriasData.FERIAS.ferias_inicio || "");
        if (
          feriasData.FERIAS.ferias_inicio !== undefined &&
          feriasData.FERIAS.ferias_inicio !== ""
        ) {
          // Convertendo a string de data para o formato desejado (YYYY-MM-DD HH:mm:ss)
          const DateArray = feriasData.FERIAS.ferias_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setFeriasInicio(formattedDate);
        } else {
          setFeriasInicio("");
        }

        setInicialFeriasFim(feriasData.FERIAS.ferias_fim || "");
        if (
          feriasData.FERIAS.ferias_fim !== undefined &&
          feriasData.FERIAS.ferias_fim !== ""
        ) {
          // Convertendo a string de data para o formato desejado (YYYY-MM-DD HH:mm:ss)
          const DateArray = feriasData.FERIAS.ferias_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setFeriasFim(formattedDate);
        } else {
          setFeriasFim("");
        }

        setFeriasAno(feriasData.FERIAS.ferias_ano || "");

        setPessoaId(feriasData.FERIAS.pessoa_id[0].PESSOA.pessoa_id || "");

        setFeriasStatusId(
          feriasData.FERIAS_MOTIVO_STATUS.RETORNO[0].FERIAS_MOTIVO_STATUS
            .ferias_status_id[0].FERIAS_STATUS.ferias_status_id || ""
        );
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarFerias();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getPessoa();
        const pessoaData = response.data.RETORNO[0].RETORNO;
        const options = pessoaData.map((item) => (
          <option key={item.PESSOA.pessoa_id} value={item.PESSOA.pessoa_id}>
            {item.PESSOA.pessoa_nome}
          </option>
        ));

        pessoaData.forEach((item) => {
          if (pessoaId === item.PESSOA.pessoa_id) {
            options[0] = (
              <option
                key={item.PESSOA.pessoa_id}
                value={item.PESSOA.pessoa_id}
                selected
              >
                {item.PESSOA.pessoa_nome}
              </option>
            );
          }
        });
        setOptionsPessoa(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarPessoa();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarFeriasStatus = async () => {
      try {
        const response = await getFeriasStatus();
        const feriasStatusData = response.data.RETORNO[0].RETORNO;
        const options = feriasStatusData.map((item) => (
          <option
            key={item.FERIAS_STATUS.ferias_status_id}
            value={item.FERIAS_STATUS.ferias_status_id}
          >
            {item.FERIAS_STATUS.ferias_status_nome}
          </option>
        ));

        feriasStatusData.forEach((item) => {
          if (feriasStatusId === item.FERIAS_STATUS.ferias_status_id) {
            options[0] = (
              <option
                key={item.FERIAS_STATUS.ferias_status_id}
                value={item.FERIAS_STATUS.ferias_status_id}
                selected
              >
                {item.FERIAS_STATUS.ferias_status_nome}
              </option>
            );
          }
        });
        setOptionsFeriasStatus(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarFeriasStatus();

    return () => {};
  }, []);

  return (
    <div className="update-person-modal">
      <div className="update-person-modal-content">
        <h2 className="update-h2">Atualizar Férias</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">
            Data Inicial atual: {initialFeriasInicio}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="data de início"
            value={feriasInicio || ""}
            onChange={(e) => setFeriasInicio(e.target.value)}
          />
          <label className="label-update">
            Data Final atual: {initialFeriasFim}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data de Nascimento"
            value={feriasFim || ""}
            onChange={(e) => setFeriasFim(e.target.value)}
          />
          <label className="label-update">Ano:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Ano"
            value={feriasAno}
            onChange={(e) => setFeriasAno(e.target.value)}
            maxLength={4}
          />
          <label className="label-update">Pessoa:</label>
          <select
            className="input-update"
            name="pessoa_id"
            id="pessoa_id"
            value={pessoaId}
            onChange={(event) => setPessoaId(event.target.value)}
          >
            {optionsPessoa}
          </select>
          <label className="label-update">Férias - Status:</label>
          <select
            className="input-update"
            name="ferias_status_id"
            id="ferias_status_id"
            value={feriasStatusId}
            onChange={(event) => setFeriasStatusId(event.target.value)}
          >
            {optionsFeriasStatus}
          </select>
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
