import React, { useEffect, useState } from "react";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../assets/js/Alerts";
import "./CID.scss";
import {
  createCID,
  createCIDCategoria,
  createCIDSub,
  getCid,
  getCidCategoria,
} from "../../../services/callsAdministration/callsCID";

export default function CID() {
  const [cidCategoria, setCidCategoria] = useState("");
  const [cid, setCid] = useState("");
  const [cidClasse, setCidClasse] = useState("");
  const [cidCategoriaId, setCidCategoriaId] = useState("");
  const [cidId, setCidId] = useState("");
  const [cidSubClasse, setCidSubClasse] = useState("");
  const [cidSub, setCidSub] = useState("");
  const [optionsCidCategoriaId, setOptionsCidCategoriaId] = useState([]);
  const [optionsCidId, setOptionsCidId] = useState([]);
  // const [cidCategoriaDescricao, setCidCategoriaDescricao] = useState("");

  const handleSubmitForCreateCidCategoria = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CID_CATEGORIA: {
            cid_categoria_nome: cidCategoria,
            // cid_categoria_descricao: cidCategoriaDescricao,
          },
        },
      ],
    };

    try {
      const response = await createCIDCategoria(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  const handleSubmitForCreateCid = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CID: {
            cid_nome: cid,
            cid_classe: cidClasse,
            // cid_descricao:
            cid_categoria_id: cidCategoriaId,
          },
        },
      ],
    };

    try {
      const response = await createCID(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  const handleSubmitForCreateCidSub = async (e) => {
    e.preventDefault();
    const data = {
      CADASTRAR: [
        {
          CID_SUB: {
            cid_sub_nome: cidSub,
            cid_sub_classe: cidSubClasse,
            // cid_sub_descricao:
            cid_id: cidId,
          },
        },
      ],
    };

    try {
      const response = await createCIDSub(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
    }
  };

  useEffect(() => {
    const getPavimentarCIDCategoria = async () => {
      try {
        const response = await getCidCategoria();
        const cidCateogriaData = response.data.RETORNO[0].RETORNO;
        const options = cidCateogriaData.map((item) => (
          <option
            key={item.CID_CATEGORIA.cid_categoria_id}
            value={item.CID_CATEGORIA.cid_categoria_id}
          >
            {item.CID_CATEGORIA.cid_categoria_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCidCategoriaId(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCIDCategoria();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCID = async () => {
      try {
        const response = await getCid();
        const cidData = response.data.RETORNO[0].RETORNO;
        const options = cidData.map((item) => (
          <option key={item.CID.cid_id} value={item.CID.cid_id}>
            {item.CID.cid_nome}
          </option>
        )); // mapeando para obter os valores de genero_id e genero_nome
        options.unshift(
          <option key="0" value="">
            Selecione
          </option>
        ); // adicionando a opção "Selecione" no início do array de options para o select com um valor nulo
        setOptionsCidId(options);
      } catch (error) {
        ErrorAtGetData();
      }
    };
    getPavimentarCID();

    return () => {};
  }, []);

  return (
    <div>
      <div className="formulario-container">
      <h1 className="formulario-h2">Administrativo - CID</h1>
        <div className="form-scroll">
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateCidCategoria}
          >
            <label className="form-label">*CID Categoria:</label>
            <input
              className="form-input"
              type="text"
              name="cidCategoria"
              id="cidCategoria"
              value={cidCategoria}
              onChange={(event) => setCidCategoria(event.target.value)}
              maxLength={255}
              required
            />
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateCid}
          >
            <label className="form-label">*CID:</label>
            <input
              className="form-input"
              type="text"
              name="cid"
              id="cid"
              value={cid}
              onChange={(event) => setCid(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*CID Classe:</label>
            <input
              className="form-input"
              type="text"
              name="cidClasse"
              id="cidClasse"
              value={cidClasse}
              onChange={(event) => setCidClasse(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*CID Categoria:</label>
            <select
              className="form-input"
              name="cidCategoriaId"
              id="cidCategoriaId"
              value={cidCategoriaId}
              onChange={(event) => setCidCategoriaId(event.target.value)}
              required
            >
              {optionsCidCategoriaId}
            </select>
            <button className="form-button-submit" type="submit">
              Enviar
            </button>
          </form>
          <form
            className="formulario-container"
            onSubmit={handleSubmitForCreateCidSub}
          >
            <label className="form-label">*CID Sub:</label>
            <input
              className="form-input"
              type="text"
              name="cidSub"
              id="cidSub"
              value={cidSub}
              onChange={(event) => setCidSub(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*CID Sub Classe:</label>
            <input
              className="form-input"
              type="text"
              name="cidClasse"
              id="cidClasse"
              value={cidSubClasse}
              onChange={(event) => setCidSubClasse(event.target.value)}
              maxLength={255}
              required
            />
            <label className="form-label">*CID:</label>
            <select
              className="form-input"
              name="cidId"
              id="cidId"
              value={cidId}
              onChange={(event) => setCidId(event.target.value)}
              required
            >
              {optionsCidId}
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
