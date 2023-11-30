import React, { useEffect, useState } from "react";
import {
  getAfastamentoId,
  getAfastamentoStatus,
  getAfastamentoTipo,
  getCid,
  getCidSub,
  getPessoa,
  updateRemoval,
} from "../../../../services/CallsPerson/callsUpdateRemoval";
import { CreateError, ErrorAtGetData, createPersonSucess } from "../../../../assets/js/Alerts";
import "./UpdateRemoval.scss";

export default function UpdateRemoval({ id, handleClose }) {
  const idString = String(id);
  const [afastamentoDescricao, setAfastamentoDescricao] = useState("");
  const [initialAfastamentoInicio, setInitialAfastamentoInicio] = useState("");
  const [afastamentoInicio, setAfastamentoInicio] = useState("");
  const [initialAfastametentoFim, setInitialAfastametentoFim] = useState("");
  const [afastametentoFim, setAfastametentoFim] = useState("");
  const [afastamentoTipoId, setAfastamentoTipoId] = useState("");
  const [cidId, setCidId] = useState("");
  const [cidSubId, setCidSubId] = useState("");
  const [pessoaId, setPessoaId] = useState("");
  const [afastamentoStatusId, setAfastamentoStatusId] = useState("");
  const [optionsAfastamentoTipo, setOptionsAfastamentoTipo] = useState([]);
  const [optionsCid, setOptionsCid] = useState([]);
  const [optionsPessoa, setOptionsPessoa] = useState([]);
  const [optionsCidSub, setOptionsCidSub] = useState([]);
  const [optionsAfastamentoStatus, setOptionsAfastamentoStatus] = useState([]);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    const pessoaString = String(pessoaId);
    const afastamentoTipoString = String(afastamentoTipoId);
    const cidIdString = String(cidId);
    const cidSubIdString = String(cidSubId);
    const afastamentoStatusString = String(afastamentoStatusId);

    e.preventDefault();
    const data = {
      ATUALIZAR: [
        {
          AFASTAMENTO: {
            afastamento_id: idString,
            ATUALIZAR: {
              afastamento_descricao: afastamentoDescricao,
              afastamento_inicio: afastamentoInicio,
              afastamento_fim: afastametentoFim,
              afastamento_tipo_id: afastamentoTipoString,
              cid_id: cidIdString,
              pessoa_id: pessoaString,
              cid_sub_id: cidSubIdString,
            },
          },
          AFASTAMENTO_MOTIVO_STATUS: {
            afastamento_status_id: afastamentoStatusString,
            // afastamento_motivo_status_descricao: "",
          },
        },
      ],
    };
    try {
      const response = await updateRemoval(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
  };

  useEffect(() => {
    const getPavimentarAfastamento = async () => {
      try {
        const response = await getAfastamentoId(idString);
        const afastamentoData = response.data.RETORNO[0][0].RETORNO[0];
        console.log(afastamentoData);

        setAfastamentoDescricao(
          afastamentoData.AFASTAMENTO.afastamento_descricao
        );

        setInitialAfastamentoInicio(
          afastamentoData.AFASTAMENTO.afastamento_inicio || ""
        );

        if (
          afastamentoData.AFASTAMENTO.afastamento_inicio !== undefined &&
          afastamentoData.AFASTAMENTO.afastamento_inicio !== ""
        ) {
          const DateArray =
            afastamentoData.AFASTAMENTO.afastamento_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setAfastamentoInicio(formattedDate);
        } else {
          setAfastamentoInicio("");
        }

        setInitialAfastametentoFim(
          afastamentoData.AFASTAMENTO.afastamento_fim || ""
        );

        if (
          afastamentoData.AFASTAMENTO.afastamento_fim !== undefined &&
          afastamentoData.AFASTAMENTO.afastamento_fim !== ""
        ) {
          // Convertendo a string de data para o formato desejado (YYYY-MM-DD HH:mm:ss)
          const DateArray =
            afastamentoData.AFASTAMENTO.afastamento_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setAfastametentoFim(formattedDate);
        } else {
          setAfastametentoFim("");
        }

        setAfastamentoTipoId(
          afastamentoData.AFASTAMENTO.afastamento_tipo_id[0]?.AFASTAMENTO_TIPO
            ?.afastamento_tipo_id || ""
        );

        setCidId(afastamentoData.AFASTAMENTO.cid_id[0]?.CID?.cid_id || "");

        setPessoaId(
          afastamentoData.AFASTAMENTO.pessoa_id[0]?.PESSOA?.pessoa_id || ""
        );

        setCidSubId(
          afastamentoData.AFASTAMENTO.cid_sub_id[0]?.CID_SUB?.cid_sub_id || ""
        );

        setAfastamentoStatusId(
          afastamentoData.AFASTAMENTO_MOTIVO_STATUS.RETORNO[0]
            ?.AFASTAMENTO_MOTIVO_STATUS?.afastamento_status_id[0]
            .AFASTAMENTO_STATUS.afastamento_status_id || ""
        );
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarAfastamento();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarAfastamentoTipo = async () => {
      try {
        const response = await getAfastamentoTipo();
        const afastamentoTipoData = response.data.RETORNO[0].RETORNO;

        const options = afastamentoTipoData.map((item) => (
          <option
            key={item.AFASTAMENTO_TIPO.afastamento_tipo_id}
            value={item.AFASTAMENTO_TIPO.afastamento_tipo_id}
          >
            {item.AFASTAMENTO_TIPO.afastamento_tipo_nome}
          </option>
        ));

        afastamentoTipoData.forEach((item) => {
          if (afastamentoTipoId === item.AFASTAMENTO_TIPO.afastamento_tipo_id) {
            options[0] = (
              <option
                key={item.AFASTAMENTO_TIPO.afastamento_tipo_id}
                value={item.AFASTAMENTO_TIPO.afastamento_tipo_id}
                selected
              >
                {item.AFASTAMENTO_TIPO.afastamento_tipo_nome}
              </option>
            );
          }
        });
        setOptionsAfastamentoTipo(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarAfastamentoTipo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCid = async () => {
      try {
        const response = await getCid();
        const CidData = response.data.RETORNO[0].RETORNO;

        const options = CidData.map((item) => (
          <option key={item.CID.cid_id} value={item.CID.cid_id}>
            {item.CID.cid_nome}
          </option>
        ));

        CidData.forEach((item) => {
          if (cidId === item.CID.cid_id) {
            options[0] = (
              <option key={item.CID.cid_id} value={item.CID.cid_id} selected>
                {item.CID.cid_nome}
              </option>
            );
          }
        });
        setOptionsCid(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarCid();

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
    const getPavimentarAfastamentoStatus = async () => {
      try {
        const response = await getAfastamentoStatus();
        const afastamentoStatusData = response.data.RETORNO[0].RETORNO;

        const options = afastamentoStatusData.map((item) => (
          <option
            key={item.AFASTAMENTO_STATUS.afastamento_status_id}
            value={item.AFASTAMENTO_STATUS.afastamento_status_id}
          >
            {item.AFASTAMENTO_STATUS.afastamento_status_nome}
          </option>
        ));

        afastamentoStatusData.forEach((item) => {
          if (
            afastamentoStatusId ===
            item.AFASTAMENTO_STATUS.afastamento_status_id
          ) {
            options[0] = (
              <option
                key={item.AFASTAMENTO_STATUS.afastamento_status_id}
                value={item.AFASTAMENTO_STATUS.afastamento_status_id}
                selected
              >
                {item.AFASTAMENTO_STATUS.afastamento_status_nome}
              </option>
            );
          }
        });
        setOptionsAfastamentoStatus(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarAfastamentoStatus();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCidSub = async () => {
      try {
        const response = await getCidSub();
        const cidSubData = response.data.RETORNO[0].RETORNO;
        const options = cidSubData.map((item) => (
          <option key={item.CID_SUB.cid_sub_id} value={item.CID_SUB.cid_sub_id}>
            {item.CID_SUB.cid_sub_nome}
          </option>
        ));

        cidSubData.forEach((item) => {
          if (cidSubId === item.CID_SUB.cid_sub_id) {
            options[0] = (
              <option
                key={item.CID_SUB.cid_sub_id}
                value={item.CID_SUB.cid_sub_id}
                selected
              >
                {item.PESSOA.cid_sub_nome}
              </option>
            );
          }
        });
        setOptionsCidSub(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarCidSub();

    return () => {};
  }, []);

  return (
    <div className="update-removal-modal">
      <div className="update-removal-modal-content">
        <h2 className="update-h2">Atualizar Afastamento</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">
            Data Inicial atual: {initialAfastamentoInicio}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="data de início"
            value={afastamentoInicio || ""}
            onChange={(e) => setAfastamentoInicio(e.target.value)}
          />
          <label className="label-update">
            Data Final atual: {initialAfastametentoFim}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="data final"
            value={afastametentoFim || ""}
            onChange={(e) => setAfastametentoFim(e.target.value)}
          />
          <label className="label-update">Afastamento - Tipo:</label>
          <select
            className="input-update"
            name="afastamento_tipo_id"
            id="afastamento_tipo_id"
            value={afastamentoTipoId}
            onChange={(event) => setAfastamentoTipoId(event.target.value)}
          >
            {optionsAfastamentoTipo}
          </select>
          <label className="label-update">CID:</label>
          <select
            className="input-update"
            name="cid_id"
            id="cid_id"
            value={cidId}
            onChange={(event) => setCidId(event.target.value)}
          >
            {optionsCid}
          </select>
          <label className="label-update">CID SUB:</label>
          <select
            className="input-update"
            name="cid_sub_id"
            id="cid_sub_id"
            value={cidSubId}
            onChange={(event) => setCidSubId(event.target.value)}
          >
            {optionsCidSub}
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
          <label className="label-update">Afastamento - Status:</label>
          <select
            className="input-update"
            name="afastamento_status_id"
            id="afastamento_status_id"
            value={afastamentoStatusId}
            onChange={(event) => setAfastamentoStatusId(event.target.value)}
          >
            {optionsAfastamentoStatus}
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
