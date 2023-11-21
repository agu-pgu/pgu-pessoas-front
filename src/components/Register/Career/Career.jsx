import React, { useState } from "react";

export default function Career() {
  const [pessoa, setPessoa] = useState(""); //pavimentar
  const [cargo, setCargo] = useState(""); //pavimentar
  const [cargoInicio, setCargoInicio] = useState("");
  const [cargoFim, setCargoFim] = useState("");
  const [ingresso, setIngresso] = useState(""); //pavimentar
  const [concurso, setConcurso] = useState(""); //pavimentar
  const [concursoClassificacao, setConcursoClassificacao] = useState(""); //pavimentar
  const [concursoCota, setConcursoCota] = useState(""); //pavimentar
  const [carreiraTipo, setCarreiraTipo] = useState(""); //pavimentar
  const [setor, setSetor] = useState(""); //pavimentar
  const [setorInicio, setSetorInicio] = useState("");
  const [setorFim, setSetorFim] = useState("");
  const [funcao, setFuncao] = useState(""); //pavimentar
  const [funcaoInicio, setFuncaoInicio] = useState("");
  const [funcaoFim, setFuncaoFim] = useState("");
  const [coordenacao, setCoordenacao] = useState(""); //pavimentar
  const [coordenacaoInicio, setCoordenacaoInicio] = useState("");
  const [coordenacaoFim, setCoordenacaoFim] = useState("");
  const [nucleo, setNucleo] = useState(""); //pavimentar
  const [nucleoInicio, setNucleoInicio] = useState("");
  const [nucleoFim, setNucleoFim] = useState("");
  const [carreiraMotivoStatusDescricao, setCarreiraMotivoStatusDescricao] =
    useState("");
  const [carreiraStatus, setCarreiraStatus] = useState(""); //pavimentar
  const [regimeTrabalhoDescricao, setRegimeTrabalhoDescricao] = useState("");
  const [regimeTrabalhoTipo, setRegimeTrabalhoTipo] = useState(""); //pavimentar
  const [regimeTrabalhoModalidade, setRegimeTrabalhoModalidade] = useState(""); //pavimentar

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      CADASTRAR: [
        {
          CARREIRA: {
            pessoa_id: pessoa,
            cargo_id: cargo,
            cargo_inicio: cargoInicio,
            cargo_fim: cargoFim,
            ingresso_id: ingresso,
            concurso_id: concurso,
            concurso_classificacao: concursoClassificacao,
            concurso_cota_id: concursoCota,
            carreira_tipo_id: carreiraTipo,
            setor_id: setor,
            setor_inicio: setorInicio,
            setor_fim: setorFim,
            funcao_id: funcao,
            funcao_inicio: funcaoInicio,
            funcao_fim: funcaoFim,
            coordenacao_id: coordenacao,
            coordenacao_inicio: coordenacaoInicio,
            coordenacao_fim: coordenacaoFim,
            nucleo_id: nucleo,
            nucleo_inicio: nucleoInicio,
            nucleo_fim: nucleoFim,
          },
          CARREIRA_MOTIVO_STATUS: {
            carreira_motivo_status_descricao: carreiraMotivoStatusDescricao,
            carreira_status_id: carreiraStatus,
          },
          REGIME_TRABALHO: {
            regime_trabalho_descricao: regimeTrabalhoDescricao,
            regime_trabalho_tipo_id: regimeTrabalhoTipo,
            regime_trabalho_modalidade_id: regimeTrabalhoModalidade,
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
            <label className="form-label">*Pessoa:</label>
            <input
              className="form-input"
              type="text"
              name="pessoa"
              id="pessoa"
              value={pessoa}
              onChange={(event) => setPessoa(event.target.value)}
              required
            />
            <label className="form-label">*Cargo:</label>
            <input
              className="form-input"
              type="text"
              name="cargo"
              id="cargo"
              value={cargo}
              onChange={(event) => setCargo(event.target.value)}
              required
            />
            <label className="form-label">*Cargo Inicio:</label>
            <input
              className="form-input"
              type="date"
              name="cargoInicio"
              id="cargoInicio"
              value={cargoInicio}
              onChange={(event) => setCargoInicio(event.target.value)}
              required
            />
            <label className="form-label">Cargo Fim:</label>
            <input
              className="form-input"
              type="date"
              name="cargoFim"
              id="cargoFim"
              value={cargoFim}
              onChange={(event) => setCargoFim(event.target.value)}
            />
            <label className="form-label">*Ingresso:</label>
            <input
              className="form-input"
              type="text"
              name="ingresso"
              id="ingresso"
              value={ingresso}
              onChange={(event) => setIngresso(event.target.value)}
              required
            />
            <label className="form-label">Concurso:</label>
            <input
              className="form-input"
              type="text"
              name="concurso"
              id="concurso"
              value={concurso}
              onChange={(event) => setConcurso(event.target.value)}
            />
            <label className="form-label">Concurso Classificação:</label>
            <input
              className="form-input"
              type="text"
              name="concursoClassificacao"
              id="concursoClassificacao"
              value={concursoClassificacao}
              onChange={(event) => setConcursoClassificacao(event.target.value)}
            />
            <label className="form-label">*Concurso Cota:</label>
            <input
              className="form-input"
              type="text"
              name="concursoCota"
              id="concursoCota"
              value={concursoCota}
              onChange={(event) => setConcursoCota(event.target.value)}
              required
            />
            <label className="form-label">*Carreira Tipo:</label>
            <input
              className="form-input"
              type="text"
              name="carreiraTipo"
              id="carreiraTipo"
              value={carreiraTipo}
              onChange={(event) => setCarreiraTipo(event.target.value)}
              required
            />
            <label className="form-label">*Setor:</label>
            <input
              className="form-input"
              type="text"
              name="setor"
              id="setor"
              value={setor}
              onChange={(event) => setSetor(event.target.value)}
              required
            />
            <label className="form-label">*Setor Inicio:</label>
            <input
              className="form-input"
              type="date"
              name="setorInicio"
              id="setorInicio"
              value={setorInicio}
              onChange={(event) => setSetorInicio(event.target.value)}
              required
            />
            <label className="form-label">Setor Fim:</label>
            <input
              className="form-input"
              type="date"
              name="setorFim"
              id="setorFim"
              value={setorFim}
              onChange={(event) => setSetorFim(event.target.value)}
            />
            <label className="form-label">Função:</label>
            <input
              className="form-input"
              type="text"
              name="funcao"
              id="funcao"
              value={funcao}
              onChange={(event) => setFuncao(event.target.value)}
            />
            <label className="form-label">Função Início:</label>
            <input
              className="form-input"
              type="text"
              name="funcaoInicio"
              id="funcaoInicio"
              value={funcaoInicio}
              onChange={(event) => setFuncaoInicio(event.target.value)}
            />
            <label className="form-label">Função Fim:</label>
            <input
              className="form-input"
              type="text"
              name="funcaoFim"
              id="funcaoFim"
              value={funcaoFim}
              onChange={(event) => setFuncaoFim(event.target.value)}
            />
            <label className="form-label">Coordenação:</label>
            <input
              className="form-input"
              type="text"
              name="coordenacao"
              id="coordenacao"
              value={coordenacao}
              onChange={(event) => setCoordenacao(event.target.value)}
            />
            <label className="form-label">Coordenação Início:</label>
            <input
              className="form-input"
              type="date"
              name="coordenacaoInicio"
              id="coordenacaoInicio"
              value={coordenacaoInicio}
              onChange={(event) => setCoordenacaoInicio(event.target.value)}
            />
            <label className="form-label">Coordenação Fim:</label>
            <input
              className="form-input"
              type="date"
              name="coordenacaoFim"
              id="coordenacaoFim"
              value={coordenacaoFim}
              onChange={(event) => setCoordenacaoFim(event.target.value)}
            />
            <label className="form-label">Núcleo:</label>
            <input
              className="form-input"
              type="text"
              name="nucleo"
              id="nucleo"
              value={nucleo}
              onChange={(event) => setNucleo(event.target.value)}
            />
            <label className="form-label">Núcleo Início:</label>
            <input
              className="form-input"
              type="date"
              name="nucleoInicio"
              id="nucleoInicio"
              value={nucleoInicio}
              onChange={(event) => setNucleoInicio(event.target.value)}
            />
            <label className="form-label">Núcleo Fim:</label>
            <input
              className="form-input"
              type="date"
              name="nucleoFim"
              id="nucleoFim"
              value={nucleoFim}
              onChange={(event) => setNucleoFim(event.target.value)}
            />
            <label className="form-label">
              *Carreira - Motivo - Status - Descrição:
            </label>
            <input
              className="form-input"
              type="text"
              name="carreiraMotivoStatusDescricao"
              id="carreiraMotivoStatusDescricao"
              value={carreiraMotivoStatusDescricao}
              onChange={(event) =>
                setCarreiraMotivoStatusDescricao(event.target.value)
              }
              required
            />
            <label className="form-label">*Carreira - Status:</label>
            <input
              className="form-input"
              type="text"
              name="carreiraStatus"
              id="carreiraStatus"
              value={carreiraStatus}
              onChange={(event) => setCarreiraStatus(event.target.value)}
              required
            />
            <label className="form-label">
              *Regime de trabalho - Descrição:
            </label>
            <input
              className="form-input"
              type="text"
              name="regimeTrabalhoDescricao"
              id="regimeTrabalhoDescricao"
              value={regimeTrabalhoDescricao}
              onChange={(event) =>
                setRegimeTrabalhoDescricao(event.target.value)
              }
              required
            />
            <label className="form-label">*Regime de trabalho - Tipo::</label>
            <input
              className="form-input"
              type="text"
              name="regimeTrabalhoTipo"
              id="regimeTrabalhoTipo"
              value={regimeTrabalhoTipo}
              onChange={(event) => setRegimeTrabalhoTipo(event.target.value)}
              required
            />
            <label className="form-label">
              *Regime de trabalho - Modalidade:
            </label>
            <input
              className="form-input"
              type="text"
              name="regimeTrabalhoModalidade"
              id="regimeTrabalhoModalidade"
              value={regimeTrabalhoModalidade}
              onChange={(event) =>
                setRegimeTrabalhoModalidade(event.target.value)
              }
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
