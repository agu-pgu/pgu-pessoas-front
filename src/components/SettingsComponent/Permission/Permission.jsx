import React, { useEffect, useState } from "react";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";
import "./Permission.scss";
import {
  createPermission,
  getCargo,
  getCarreiraTipo,
  getConcurso,
  getCoordenacao,
  getFuncao,
  getIngresso,
  getModulo,
  getMunicipio,
  getNucleo,
  getPessoa,
  getRegiao,
  getSetor,
  getUf,
  getUnidade,
} from "../../../services/callsSettings/callsPermission";

export default function Permission() {
  const [permissaoPessoa, SetPermissaoPessoa] = useState("");
  const [pessoa, setPessoa] = useState("");
  const [modulo, setModulo] = useState("");
  const [regiao, setRegiao] = useState("");
  const [unidade, setUnidade] = useState("");
  const [setor, setSetor] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [uf, setUf] = useState("");
  const [cargo, setCargo] = useState("");
  const [funcao, setFuncao] = useState("");
  const [carreiraTipo, setCarreiraTipo] = useState("");
  const [ingresso, setIngresso] = useState("");
  const [nucleo, setNucleo] = useState("");
  const [coordenacao, setCoordenacao] = useState("");
  const [concurso, setConcurso] = useState("");
  const [optionsPessoa, setOptionsPessoa] = useState([]);
  const [optionsModulo, setOptionsModulo] = useState([]);
  const [optionsRegiao, setOptionsRegiao] = useState([]);
  const [optionsUnidade, setOptionsUnidade] = useState([]);
  const [optionsSetor, setOptionsSetor] = useState([]);
  const [optionsMunicipio, setOptionsMunicipio] = useState([]);
  const [optionsUf, setOptionsUf] = useState([]);
  const [optionsCargo, setOptionsCargo] = useState([]);
  const [optionsCarreiraTipo, setOptionsCarreiraTipo] = useState([]);
  const [optionsFuncao, setOptionsFuncao] = useState([]);
  const [optionsIngresso, setOptionsIngresso] = useState([]);
  const [optionsNucleo, setOptionsNucleo] = useState([]);
  const [optionsCoordenacao, setOptionsCoordenacao] = useState([]);
  const [optionsConcurso, setOptionsConcurso] = useState([]);

  const handleSubmitForCreatePermission = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          PERMISSAO: {
            permissao_pessoa_id: permissaoPessoa,
            pessoa_id: pessoa,
            modulo_id: modulo,
            regiao_id: regiao,
            unidade_id: unidade,
            setor_id: setor,
            municipio_id: municipio,
            uf_id: uf,
            cargo_id: cargo,
            carreira_tipo_id: carreiraTipo,
            funcao_id: funcao,
            ingresso_id: ingresso,
            nucleo_id: nucleo,
            coordenacao_id: coordenacao,
            concurso_id: concurso,
          },
        },
      ],
    };

    try {
      const response = await createPermission(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
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
        setOptionsPessoa(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarPessoa();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarModulo = async () => {
      try {
        const response = await getModulo();
        const moduloData = response.data.RETORNO[0].RETORNO;
        const options = moduloData.map((item) => (
          <option key={item.MODULO.modulo_id} value={item.MODULO.modulo_id}>
            {item.MODULO.modulo_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsModulo(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarModulo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarRegiao = async () => {
      try {
        const response = await getRegiao();
        const regiaoData = response.data.RETORNO[0].RETORNO;
        const options = regiaoData.map((item) => (
          <option key={item.REGIAO.regiao_id} value={item.REGIAO.regiao_id}>
            {item.REGIAO.regiao_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsRegiao(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarRegiao();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarUnidade = async () => {
      try {
        const response = await getUnidade();
        const unidadeData = response.data.RETORNO[0].RETORNO;
        const options = unidadeData.map((item) => (
          <option key={item.UNIDADE.unidade_id} value={item.UNIDADE.unidade_id}>
            {item.UNIDADE.unidade_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsUnidade(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarUnidade();

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
    const getPavimentarMunicipio = async () => {
      try {
        const response = await getMunicipio();
        const municipioData = response.data.RETORNO[0].RETORNO;
        const options = municipioData.map((item) => (
          <option
            key={item.MUNICIPIO.municipio_id}
            value={item.MUNICIPIO.municipio_id}
          >
            {item.MUNICIPIO.municipio_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsMunicipio(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarMunicipio();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarUf = async () => {
      try {
        const response = await getUf();
        const ufData = response.data.RETORNO[0].RETORNO;
        const options = ufData.map((item) => (
          <option key={item.UF.uf_id} value={item.UF.uf_id}>
            {item.UF.uf_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsUf(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarUf();

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

  return (
    <div>
      <div className="formulario-container">
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreatePermission}
          >
            <label className="form-label">*Permissão:</label>
            <select
              className="form-input"
              name="permissaoPessoa"
              id="permissaoPessoa"
              value={permissaoPessoa}
              onChange={(event) => SetPermissaoPessoa(event.target.value)}
              required
            >
              {optionsPessoa}
            </select>
            <label className="form-label">*Pessoa:</label>
            <select
              className="form-input"
              name="pessoa"
              id="pessoa"
              value={pessoa}
              onChange={(event) => setPessoa(event.target.value)}
              required
            >
              {optionsPessoa}
            </select>
            <label className="form-label">*Módulo:</label>
            <select
              className="form-input"
              name="modulo"
              id="modulo"
              value={modulo}
              onChange={(event) => setModulo(event.target.value)}
              required
            >
              {optionsModulo}
            </select>
            <label className="form-label">*Região:</label>
            <select
              className="form-input"
              name="regiao"
              id="regiao"
              value={regiao}
              onChange={(event) => setRegiao(event.target.value)}
              required
            >
              {optionsRegiao}
            </select>
            <label className="form-label">*Unidade:</label>
            <select
              className="form-input"
              name="unidade"
              id="unidade"
              value={unidade}
              onChange={(event) => setUnidade(event.target.value)}
              required
            >
              {optionsUnidade}
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
            <label className="form-label">*Município:</label>
            <select
              className="form-input"
              name="municipio"
              id="municipio"
              value={municipio}
              onChange={(event) => setMunicipio(event.target.value)}
              required
            >
              {optionsMunicipio}
            </select>
            <label className="form-label">*UF:</label>
            <select
              className="form-input"
              name="uf"
              id="uf"
              value={uf}
              onChange={(event) => setUf(event.target.value)}
              required
            >
              {optionsUf}
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
            <label className="form-label">*Função:</label>
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
            <label className="form-label">*Núcleo:</label>
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
            <label className="form-label">*Coordenação:</label>
            <select
              className="form-input"
              name="coordenacao"
              id="coordenacao"
              value={coordenacao}
              onChange={(event) => setCoordenacao(event.target.value)}
              required
            >
              {optionsCoordenacao}
            </select>
            <label className="form-label">*Concurso:</label>
            <select
              className="form-input"
              name="concurso"
              id="concurso"
              value={concurso}
              onChange={(event) => setConcurso(event.target.value)}
              required
            >
              {optionsConcurso}
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
