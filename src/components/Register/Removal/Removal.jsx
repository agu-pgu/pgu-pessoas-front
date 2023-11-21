import React, { useState } from "react";
import "./Removal.scss";

export default function Removal() {
  const [afastamentoDescricao, setAfastamentoDescricao] = useState("");
  const [afastamentoInicio, setAfastamentoInicio] = useState("");
  const [AfastamentoFim, setAfastamentoFim] = useState("");
  const [AfastamentoTipo, setAfastamentoTipo] = useState(""); // pavimentar
  const [cid, setCid] = useState(""); // pavimentar
  const [cidSub, setCidSub] = useState(""); // pavimentar
  const [pessoa, setPessoa] = useState(""); // pavimentar
  const [
    afastamentoMotivoStatusDescricao,
    setAfastamentoMotivoStatusDescricao,
  ] = useState("");
  const [afastamentoStatus, setAfastamentoStatus] = useState(""); // pavimentar

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      CADASTRAR: [
        {
          AFASTAMENTO: {
            afastamento_descricao: afastamentoDescricao,
            afastamento_inicio: afastamentoInicio,
            afastamento_fim: AfastamentoFim,
            afastamento_tipo_id: AfastamentoTipo,
            cid_id: cid,
            pessoa_id: pessoa,
            cid_sub_id: cidSub,
          },
          AFASTAMENTO_MOTIVO_STATUS: {
            afastamento_motivo_status_descricao:
              afastamentoMotivoStatusDescricao,
            afastamento_status_id: afastamentoStatus,
          },
        },
      ],
    };

    console.log(data);
  };

  return (
    <div>
      <div className="formulario-container">
        <div className="form-scroll">
          <form className="formulario-container" onSubmit={handleSubmit}>
            <label className="form-label">Afastamento Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="afastamentoDescricao"
              id="afastamentoDescricao"
              value={afastamentoDescricao}
              onChange={(event) => setAfastamentoDescricao(event.target.value)}
            />
            <label className="form-label">*Afastamento Início:</label>
            <input
              className="form-input"
              type="date"
              name="afastamentoInicio"
              id="afastamentoInicio"
              value={afastamentoInicio}
              onChange={(event) => setAfastamentoInicio(event.target.value)}
              required
            />
            <label className="form-label">Afastamento Fim:</label>
            <input
              className="form-input"
              type="date"
              name="afastamentoFim"
              id="afastamentoFim"
              value={AfastamentoFim}
              onChange={(event) => setAfastamentoFim(event.target.value)}
            />
            <label className="form-label">*Afastamento Tipo:</label>
            <input
              className="form-input"
              type="text"
              name="afastamentoTipo"
              id="afastamentoTipo"
              value={AfastamentoTipo}
              onChange={(event) => setAfastamentoTipo(event.target.value)}
            />
            <label className="form-label">CID:</label>
            <input
              className="form-input"
              type="text"
              name="cid"
              id="cid"
              value={cid}
              onChange={(event) => setCid(event.target.value)}
            />
            <label className="form-label">CID Sub:</label>
            <input
              className="form-input"
              type="text"
              name="cidSub"
              id="cidSub"
              value={cidSub}
              onChange={(event) => setCidSub(event.target.value)}
            />
            <label className="form-label">Pessoa:</label>
            <input
              className="form-input"
              type="text"
              name="pessoa"
              id="pessoa"
              value={pessoa}
              onChange={(event) => setPessoa(event.target.value)}
            />
            <label className="form-label">
              *Afastamento - Motivo - Status - Descrição:
            </label>
            <input
              className="form-input"
              type="text"
              name="afastamentoMotivoStatusDescricao"
              id="afastamentoMotivoStatusDescricao"
              value={afastamentoMotivoStatusDescricao}
              onChange={(event) =>
                setAfastamentoMotivoStatusDescricao(event.target.value)
              }
            />
            <label className="form-label">*Afastamento - Status:</label>
            <input
              className="form-input"
              type="text"
              name="afastamentoStatus"
              id="afastamentoStatus"
              value={afastamentoStatus}
              onChange={(event) => setAfastamentoStatus(event.target.value)}
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
