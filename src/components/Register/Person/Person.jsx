import React, { useEffect, useState } from "react";
import "./Person.scss";
import { getGenero } from "../../../services/calls";
import { ErrorAtGetData } from "../../../assets/js/Alerts";

export default function Person() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [siape, setSiape] = useState("");
  const [genero, setGenero] = useState("");
  const [options, setOptions] = useState([]);
  // const [uf, setUf] = useState(""); //pavimentar
  const [municipio, setMunicipio] = useState(""); //pavimentar

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      CADASTRAR: [
        {
          PESSOA: {
            pessoa_nome: nome,
            pessoa_data_nascimento: dataNascimento,
            pessoa_cpf: cpf,
            pessoa_email: email,
            pessoa_siape: siape,
            genero_id: genero,
            municipio_id: municipio,
            // municipio_id: municipio, // lembrar de colocar o municipio_id dependendo de uf_id
          },
        },
      ],
    };

    console.log(data);
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
        <div className="form-scroll">
          <form className="formulario-container" onSubmit={handleSubmit}>
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
              type="email"
              name="pessoa_email"
              id="pessoa_email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*Siape:</label>
            <input
              className="form-input"
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
            <label className="form-label">Município:</label>
            <select
              className="form-input"
              name="municipio_id"
              id="municipio_id"
              value={municipio}
              onChange={(event) => setMunicipio(event.target.value)}
            >
              <option value="0">Selecione</option>
              <option value="1">São Paulo</option>
              <option value="2">Rio de Janeiro</option>
              <option value="3">Belo Horizonte</option>
              <option value="4">Salvador</option>
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
