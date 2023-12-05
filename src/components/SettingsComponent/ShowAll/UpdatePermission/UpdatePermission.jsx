import React, { useEffect, useState } from "react";
import { ErrorAtGetData } from "../../../../assets/js/Alerts";
import {
  getModulo,
  getPermissaoId,
  getPessoa,
  getRegiao,
} from "../../../../services/callsSettings/callsUpdatePermission";
import "./UpdatePermission.scss";
export default function UpdatePermission({ id, handleClose }) {
  const idString = String(id);
  const [permissaoPessoaId, setPermissaoPessoaId] = useState("");
  const [moduloId, setModuloId] = useState("");
  const [pessoaId, setPessoaId] = useState("");
  const [regiaoId, setRegiaoId] = useState("");
  const [unidadeId, setUnidadeId] = useState("");
  const [setorId, setSetorId] = useState("");
  const [municipioId, setMunicipioId] = useState("");
  const [ufId, setUfId] = useState("");
  const [cargoId, setCargoId] = useState("");
  const [carreiraTipoId, setCarreiraTipoId] = useState("");
  const [funcaoId, setFuncaoId] = useState("");
  const [ingressoId, setIngressoId] = useState("");
  const [nucleoId, setNucleoId] = useState("");
  const [coordenacaoId, setCoordenacaoId] = useState("");
  const [concursoId, setConcursoId] = useState("");
  const [permissaoPessoaIdOptions, setPermissaoPessoaIdOptions] = useState([]);
  const [moduloIdOptions, setModuloIdOptions] = useState([]);
  const [pessoaIdOptions, setPessoaIdOptions] = useState([]);
  const [regiaoIdOptions, setRegiaoIdOptions] = useState([]);
  const [unidadeIdOptions, setUnidadeIdOptions] = useState([]);
  const [setorIdOptions, setSetorIdOptions] = useState([]);
  const [municipioIdOptions, setMunicipioIdOptions] = useState([]);
  const [ufIdOptions, setUfIdOptions] = useState([]);
  const [cargoIdOptions, setCargoIdOptions] = useState([]);
  const [carreiraTipoIdOptions, setCarreiraTipoIdOptions] = useState([]);
  const [funcaoIdOptions, setFuncaoIdOptions] = useState([]);
  const [ingressoIdOptions, setIngressoIdOptions] = useState([]);
  const [nucleoIdOptions, setNucleoIdOptions] = useState([]);
  const [coordenacaoIdOptions, setCoordenacaoIdOptions] = useState([]);
  const [concursoIdOptions, setConcursoIdOptions] = useState([]);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    const permissaoIdString = String(permissaoPessoaId);
    const moduloIdString = String(moduloId);
    const pessoaIdString = String(pessoaId);
    const regiaoIdString = String(regiaoId);
    const unidadeIdString = String(unidadeId);
    const setorIdString = String(setorId);
    const municipioIdString = String(municipioId);
    const ufIdString = String(ufId);
    const cargoIdString = String(cargoId);
    const carreiraTipoIdString = String(carreiraTipoId);
    const funcaoIdString = String(funcaoId);
    const ingressoIdString = String(ingressoId);
    const nucleoIdString = String(nucleoId);
    const coordenacaoIdString = String(coordenacaoId);
    const concursoIdString = String(concursoId);

    e.preventDefault();

    const data = {
      ATUALIZAR: [
        {
          PERMISSAO: {
            permissao_id: idString,
            ATUALIZAR: {
              permissao_pessoa_id: permissaoIdString,
              modulo_id: moduloIdString,
              pessoa_id: pessoaIdString,
              regiao_id: regiaoIdString,
              unidade_id: unidadeIdString,
              setor_id: setorIdString,
              municipio_id: municipioIdString,
              uf_id: ufIdString,
              cargo_id: cargoIdString,
              carreira_tipo_id: carreiraTipoIdString,
              funcao_id: funcaoIdString,
              ingresso_id: ingressoIdString,
              nucleo_id: nucleoIdString,
              coordenacao_id: coordenacaoIdString,
              concurso_id: concursoIdString,
            },
          },
        },
      ],
    };
    console.log(concursoId);
    // try {
    //   const response = await updateCareer(data);
    //   if (response.data.SUCESSO == true) {
    //     createPersonSucess();
    //   }
    // } catch (error) {
    //   CreateError();
    //   console.log(error);
    // }
  };

  useEffect(() => {
    const getPavimentarPermission = async () => {
      try {
        const response = await getPermissaoId(idString);
        const permissaoData = response.data.RETORNO[0].RETORNO[0];
        setPermissaoPessoaId(permissaoData.PERMISSAO.permissao_pessoa_id || "");
        setModuloId(
          permissaoData.PERMISSAO.modulo_id[0].MODULO.modulo_id || ""
        );
        setPessoaId(
          permissaoData.PERMISSAO.pessoa_id[0].PESSOA.pessoa_id || ""
        );
        setRegiaoId(
          permissaoData.PERMISSAO.regiao_id[0].REGIAO.regiao_id || ""
        );
        setUnidadeId(
          permissaoData.PERMISSAO.unidade_id[0].UNIDADE.unidade_id || ""
        );
        setSetorId(permissaoData.PERMISSAO.setor_id[0].SETOR.setor_id || "");
        setMunicipioId(
          permissaoData.PERMISSAO.municipio_id[0].MUNICIPIO.municipio_id || ""
        );
        setUfId(permissaoData.PERMISSAO.uf_id[0].UF.uf_id || "");
        setCargoId(permissaoData.PERMISSAO.cargo_id[0].CARGO.cargo_id || "");
        setCarreiraTipoId(
          permissaoData.PERMISSAO.carreira_tipo_id[0].CARREIRA_TIPO
            .carreira_tipo_id || ""
        );
        setFuncaoId(
          permissaoData.PERMISSAO.funcao_id[0].FUNCAO.funcao_id || ""
        );
        setIngressoId(
          permissaoData.PERMISSAO.ingresso_id[0].INGRESSO.ingresso_id || ""
        );
        setNucleoId(
          permissaoData.PERMISSAO.nucleo_id[0].NUCLEO.nucleo_id || ""
        );
        setCoordenacaoId(
          permissaoData.PERMISSAO.coordenacao_id[0].COORDENACAO
            .coordenacao_id || ""
        );
        setConcursoId(
          permissaoData.PERMISSAO.concurso_id[0].CONCURSO.concurso_id || ""
        );
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };
    getPavimentarPermission();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getPessoa();
        const pessoaData = response.data.RETORNO[0].RETORNO;
        const options = pessoaData.map((item) => (
          <option key={item.PESSOA.pessoa_id} value={item.PESSOA.pessoa_id}>
            {item.PESSOA.pessoa_nome}
          </option>
        ));

        pessoaData.forEach((item) => {
          if (permissaoPessoaId === item.PESSOA.pessoa_id) {
            options[0] = (
              <option
                key={item.PESSOA.pessoa_id}
                value={item.PESSOA.pessoa_id}
                selected
              >
                {item.PESSOA.pessoa_nome}
              </option>
            );
          }
        });
        setPermissaoPessoaIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarPessoa();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getPessoa();
        const pessoaData = response.data.RETORNO[0].RETORNO;
        const options = pessoaData.map((item) => (
          <option key={item.PESSOA.pessoa_id} value={item.PESSOA.pessoa_id}>
            {item.PESSOA.pessoa_nome}
          </option>
        ));

        pessoaData.forEach((item) => {
          if (pessoaId === item.PESSOA.pessoa_id) {
            options[0] = (
              <option
                key={item.PESSOA.pessoa_id}
                value={item.PESSOA.pessoa_id}
                selected
              >
                {item.PESSOA.pessoa_nome}
              </option>
            );
          }
        });
        setPessoaIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
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
        ));

        moduloData.forEach((item) => {
          if (moduloId === item.MODULO.modulo_id) {
            options[0] = (
              <option
                key={item.MODULO.modulo_id}
                value={item.MODULO.modulo_id}
                selected
              >
                {item.MODULO.modulo_nome}
              </option>
            );
          }
        });
        setModuloIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
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
        ));

        regiaoData.forEach((item) => {
          if (regiaoId === item.REGIAO.regiao_id) {
            options[0] = (
              <option
                key={item.REGIAO.regiao_id}
                value={item.REGIAO.regiao_id}
                selected
              >
                {item.REGIAO.regiao_nome}
              </option>
            );
          }
        });
        setRegiaoIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarRegiao();

    return () => {};
  }, []);

  return (
    <div className="update-person-modal">
      <div className="update-person-modal-content">
        <h2 className="update-h2">Atualizar Permissão</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">Pessoa - Permissão:</label>
          <select
            className="input-update"
            name="permissao_pessoa_id"
            id="permissao_pessoa_id"
            value={permissaoPessoaId}
            onChange={(event) => setPermissaoPessoaId(event.target.value)}
          >
            {permissaoPessoaIdOptions}
          </select>
          <label className="label-update">Pessoa:</label>
          <select
            className="input-update"
            name="pessoa_id"
            id="pessoa_id"
            value={pessoaId}
            onChange={(event) => setPessoaId(event.target.value)}
          >
            {pessoaIdOptions}
          </select>
          <label className="label-update">Módulo:</label>
          <select
            className="input-update"
            name="modulo_id"
            id="modulo_id"
            value={moduloId}
            onChange={(event) => setModuloId(event.target.value)}
          >
            {moduloIdOptions}
          </select>
          <label className="label-update">Região:</label>
          <select
            className="input-update"
            name="regiao_id"
            id="regiao_id"
            value={regiaoId}
            onChange={(event) => setRegiaoId(event.target.value)}
          >
            {regiaoIdOptions}
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
