import React, { useEffect, useState } from "react";
import "./ShowAll.scss";
import {
  getGenero,
  getModulo,
  getPermissao,
} from "../../../services/callsSettings/callsShowAll";
import ShowGender from "./ShowGender/ShowGender";
import ShowModule from "./ShowModule/ShowModule";
import ShowPermission from "./ShowPermission/ShowPermission";

export default function ShowAll() {
  const [selectedList, setSelectedList] = useState(null);
  const [genderList, setGenderList] = useState([]);
  const [moduleList, setModuleList] = useState([]);
  const [permissionList, setPermissionList] = useState([]);

  const lists = {
    Genero: genderList,
    Modulo: moduleList,
    Permissao: permissionList,
    UF: "",
    Municipio: "",
  };

  const handleButtonClick = (list) => {
    setSelectedList(list);
  };

  useEffect(() => {
    const getPavimentarGenero = async () => {
      try {
        const response = await getGenero();
        const generoData = response.data.RETORNO[0].RETORNO;

        const formattedGeneroData = generoData.map((item) => ({
          nome: item.GENERO.genero_nome || "Nome não disponível",
        }));

        setGenderList(formattedGeneroData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarGenero();
  }, []);

  useEffect(() => {
    const getPavimentarModulo = async () => {
      try {
        const response = await getModulo();
        const moduloData = response.data.RETORNO[0].RETORNO;

        const formattedModuloData = moduloData.map((item) => ({
          nome: item.MODULO.modulo_nome || "Nome não disponível",
          descricao: item.MODULO.modulo_nome || "Descrição não disponível",
        }));

        setModuleList(formattedModuloData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarModulo();
  }, []);

  useEffect(() => {
    const getPavimentarPermissao = async () => {
      try {
        const response = await getPermissao();
        const permissaoData = response.data.RETORNO[0].RETORNO;

        const formattedPermissaoData = permissaoData.map((permissao) => ({
          cargoNome:
            permissao.PERMISSAO.cargo_id[0]?.CARGO?.cargo_nome ||
            "Nome do Cargo não disponível",
          carreiraTipoNome:
            permissao.PERMISSAO.carreira_tipo_id[0]?.CARREIRA_TIPO
              ?.carreira_tipo_nome || "Nome do Tipo de Carreira não disponível",
          concursoNome:
            permissao.PERMISSAO.concurso_id[0]?.CONCURSO?.concurso_nome ||
            "Nome do Concurso não disponível",
          coordenacaoNome:
            permissao.PERMISSAO.coordenacao_id[0]?.COORDENACAO
              ?.coordenacao_nome || "Nome da Coordenação não disponível",
          funcaoNome:
            permissao.PERMISSAO.funcao_id[0]?.FUNCAO?.funcao_nome ||
            "Nome da Função não disponível",
          ingressoNome:
            permissao.PERMISSAO.ingresso_id[0]?.INGRESSO?.ingresso_nome ||
            "Nome do Ingresso não disponível",
          moduloNome:
            permissao.PERMISSAO.modulo_id[0]?.MODULO?.modulo_nome ||
            "Nome do Módulo não disponível",
          municipioNome:
            permissao.PERMISSAO.municipio_id[0]?.MUNICIPIO?.municipio_nome ||
            "Nome do Município não disponível",
          ufNome:
            permissao.PERMISSAO.uf_id[0]?.UF?.uf_nome ||
            "Nome do UF não disponível",
          nucleoNome:
            permissao.PERMISSAO.nucleo_id[0]?.NUCLEO?.nucleo_nome ||
            "Nome do Núcleo não disponível",
          pessoaNome:
            permissao.PERMISSAO.pessoa_id[0]?.PESSOA?.pessoa_nome ||
            "Nome da Pessoa não disponível",
          pessoaSiape:
            permissao.PERMISSAO.pessoa_id[0]?.PESSOA?.pessoa_siape ||
            "SIAPE da Pessoa não disponível",
          regiaoNome:
            permissao.PERMISSAO.regiao_id[0]?.REGIAO?.regiao_nome ||
            "Nome da Região não disponível",
          setorNome:
            permissao.PERMISSAO.setor_id[0]?.SETOR?.setor_nome ||
            "Nome do Setor não disponível",
          unidadeNome:
            permissao.PERMISSAO.unidade_id[0]?.UNIDADE?.unidade_nome ||
            "Nome da Unidade não disponível",
        }));

        setPermissionList(formattedPermissaoData);
      } catch (error) {
        console.log(error);
      }
    };

    getPavimentarPermissao();
  }, []);

  return (
    <div className="show-all-container">
      <div className="button-container-settings">
        <button
          className={selectedList === "Genero" ? "selected" : ""}
          onClick={() => handleButtonClick("Genero")}
        >
          Gênero
        </button>
        <button
          className={selectedList === "Modulo" ? "selected" : ""}
          onClick={() => handleButtonClick("Modulo")}
        >
          Modulo
        </button>
        <button
          className={selectedList === "Permissao" ? "selected" : ""}
          onClick={() => handleButtonClick("Permissao")}
        >
          Permissao
        </button>
        <button
          className={selectedList === "UF" ? "selected" : ""}
          onClick={() => handleButtonClick("UF")}
        >
          UF
        </button>
        <button
          className={selectedList === "Municipio" ? "selected" : ""}
          onClick={() => handleButtonClick("Municipio")}
        >
          Município
        </button>
      </div>

      <div className="list-container">
        <h2 className="list-container-h2">
          {selectedList
            ? `Lista Selecionada: ${selectedList}`
            : "Selecione uma Lista!"}
        </h2>
        {selectedList === "Genero" && (
          <ShowGender peopleList={lists[selectedList]} />
        )}
        {selectedList === "Modulo" && (
          <ShowModule peopleList={lists[selectedList]} />
        )}
        {selectedList === "Permissao" && (
          <ShowPermission peopleList={lists[selectedList]} />
        )}
      </div>
    </div>
  );
}
