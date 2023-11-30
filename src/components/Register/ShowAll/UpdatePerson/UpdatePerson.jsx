import React, { useEffect, useState } from "react";
import "./UpdatePerson.scss";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../../assets/js/Alerts";
import {
  getGenero,
  getMunicipio,
  getPessoaId,
  updatePerson,
} from "../../../../services/CallsPerson/callsUpdateRegister";

export default function UpdatePerson({ id, handleClose }) {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [siape, setSiape] = useState("");
  const [generoId, setGeneroId] = useState("");
  const [municipioId, setMunicipioId] = useState("");
  const [generoOptions, setGeneroOptions] = useState([]);
  const [municipioOptions, setMunicipioOptions] = useState([]);
  const idString = String(id);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    const municipioString = String(municipioId);
    const generoString = String(generoId);
    e.preventDefault();
    const data = {
      ATUALIZAR: [
        {
          PESSOA: {
            pessoa_id: idString,
            ATUALIZAR: {
              pessoa_nome: name,
              pessoa_data_nascimento: birthDate,
              pessoa_cpf: cpf,
              pessoa_email: email,
              pessoa_siape: siape,
              genero_id: generoString,
              municipio_id: municipioString,
            },
          },
        },
      ],
    };
    try {
      const response = await updatePerson(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
  };

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getPessoaId(idString);
        const pessoaData = response.data.RETORNO[0].RETORNO[0];
        setName(pessoaData.PESSOA.pessoa_nome || "");
        setCpf(pessoaData.PESSOA.pessoa_cpf || "");
        setEmail(pessoaData.PESSOA.pessoa_email || "");
        setSiape(pessoaData.PESSOA.pessoa_siape || "");
        setGeneroId(pessoaData.PESSOA.genero_id[0].GENERO.genero_id || "");
        setMunicipioId(
          pessoaData.PESSOA.municipio_id[0].MUNICIPIO.municipio_id || ""
        );

        if (
          pessoaData.PESSOA.pessoa_data_nascimento !== undefined &&
          pessoaData.PESSOA.pessoa_data_nascimento !== ""
        ) {
          // Convertendo a string de data para o formato desejado (YYYY-MM-DD HH:mm:ss)
          const birthDateArray =
            pessoaData.PESSOA.pessoa_data_nascimento.split("/");
          const formattedBirthDate = `${birthDateArray[2]}-${birthDateArray[1]}-${birthDateArray[0]} 00:00:00`;
          setBirthDate(formattedBirthDate);
        } else {
          setBirthDate("");
        }
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarPessoa();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarGenero = async () => {
      try {
        const response = await getGenero();
        const generoData = response.data.RETORNO[0].RETORNO;
        const options = generoData.map((item) => (
          <option key={item.GENERO.genero_id} value={item.GENERO.genero_id}>
            {item.GENERO.genero_nome}
          </option>
        ));

        generoData.forEach((item) => {
          if (generoId === item.GENERO.genero_id) {
            options[0] = (
              <option
                key={item.GENERO.genero_id}
                value={item.GENERO.genero_id}
                selected
              >
                {item.GENERO.genero_nome}
              </option>
            );
          }
        });
        setGeneroOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarGenero();

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
        ));

        municipioData.forEach((item) => {
          if (municipioId === item.MUNICIPIO.municipio_id) {
            options[0] = (
              <option
                key={item.MUNICIPIO.municipio_id}
                value={item.MUNICIPIO.municipio_id}
                selected
              >
                {item.MUNICIPIO.municipio_nome}
              </option>
            );
          }
        });
        setMunicipioOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarMunicipio();

    return () => {};
  }, []);

  return (
    <div className="update-person-modal">
      <div className="update-person-modal-content">
        <h2 className="update-h2">Atualizar Pessoa</h2>
        <form onSubmit={handleConfirm}>
          <input
            className="input-update"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={255}
          />
          <input
            className="input-update"
            type="date"
            placeholder="*Data de Nascimento"
            value={birthDate || ""}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <input
            className="input-update"
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            maxLength={14}
          />
          <input
            className="input-update"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-update"
            type="text"
            placeholder="SIAPE"
            value={siape}
            onChange={(e) => setSiape(e.target.value)}
          />
          <select
            className="input-update"
            name="genero_id"
            id="genero_id"
            value={generoId}
            onChange={(event) => setGeneroId(event.target.value)}
          >
            {generoOptions}
          </select>
          <select
            className="input-update"
            name="municipio_id"
            id="municipio_id"
            value={municipioId}
            onChange={(event) => setMunicipioId(event.target.value)}
          >
            {municipioOptions}
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
