import React, { useState } from "react";
import "./Person.scss";

export default function Person() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [siape, setSiape] = useState("");
  const [genero, setGenero] = useState("");
  const [municipio, setMunicipio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nome: nome,
      dataNascimento: dataNascimento,
      cpf: cpf,
      email: email,
      siape: siape,
      genero: genero,
      municipio: municipio,
    };

    console.log(data);
  };

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
            />
            <label className="form-label">*Email:</label>
            <input
              className="form-input"
              type="email"
              name="pessoa_email"
              id="pessoa_email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
            />
            <label className="form-label">Gênero:</label>
            <select
              className="form-input"
              name="genero_id"
              id="genero_id"
              value={genero}
              onChange={(event) => setGenero(event.target.value)}
            >
              <option value="0">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
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
            <button className="form-button-submit" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
