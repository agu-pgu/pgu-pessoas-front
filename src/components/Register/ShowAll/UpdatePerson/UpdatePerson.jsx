import React, { useEffect, useState } from "react";
import "./UpdatePerson.scss";
import { ErrorAtGetData } from "../../../../assets/js/Alerts";
import { getPessoaId } from "../../../../services/CallsPerson/callsUpdateRegister";

export default function UpdatePerson({ id, handleClose }) {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [siape, setSiape] = useState("");
  const idString = String(id);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = () => {
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
              genero_id: "",
              municipio_id: "",
            },
          },
        },
      ],
    };

    // updatePerson(data);
    handleClose();
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

        if (
          pessoaData.PESSOA.pessoa_data_nascimento !== undefined &&
          pessoaData.PESSOA.pessoa_data_nascimento !== ""
        ) {
          // Convertendo a string de data para um formato reconhecido pelo construtor Date
          const birthDateArray =
            pessoaData.PESSOA.pessoa_data_nascimento.split("/");
          const formattedBirthDate = `${birthDateArray[2]}-${birthDateArray[1]}-${birthDateArray[0]}`;
          // Verifica se a data formatada é válida antes de definir o estado
          const dateObj = new Date(formattedBirthDate);
          setBirthDate(isNaN(dateObj) ? new Date() : dateObj); // caso não haja data castrada o valor será a atual
        } else {
          setBirthDate(new Date());
        } // feito pelo ChatGPT!!!
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarPessoa();

    return () => {};
  }, [id]);

  return (
    <div className="update-person-modal">
      <div className="update-person-modal-content">
        <h2 className="update-h2">Atualizar Pessoa</h2>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={255}
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={birthDate.toISOString().split("T")[0]}
          onChange={(e) => setBirthDate(new Date(e.target.value))}

        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          maxLength={14}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="SIAPE"
          value={siape}
          onChange={(e) => setSiape(e.target.value)}
        />
        <div className="button-container">
          <button className="cancel-button" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="confirm-button" onClick={handleConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
