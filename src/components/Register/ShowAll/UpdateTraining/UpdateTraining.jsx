import React, { useEffect, useState } from "react";
import "./UpdateTraining.scss";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../../assets/js/Alerts";
import {
  getCapacitacaoId,
  getCapacitacaoStatus,
  getCapacitacaoTipo,
  getPessoa,
  updateCapacitacao,
} from "../../../../services/CallsPerson/callsUpdateTraining";

export default function UpdateTraining({ id, handleClose }) {
  const idString = String(id);
  const [capacitacaoNome, setCapacitacaoNome] = useState("");
  const [capacitacaoDescricao, setCapacitacaoDescricao] = useState("");
  const [capacitacaoInicio, setCapacitacaoInicio] = useState("");
  const [initialCapacitacaoInicio, setInitialCapacitacaoInicio] = useState("");
  const [capacitacaoFim, setCapacitacaoFim] = useState("");
  const [initialCapacitacaoFim, setInitialCapacitacaoFim] = useState("");
  const [capacitacaoTipoId, setCapacitacaoTipoId] = useState("");
  const [pessoaId, setPessoaId] = useState("");
  const [capacitaçãoStatusId, setCapacitaçãoStatusId] = useState("");
  const [optionsCapacitacaoTipo, setOptionsCapacitacaoTipo] = useState([]);
  const [optionsPessoa, setOptionsPessoa] = useState([]);
  const [optionsCapacitacaoStatus, setOptionsCapacitacaoStatus] = useState([]);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    const capacitacaoString = String(capacitacaoTipoId);
    const pessoaString = String(pessoaId);
    const capacitacaoStatusString = String(capacitaçãoStatusId);

    e.preventDefault();
    const data = {
      ATUALIZAR: [
        {
          CAPACITACAO: {
            capacitacao_id: idString,
            ATUALIZAR: {
              capacitacao_nome: capacitacaoNome,
              capacitacao_descricao: capacitacaoDescricao,
              capacitacao_inicio: capacitacaoInicio,
              capacitacao_fim: capacitacaoFim,
              capacitacao_tipo_id: capacitacaoString,
              pessoa_id: pessoaString,
            },
          },
          CAPACITACAO_MOTIVO_STATUS: {
            capacitacao_status_id: capacitacaoStatusString,
            // capacitacao_motivo_status_descricao: "",
          },
        },
      ],
    };

    try {
      const response = await updateCapacitacao(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
  };

  useEffect(() => {
    const getPavimentarCapacitacao = async () => {
      try {
        const response = await getCapacitacaoId(idString);
        const capacitacaoData = response.data.RETORNO[0][0].RETORNO[0];

        setCapacitacaoDescricao(
          capacitacaoData.CAPACITACAO.capacitacao_descricao || ""
        );
        setCapacitacaoNome(capacitacaoData.CAPACITACAO.capacitacao_nome || "");
        setInitialCapacitacaoInicio(
          capacitacaoData.CAPACITACAO.capacitacao_inicio || ""
        );

        if (
          capacitacaoData.CAPACITACAO.capacitacao_inicio !== undefined &&
          capacitacaoData.CAPACITACAO.capacitacao_inicio !== ""
        ) {
          const DateArray =
            capacitacaoData.CAPACITACAO.capacitacao_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setCapacitacaoInicio(formattedDate);
        } else {
          setCapacitacaoInicio("");
        }

        setInitialCapacitacaoFim(
          capacitacaoData.CAPACITACAO.capacitacao_fim || ""
        );

        if (
          capacitacaoData.CAPACITACAO.capacitacao_fim !== undefined &&
          capacitacaoData.CAPACITACAO.capacitacao_fim !== ""
        ) {
          const DateArray =
            capacitacaoData.CAPACITACAO.capacitacao_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setCapacitacaoFim(formattedDate);
        } else {
          setCapacitacaoFim("");
        }

        setCapacitacaoTipoId(
          capacitacaoData.CAPACITACAO.capacitacao_tipo_id[0]?.CAPACITACAO_TIPO
            ?.capacitacao_tipo_id || ""
        );

        setPessoaId(
          capacitacaoData.CAPACITACAO.pessoa_id[0]?.PESSOA?.pessoa_id || ""
        );

        setCapacitaçãoStatusId(
          capacitacaoData.CAPACITACAO_MOTIVO_STATUS.RETORNO[0]
            ?.CAPACITACAO_MOTIVO_STATUS?.capacitacao_status_id[0]
            .CAPACITACAO_STATUS.capacitacao_status_id || ""
        );
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarCapacitacao();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarCapacitacaoTipo = async () => {
      try {
        const response = await getCapacitacaoTipo();
        const capacitacaoTipoData = response.data.RETORNO[0].RETORNO;

        const options = capacitacaoTipoData.map((item) => (
          <option
            key={item.CAPACITACAO_TIPO.capacitacao_tipo_id}
            value={item.CAPACITACAO_TIPO.capacitacao_tipo_id}
          >
            {item.CAPACITACAO_TIPO.capacitacao_tipo_nome}
          </option>
        ));

        capacitacaoTipoData.forEach((item) => {
          if (capacitacaoTipoId === item.CAPACITACAO_TIPO.capacitacao_tipo_id) {
            options[0] = (
              <option
                key={item.CAPACITACAO_TIPO.capacitacao_tipo_id}
                value={item.CAPACITACAO_TIPO.capacitacao_tipo_id}
                selected
              >
                {item.CAPACITACAO_TIPO.afastamento_tipo_nome}
              </option>
            );
          }
        });
        setOptionsCapacitacaoTipo(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarCapacitacaoTipo();

    return () => {};
  }, []);

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
    const getPavimentarCapacitacaoStatus = async () => {
      try {
        const response = await getCapacitacaoStatus();
        const capacitacaoStatusData = response.data.RETORNO[0].RETORNO;

        const options = capacitacaoStatusData.map((item) => (
          <option
            key={item.CAPACITACAO_STATUS.capacitacao_status_id}
            value={item.CAPACITACAO_STATUS.capacitacao_status_id}
          >
            {item.CAPACITACAO_STATUS.capacitacao_status_nome}
          </option>
        ));

        capacitacaoStatusData.forEach((item) => {
          if (
            capacitaçãoStatusId ===
            item.CAPACITACAO_STATUS.capacitacao_status_id
          ) {
            options[0] = (
              <option
                key={item.CAPACITACAO_STATUS.capacitacao_status_id}
                value={item.CAPACITACAO_STATUS.capacitacao_status_id}
                selected
              >
                {item.CAPACITACAO_STATUS.capacitacao_status_nome}
              </option>
            );
          }
        });
        setOptionsCapacitacaoStatus(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarCapacitacaoStatus();

    return () => {};
  }, []);

  return (
    <div className="update-training-modal">
      <div className="update-training-modal-content">
        <h2 className="update-h2">Atualizar Capacitação</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">Capacitação - Nome:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Nome"
            value={capacitacaoNome}
            onChange={(e) => setCapacitacaoNome(e.target.value)}
            maxLength={255}
          />
          <label className="label-update">Capacitação - Descrição:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Nome"
            value={capacitacaoDescricao}
            onChange={(e) => setCapacitacaoDescricao(e.target.value)}
          />
          <label className="label-update">
            Data inicial atual: {initialCapacitacaoInicio}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={capacitacaoInicio || ""}
            onChange={(e) => setCapacitacaoInicio(e.target.value)}
          />
          <label className="label-update">
            Data final atual: {initialCapacitacaoFim}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data final"
            value={capacitacaoFim || ""}
            onChange={(e) => setCapacitacaoFim(e.target.value)}
          />
          <label className="label-update">Capacitação - Tipo:</label>
          <select
            className="input-update"
            name="capacitacao_tipo_id"
            id="capacitacao_tipo_id"
            value={capacitacaoTipoId}
            onChange={(event) => setCapacitacaoTipoId(event.target.value)}
          >
            {optionsCapacitacaoTipo}
          </select>
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
          <label className="label-update">Capacitação - Status:</label>
          <select
            className="input-update"
            name="capacitacao_status_id"
            id="capacitacao_status_id"
            value={capacitaçãoStatusId}
            onChange={(event) => setCapacitaçãoStatusId(event.target.value)}
          >
            {optionsCapacitacaoStatus}
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
