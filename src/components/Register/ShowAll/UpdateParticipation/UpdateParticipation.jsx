import React, { useEffect, useState } from "react";
import "./UpdateParticipation.scss";
import { CreateError, ErrorAtGetData, createPersonSucess } from "../../../../assets/js/Alerts";
import {
  getParticipationId,
  getParticipationStatus,
  getParticipationType,
  getPerson,
  updateParticipation,
} from "../../../../services/CallsPerson/callsUpdateParticipation";

export default function UpdateParticipation({ id, handleClose }) {
  const idString = String(id);
  const [participacaoNome, setParticipacaoNome] = useState("");
  const [participacaoDescricao, setParticipacaoDescricao] = useState("");
  const [participacaoInicio, setParticipacaoInicio] = useState("");
  const [initialParticipation, setInitialParticipation] = useState("");
  const [participacaoFim, setParticipacaoFim] = useState("");
  const [initialParticipationEnd, setInitialParticipationEnd] = useState("");
  const [participacaoTipoId, setParticipacaoTipoId] = useState("");
  const [optionsParticipationType, setOptionsParticipationType] = useState([]);
  const [pessoaId, setPessoaId] = useState("");
  const [optionsPerson, setOptionsPerson] = useState([]);
  const [participacaoStatusId, setParticipacaoStatusId] = useState("");
  const [optionsParticipationStatus, setOptionsParticipationStatus] = useState(
    []
  );

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    const participationTypeString = String(participacaoTipoId);
    const personString = String(pessoaId);
    const participationStatusString = String(participacaoStatusId);
    e.preventDefault();

    const data = {
      ATUALIZAR: [
        {
          PARTICIPACAO: {
            participacao_id: idString,
            ATUALIZAR: {
              participacao_nome: participacaoNome,
              participacao_descricao: participacaoDescricao,
              participacao_inicio: participacaoInicio,
              participacao_fim: participacaoFim,
              participacao_tipo_id: participationTypeString,
              pessoa_id: personString,
            },
          },
          PARTICIPACAO_MOTIVO_STATUS: {
            participacao_status_id: participationStatusString,
          },
        },
      ],
    };
    try {
      const response = await updateParticipation(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
  };

  useEffect(() => {
    const getPavimentarParticipation = async () => {
      try {
        const response = await getParticipationId(idString);
        const participacaoData = response.data.RETORNO[0][0].RETORNO[0];

        setParticipacaoNome(participacaoData.PARTICIPACAO.participacao_nome);
        setParticipacaoDescricao(
          participacaoData.PARTICIPACAO.participacao_descricao
        );

        setInitialParticipation(
          participacaoData.PARTICIPACAO.participacao_inicio
        );
        if (
          participacaoData.PARTICIPACAO.participacao_inicio !== undefined &&
          participacaoData.PARTICIPACAO.participacao_inicio !== ""
        ) {
          const DateArray =
            participacaoData.PARTICIPACAO.participacao_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setParticipacaoInicio(formattedDate);
        } else {
          setParticipacaoInicio("");
        }

        setInitialParticipationEnd(
          participacaoData.PARTICIPACAO.participacao_fim
        );
        if (
          participacaoData.PARTICIPACAO.participacao_fim !== undefined &&
          participacaoData.PARTICIPACAO.participacao_fim !== ""
        ) {
          const DateArray =
            participacaoData.PARTICIPACAO.participacao_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setParticipacaoFim(formattedDate);
        } else {
          setParticipacaoFim("");
        }

        setParticipacaoTipoId(
          participacaoData.PARTICIPACAO.participacao_tipo_id[0]
            ?.PARTICIPACAO_TIPO?.participacao_tipo_id || ""
        );
        setPessoaId(
          participacaoData.PARTICIPACAO.pessoa_id[0]?.PESSOA?.pessoa_id || ""
        );
        setParticipacaoStatusId(
          participacaoData.PARTICIPACAO_MOTIVO_STATUS.RETORNO[0]
            ?.PARTICIPACAO_MOTIVO_STATUS?.participacao_status_id[0]
            .PARTICIPACAO_STATUS.participacao_status_id || ""
        );
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarParticipation();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarParticipacaoTipo = async () => {
      try {
        const response = await getParticipationType();
        const participacaoTipoData = response.data.RETORNO[0].RETORNO;

        const options = participacaoTipoData.map((item) => (
          <option
            key={item.PARTICIPACAO_TIPO.participacao_tipo_id}
            value={item.PARTICIPACAO_TIPO.participacao_tipo_id}
          >
            {item.PARTICIPACAO_TIPO.participacao_tipo_nome}
          </option>
        ));

        participacaoTipoData.forEach((item) => {
          if (
            participacaoTipoId === item.PARTICIPACAO_TIPO.participacao_tipo_id
          ) {
            options[0] = (
              <option
                key={item.PARTICIPACAO_TIPO.participacao_tipo_id}
                value={item.PARTICIPACAO_TIPO.participacao_tipo_id}
                selected
              >
                {item.PARTICIPACAO_TIPO.participacao_tipo_nome}
              </option>
            );
          }
        });
        setOptionsParticipationType(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarParticipacaoTipo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getPerson();
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
        setOptionsPerson(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarPessoa();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarParticipacaoStatus = async () => {
      try {
        const response = await getParticipationStatus();
        const participacaoStatusData = response.data.RETORNO[0].RETORNO;

        const options = participacaoStatusData.map((item) => (
          <option
            key={item.PARTICIPACAO_STATUS.participacao_status_id}
            value={item.PARTICIPACAO_STATUS.participacao_status_id}
          >
            {item.PARTICIPACAO_STATUS.participacao_status_nome}
          </option>
        ));

        participacaoStatusData.forEach((item) => {
          if (
            participacaoStatusId ===
            item.PARTICIPACAO_STATUS.participacao_status_id
          ) {
            options[0] = (
              <option
                key={item.PARTICIPACAO_STATUS.participacao_status_id}
                value={item.PARTICIPACAO_STATUS.participacao_status_id}
                selected
              >
                {item.PARTICIPACAO_STATUS.participacao_status_nome}
              </option>
            );
          }
        });
        setOptionsParticipationStatus(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarParticipacaoStatus();

    return () => {};
  }, []);

  return (
    <div className="update-participation-modal">
      <div className="update-participation-modal-content">
        <h2 className="update-h2">Atualizar Participaçao</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">Participação - Nome:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Nome"
            value={participacaoNome}
            onChange={(e) => setParticipacaoNome(e.target.value)}
            maxLength={255}
          />
          <label className="label-update">Partitipação - Descrição:</label>
          <input
            className="input-update"
            type="text"
            placeholder="descricao"
            value={participacaoDescricao}
            onChange={(e) => setParticipacaoDescricao(e.target.value)}
          />
          <label className="label-update">
            Data inicial atual: {initialParticipation}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={participacaoInicio || ""}
            onChange={(e) => setParticipacaoInicio(e.target.value)}
          />
          <label className="label-update">
            Data Final atual: {initialParticipationEnd}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data Final"
            value={participacaoFim || ""}
            onChange={(e) => setParticipacaoFim(e.target.value)}
          />
          <label className="label-update">Participação - Tipo:</label>
          <select
            className="input-update"
            name="participacao_tipo_id"
            id="participacao_tipo_id"
            value={participacaoTipoId}
            onChange={(event) => setParticipacaoTipoId(event.target.value)}
          >
            {optionsParticipationType}
          </select>
          <label className="label-update">Pessoa:</label>
          <select
            className="input-update"
            name="person_id"
            id="person_id"
            value={pessoaId}
            onChange={(event) => setPessoaId(event.target.value)}
          >
            {optionsPerson}
          </select>
          <label className="label-update">Participação - Status:</label>
          <select
            className="input-update"
            name="participacao_status_id"
            id="participacao_status_id"
            value={participacaoStatusId}
            onChange={(event) => setParticipacaoStatusId(event.target.value)}
          >
            {optionsParticipationStatus}
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
