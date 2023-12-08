import React, { useEffect, useState } from "react";
import "./Person.scss";
import {
  createPessoa,
  getGenero,
  getMunicipio,
  getRegiao,
} from "../../../services/CallsPerson/callsRegister";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";
import { AiOutlineSearch } from "react-icons/ai";

export default function Person() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [siape, setSiape] = useState("");
  const [genero, setGenero] = useState("");
  const [options, setOptions] = useState([]);
  const [regiao, setRegiao] = useState("");
  const [uf, setUf] = useState("");
  const [ufData, setUfData] = useState([]);
  const [ufOptionsReady, setUfOptionsReady] = useState(false);
  const [municipio, setMunicipio] = useState("");
  const [municipioData, setMunicipioData] = useState([]);
  const [municipioOptionsReady, setMunicipioOptionsReady] = useState(false);

  const handleSubmitForCreatePerson = async (e) => {
    e.preventDefault();

    const person = {};

    // Verificações para os campos da PESSOA
    if (nome !== "") person.pessoa_nome = nome;
    if (dataNascimento !== "") person.pessoa_data_nascimento = dataNascimento;
    if (cpf !== "") person.pessoa_cpf = cpf;
    if (email !== "") person.pessoa_email = email;
    if (siape !== "") person.pessoa_siape = siape;
    if (genero !== "") person.genero_id = genero;
    if (municipio !== "") person.municipio_id = municipio;

    const data = {
      CADASTRAR: [
        {
          PESSOA: person,
        },
      ],
    };

    try {
      const response = await createPessoa(data);
      if (response.data.SUCESSO === true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  const handleSubmitRegiao = async (e) => {
    e.preventDefault();
    try {
      const response = await getRegiao(regiao);
      const ufData = response.data.RETORNO[0].RETORNO;
      setUfData(ufData);
      setUfOptionsReady(true);
    } catch (error) {
      ErrorAtGetData();
    }
  };

  const handleSubmitUf = async (e) => {
    e.preventDefault();
    try {
      const response = await getMunicipio(uf);
      const municipioData = response.data.RETORNO[0].RETORNO;
      setMunicipioData(municipioData);
      setMunicipioOptionsReady(true);
    } catch (error) {
      ErrorAtGetData();
    }
  };

  useEffect(() => {
    const getPavimentarGenero = async () => {
      try {
        const response = await getGenero();
        const generoData = response.data.RETORNO[0].RETORNO;
        const options = generoData.map((item) => (
          <option key={item.GENERO.genero_id} value={item.GENERO.genero_id}>
            {item.GENERO.genero_nome}
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
    getPavimentarGenero();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
        <h1 className="formulario-h2">Cadastre uma Pessoa!</h1>
        <div className="form-scroll">
          <h3 className="formulario-h3">Formulário de "Pessoa"</h3>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreatePerson}
          >
            <label className="form-label">*Nome:</label>
            <input
              className="form-input"
              type="text"
              name="pessoa_nome"
              id="pessoa_nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">Data de nascimento:</label>
            <input
              className="form-input"
              type="date"
              name="pessoa_data_nascimento"
              id="pessoa_data_nascimento"
              value={dataNascimento}
              onChange={(event) => setDataNascimento(event.target.value)}
            />
            <label className="form-label">CPF:</label>
            <input
              className="form-input"
              placeholder="000.000.000-00"
              type="text"
              name="pessoa_cpf"
              id="pessoa_cpf"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
              maxLength={14}
            />
            <label className="form-label">*Email:</label>
            <input
              className="form-input"
              placeholder="nome@agu.gov.br"
              type="email"
              name="pessoa_email"
              id="pessoa_email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">Siape:</label>
            <input
              className="form-input"
              placeholder="000000"
              type="text"
              name="pessoa_siape"
              id="pessoa_siape"
              value={siape}
              onChange={(event) => setSiape(event.target.value)}
              maxLength={45}
            />
            <label className="form-label">Gênero:</label>
            <select
              className="form-input"
              name="genero_id"
              id="genero_id"
              value={genero}
              onChange={(event) => setGenero(event.target.value)}
            >
              {options}
            </select>
            <label className="form-label">Região:</label>
            <div className="form-div-search-regiao">
              <select
                className="form-input"
                name="regiao"
                id="regiao"
                value={regiao}
                onChange={(event) => setRegiao(event.target.value)}
              >
                <option value="">Selecione</option>
                <option value="Regiao Norte">Região Norte</option>
                <option value="Regiao Nordeste">Região Nordeste</option>
                <option value="Regiao Centro-Oeste">Região Centro-Oeste</option>
                <option value="Regiao Sul">Região Sul</option>
                <option value="Regiao Sudeste">Região Sudeste</option>
              </select>
              <button
                className="form-button-search-regiao"
                onClick={handleSubmitRegiao}
              >
                <AiOutlineSearch className="form-button-search-regiao-icon" />
              </button>
            </div>
            <label className="form-label">UF:</label>
            <div className="form-div-search-regiao">
              <select
                className="form-input"
                name="uf"
                id="uf"
                value={uf}
                onChange={(event) => setUf(event.target.value)}
                disabled={!ufOptionsReady} // Desabilita o select se os dados da UF não estiverem prontos
              >
                <option value="" disabled={true}>
                  Selecione
                </option>
                {ufOptionsReady ? (
                  // Mapeia os dados da UF para as opções do select quando os dados estão prontos
                  ufData.map((item) => (
                    <option key={item.UF.uf_id} value={item.UF.uf_id}>
                      {item.UF.uf_nome}
                    </option>
                  ))
                ) : (
                  // Adiciona uma opção de carregamento enquanto os dados da UF não estão prontos
                  <option value="" disabled={true}>
                    Carregando UF...
                  </option>
                )}
              </select>
              <button
                onClick={handleSubmitUf}
                className="form-button-search-regiao"
              >
                <AiOutlineSearch className="form-button-search-regiao-icon" />
              </button>
            </div>
            <label className="form-label">*Municipio:</label>
            <select
              className="form-input"
              name="municipio_id"
              id="municipio_id"
              value={municipio}
              onChange={(event) => setMunicipio(event.target.value)}
              disabled={!municipioOptionsReady}
            >
              <option value="" disabled={true}>
                Selecione
              </option>
              {municipioOptionsReady ? (
                municipioData.map((item) => (
                  <option
                    key={item.MUNICIPIO.municipio_id}
                    value={item.MUNICIPIO.municipio_id}
                  >
                    {item.MUNICIPIO.municipio_nome}
                  </option>
                ))
              ) : (
                <option value="" disabled={true}>
                  Selecione uma UF primeiro
                </option>
              )}
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
