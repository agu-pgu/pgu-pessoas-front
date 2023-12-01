import React, { useEffect, useState } from "react";
import {
  createCareer,
  getCargo,
  getCarreiraStatus,
  getCarreiraTipo,
  getConcurso,
  getConcursoCota,
  getCoordenacao,
  getFuncao,
  getIngresso,
  getNucleo,
  getPessoa,
  getRegimeTrabalhoModalidade,
  getRegimeTrabalhoTipo,
  getSetor,
} from "../../../services/CallsPerson/callsCareer";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";

export default function Career() {
  const [pessoa, setPessoa] = useState("");
  const [options, setOptions] = useState([]);
  const [cargo, setCargo] = useState("");
  const [optionsCargo, setOptionsCargo] = useState([]);
  const [cargoInicio, setCargoInicio] = useState("");
  const [cargoFim, setCargoFim] = useState("");
  const [ingresso, setIngresso] = useState("");
  const [optionsIngresso, setOptionsIngresso] = useState([]);
  const [concurso, setConcurso] = useState("");
  const [optionsConcurso, setOptionsConcurso] = useState([]);
  const [concursoClassificacao, setConcursoClassificacao] = useState("");
  const [concursoCota, setConcursoCota] = useState("");
  const [optionsConcursoCota, setOptionsConcursoCota] = useState([]);
  const [carreiraTipo, setCarreiraTipo] = useState("");
  const [optionsCarreiraTipo, setOptionsCarreiraTipo] = useState([]);
  const [setor, setSetor] = useState("");
  const [optionsSetor, setOptionsSetor] = useState([]);
  const [setorInicio, setSetorInicio] = useState("");
  const [setorFim, setSetorFim] = useState("");
  const [funcao, setFuncao] = useState("");
  const [optionsFuncao, setOptionsFuncao] = useState([]);
  const [funcaoInicio, setFuncaoInicio] = useState("");
  const [funcaoFim, setFuncaoFim] = useState("");
  const [coordenacao, setCoordenacao] = useState("");
  const [optionsCoordenacao, setOptionsCoordenacao] = useState([]);
  const [coordenacaoInicio, setCoordenacaoInicio] = useState("");
  const [coordenacaoFim, setCoordenacaoFim] = useState("");
  const [nucleo, setNucleo] = useState("");
  const [optionsNucleo, setOptionsNucleo] = useState([]);
  const [nucleoInicio, setNucleoInicio] = useState("");
  const [nucleoFim, setNucleoFim] = useState("");
  const [carreiraMotivoStatusDescricao, setCarreiraMotivoStatusDescricao] =
    useState("");
  const [carreiraStatus, setCarreiraStatus] = useState("");
  const [optionsCarreiraStatus, setOptionsCarreiraStatus] = useState([]);
  // const [regimeTrabalhoDescricao, setRegimeTrabalhoDescricao] = useState("");
  const [regimeTrabalhoTipo, setRegimeTrabalhoTipo] = useState("");
  const [optionsRegimeTrabalhoTipo, setOptionsRegimeTrabalhoTipo] = useState(
    []
  );
  const [regimeTrabalhoModalidade, setRegimeTrabalhoModalidade] = useState("");
  const [optionsRegimeTrabalhoModalidade, setOptionsRegimeTrabalhoModalidade] =
    useState([]);

  const handleSubmitCreateCareer = async (e) => {
    const concursoClassificacaoString = String(concursoClassificacao)
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
            concurso_classificacao: concursoClassificacaoString,
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
            carreira_motivo_status_descricao:
              carreiraMotivoStatusDescricao,
            carreira_status_id: carreiraStatus,
          },
          REGIME_TRABALHO: {
            regime_trabalho_tipo_id: regimeTrabalhoTipo,
            regime_trabalho_modalidade_id: regimeTrabalhoModalidade,
          },
        },
      ],
    };

    try {
      const response = await createCareer(data);
      if (response.data.SUCESSO == true) {
        console.log(response);
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
    console.log(data);
  };

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getPessoa();
        const pessoaData = response.data.RETORNO[0].RETORNO;
        const options = pessoaData.map((item) => (
          <option key={item.PESSOA.pessoa_id} value={item.PESSOA.pessoa_id}>
            {item.PESSOA.pessoa_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptions(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarPessoa();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCargo = async () => {
      try {
        const response = await getCargo();
        const cargoData = response.data.RETORNO[0].RETORNO;
        const options = cargoData.map((item) => (
          <option key={item.CARGO.cargo_id} value={item.CARGO.cargo_id}>
            {item.CARGO.cargo_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCargo(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCargo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarIngresso = async () => {
      try {
        const response = await getIngresso();
        const ingressoData = response.data.RETORNO[0].RETORNO;
        const options = ingressoData.map((item) => (
          <option
            key={item.INGRESSO.ingresso_id}
            value={item.INGRESSO.ingresso_id}
          >
            {item.INGRESSO.ingresso_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsIngresso(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarIngresso();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarConcurso = async () => {
      try {
        const response = await getConcurso();
        const concursoData = response.data.RETORNO[0].RETORNO;
        const options = concursoData.map((item) => (
          <option
            key={item.CONCURSO.concurso_id}
            value={item.CONCURSO.concurso_id}
          >
            {item.CONCURSO.concurso_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsConcurso(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarConcurso();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarConcursoCota = async () => {
      try {
        const response = await getConcursoCota();
        const concursoCotaData = response.data.RETORNO[0].RETORNO;
        const options = concursoCotaData.map((item) => (
          <option
            key={item.CONCURSO_COTA.concurso_cota_id}
            value={item.CONCURSO_COTA.concurso_cota_id}
          >
            {item.CONCURSO_COTA.concurso_cota_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsConcursoCota(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarConcursoCota();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCarreiraTipo = async () => {
      try {
        const response = await getCarreiraTipo();
        const carreiraTipoData = response.data.RETORNO[0].RETORNO;
        const options = carreiraTipoData.map((item) => (
          <option
            key={item.CARREIRA_TIPO.carreira_tipo_id}
            value={item.CARREIRA_TIPO.carreira_tipo_id}
          >
            {item.CARREIRA_TIPO.carreira_tipo_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCarreiraTipo(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCarreiraTipo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarSetor = async () => {
      try {
        const response = await getSetor();
        const setorData = response.data.RETORNO[0].RETORNO;
        const options = setorData.map((item) => (
          <option key={item.SETOR.setor_id} value={item.SETOR.setor_id}>
            {item.SETOR.setor_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsSetor(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarSetor();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarFuncao = async () => {
      try {
        const response = await getFuncao();
        const funcaoData = response.data.RETORNO[0].RETORNO;
        const options = funcaoData.map((item) => (
          <option key={item.FUNCAO.funcao_id} value={item.FUNCAO.funcao_id}>
            {item.FUNCAO.funcao_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsFuncao(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarFuncao();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCoordenacao = async () => {
      try {
        const response = await getCoordenacao();
        const coordenacaoData = response.data.RETORNO[0].RETORNO;
        const options = coordenacaoData.map((item) => (
          <option
            key={item.COORDENACAO.coordenacao_id}
            value={item.COORDENACAO.coordenacao_id}
          >
            {item.COORDENACAO.coordenacao_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCoordenacao(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCoordenacao();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarNucleo = async () => {
      try {
        const response = await getNucleo();
        const nucleoData = response.data.RETORNO[0].RETORNO;
        const options = nucleoData.map((item) => (
          <option key={item.NUCLEO.nucleo_id} value={item.NUCLEO.nucleo_id}>
            {item.NUCLEO.nucleo_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsNucleo(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarNucleo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCarreiraStatus = async () => {
      try {
        const response = await getCarreiraStatus();
        const carreiraStatusData = response.data.RETORNO[0].RETORNO;
        const options = carreiraStatusData.map((item) => (
          <option
            key={item.CARREIRA_STATUS.carreira_status_id}
            value={item.CARREIRA_STATUS.carreira_status_id}
          >
            {item.CARREIRA_STATUS.carreira_status_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCarreiraStatus(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };

    getPavimentarCarreiraStatus();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarRegimeTrabalhoTipo = async () => {
      try {
        const response = await getRegimeTrabalhoTipo();
        const regimeTrabalhoTipoData = response.data.RETORNO[0].RETORNO;
        const options = regimeTrabalhoTipoData.map((item) => (
          <option
            key={item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_id}
            value={item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_id}
          >
            {item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsRegimeTrabalhoTipo(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarRegimeTrabalhoTipo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarRegimeTrabalhoModalidade = async () => {
      try {
        const response = await getRegimeTrabalhoModalidade();
        const regimeTrabalhoModalidadeData = response.data.RETORNO[0].RETORNO;
        const options = regimeTrabalhoModalidadeData.map((item) => (
          <option
            key={item.REGIME_TRABALHO_MODALIDADE.regime_trabalho_modalidade_id}
            value={
              item.REGIME_TRABALHO_MODALIDADE.regime_trabalho_modalidade_id
            }
          >
            {item.REGIME_TRABALHO_MODALIDADE.regime_trabalho_modalidade_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsRegimeTrabalhoModalidade(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarRegimeTrabalhoModalidade();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
        <h1 className="formulario-h2">Cadastre uma Carreira!!</h1>
        <div className="form-scroll">
          <h3 className="formulario-h3">Formulário de "Carreira"</h3>

          <form
            className="formulario-container"
            onSubmit={handleSubmitCreateCareer}
          >
            <label className="form-label">*Pessoa:</label>
            <select
              className="form-input"
              name="pessoa"
              id="pessoa"
              value={pessoa}
              onChange={(event) => setPessoa(event.target.value)}
              required
            >
              {options}
            </select>
            <label className="form-label">*Cargo:</label>
            <select
              className="form-input"
              name="cargo"
              id="cargo"
              value={cargo}
              onChange={(event) => setCargo(event.target.value)}
              required
            >
              {optionsCargo}
            </select>
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
            <select
              className="form-input"
              name="ingresso"
              id="ingresso"
              value={ingresso}
              onChange={(event) => setIngresso(event.target.value)}
              required
            >
              {optionsIngresso}
            </select>
            <label className="form-label">Concurso Classificação:</label>
            <input
              className="form-input"
              type="number"
              name="concursoClassificacao"
              id="concursoClassificacao"
              value={concursoClassificacao}
              onChange={(event) => {
                const newValue = Math.max(
                  1,
                  Math.min(2000, event.target.value)
                );
                setConcursoClassificacao(newValue);
              }}
              min={1}
              max={2000}
            />
            <label className="form-label">Concurso Cota:</label>
            <select
              className="form-input"
              name="concursoCota"
              id="concursoCota"
              value={concursoCota}
              onChange={(event) => setConcursoCota(event.target.value)}
            >
              {optionsConcursoCota}
            </select>
            <label className="form-label">Concurso:</label>
            <select
              className="form-input"
              name="concurso"
              id="concurso"
              value={concurso}
              onChange={(event) => setConcurso(event.target.value)}
            >
              {optionsConcurso}
            </select>

            <label className="form-label">*Carreira Tipo:</label>
            <select
              className="form-input"
              name="carreiraTipo"
              id="carreiraTipo"
              value={carreiraTipo}
              onChange={(event) => setCarreiraTipo(event.target.value)}
              required
            >
              {optionsCarreiraTipo}
            </select>
            <label className="form-label">*Setor:</label>
            <select
              className="form-input"
              name="setor"
              id="setor"
              value={setor}
              onChange={(event) => setSetor(event.target.value)}
              required
            >
              {optionsSetor}
            </select>
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
            <select
              className="form-input"
              name="funcao"
              id="funcao"
              value={funcao}
              onChange={(event) => setFuncao(event.target.value)}
              required
            >
              {optionsFuncao}
            </select>
            <label className="form-label">Função Início:</label>
            <input
              className="form-input"
              type="date"
              name="funcaoInicio"
              id="funcaoInicio"
              value={funcaoInicio}
              onChange={(event) => setFuncaoInicio(event.target.value)}
            />
            <label className="form-label">Função Fim:</label>
            <input
              className="form-input"
              type="date"
              name="funcaoFim"
              id="funcaoFim"
              value={funcaoFim}
              onChange={(event) => setFuncaoFim(event.target.value)}
            />
            <label className="form-label">Coordenação:</label>
            <select
              className="form-input"
              name="coordenacao"
              id="coordenacao"
              value={coordenacao}
              onChange={(event) => setCoordenacao(event.target.value)}
            >
              {optionsCoordenacao}
            </select>
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
            <select
              className="form-input"
              name="nucleo"
              id="nucleo"
              value={nucleo}
              onChange={(event) => setNucleo(event.target.value)}
              required
            >
              {optionsNucleo}
            </select>
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
            <label className="form-label">*Carreira - Descrição:</label>
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
            <select
              className="form-input"
              name="carreiraStatus"
              id="carreiraStatus"
              value={carreiraStatus}
              onChange={(event) => setCarreiraStatus(event.target.value)}
              required
            >
              {optionsCarreiraStatus}
            </select>
            {/* <label className="form-label">
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
            /> */}
            <label className="form-label">*Regime de trabalho - Tipo:</label>
            <select
              className="form-input"
              name="regimeTrabalhoTipo"
              id="regimeTrabalhoTipo"
              value={regimeTrabalhoTipo}
              onChange={(event) => setRegimeTrabalhoTipo(event.target.value)}
              required
            >
              {optionsRegimeTrabalhoTipo}
            </select>
            <label className="form-label">
              *Regime de trabalho - Modalidade:
            </label>
            <select
              className="form-input"
              name="regimeTrabalhoModalidade"
              id="regimeTrabalhoModalidade"
              value={regimeTrabalhoModalidade}
              onChange={(event) =>
                setRegimeTrabalhoModalidade(event.target.value)
              }
              required
            >
              {optionsRegimeTrabalhoModalidade}
            </select>
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
