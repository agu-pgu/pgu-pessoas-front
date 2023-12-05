import React, { useEffect, useState } from "react";
import {
  CreateError,
  ErrorAtGetData,
  createPersonSucess,
} from "../../../../assets/js/Alerts";
import {
  getCargo,
  getCarreiraTipo,
  getConcurso,
  getCoordenacao,
  getFuncao,
  getIngresso,
  getModulo,
  getMunicipio,
  getNucleo,
  getPermissaoId,
  getPessoa,
  getRegiao,
  getSetor,
  getUf,
  getUnidade,
  updatePermissao,
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
    try {
      const response = await updatePermissao(data);
      if (response.data.SUCESSO == true) {
        createPersonSucess();
      }
    } catch (error) {
      CreateError();
      console.log(error);
    }
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

  useEffect(() => {
    const getPavimentarUnidade = async () => {
      try {
        const response = await getUnidade();
        const unidadeData = response.data.RETORNO[0].RETORNO;
        const options = unidadeData.map((item) => (
          <option key={item.UNIDADE.unidade_id} value={item.UNIDADE.unidade_id}>
            {item.UNIDADE.unidade_nome}
          </option>
        ));

        unidadeData.forEach((item) => {
          if (unidadeId === item.UNIDADE.unidade_id) {
            options[0] = (
              <option
                key={item.UNIDADE.unidade_id}
                value={item.UNIDADE.unidade_id}
                selected
              >
                {item.UNIDADE.unidade_nome}
              </option>
            );
          }
        });
        setUnidadeIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarUnidade();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarSetor = async () => {
      try {
        const response = await getSetor();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option key={item.SETOR.setor_id} value={item.SETOR.setor_id}>
            {item.SETOR.setor_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (setorId === item.SETOR.setor_id) {
            options[0] = (
              <option
                key={item.SETOR.setor_id}
                value={item.SETOR.setor_id}
                selected
              >
                {item.SETOR.setor_nome}
              </option>
            );
          }
        });
        setSetorIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarSetor();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarMunicipio = async () => {
      try {
        const response = await getMunicipio();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option
            key={item.MUNICIPIO.municipio_id}
            value={item.MUNICIPIO.municipio_id}
          >
            {item.MUNICIPIO.municipio_nome}
          </option>
        ));

        responseData.forEach((item) => {
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
        setMunicipioIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarMunicipio();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarUf = async () => {
      try {
        const response = await getUf();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option key={item.UF.uf_id} value={item.UF.uf_id}>
            {item.UF.uf_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (ufId === item.UF.uf_id) {
            options[0] = (
              <option key={item.UF.uf_id} value={item.UF.uf_id} selected>
                {item.UF.uf_nome}
              </option>
            );
          }
        });
        setUfIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarUf();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCargo = async () => {
      try {
        const response = await getCargo();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option key={item.CARGO.cargo_id} value={item.CARGO.cargo_id}>
            {item.CARGO.cargo_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (cargoId === item.CARGO.cargo_id) {
            options[0] = (
              <option
                key={item.CARGO.cargo_id}
                value={item.CARGO.cargo_id}
                selected
              >
                {item.CARGO.cargo_nome}
              </option>
            );
          }
        });
        setCargoIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarCargo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCarreiraTipo = async () => {
      try {
        const response = await getCarreiraTipo();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option
            key={item.CARREIRA_TIPO.carreira_tipo_id}
            value={item.CARREIRA_TIPO.carreira_tipo_id}
          >
            {item.CARREIRA_TIPO.carreira_tipo_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (carreiraTipoId === item.CARREIRA_TIPO.carreira_tipo_id) {
            options[0] = (
              <option
                key={item.CARREIRA_TIPO.carreira_tipo_id}
                value={item.CARREIRA_TIPO.carreira_tipo_id}
                selected
              >
                {item.CARREIRA_TIPO.carreira_tipo_nome}
              </option>
            );
          }
        });
        setCarreiraTipoIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarCarreiraTipo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarFuncao = async () => {
      try {
        const response = await getFuncao();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option key={item.FUNCAO.funcao_id} value={item.FUNCAO.funcao_id}>
            {item.FUNCAO.funcao_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (funcaoId === item.FUNCAO.funcao_id) {
            options[0] = (
              <option
                key={item.FUNCAO.funcao_id}
                value={item.FUNCAO.funcao_id}
                selected
              >
                {item.FUNCAO.funcao_nome}
              </option>
            );
          }
        });
        setFuncaoIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarFuncao();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarIngresso = async () => {
      try {
        const response = await getIngresso();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option
            key={item.INGRESSO.ingresso_id}
            value={item.INGRESSO.ingresso_id}
          >
            {item.INGRESSO.ingresso_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (ingressoId === item.INGRESSO.ingresso_id) {
            options[0] = (
              <option
                key={item.INGRESSO.ingresso_id}
                value={item.INGRESSO.ingresso_id}
                selected
              >
                {item.INGRESSO.ingresso_nome}
              </option>
            );
          }
        });
        setIngressoIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarIngresso();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarNucleo = async () => {
      try {
        const response = await getNucleo();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option key={item.NUCLEO.nucleo_id} value={item.NUCLEO.nucleo_id}>
            {item.NUCLEO.nucleo_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (nucleoId === item.NUCLEO.nucleo_id) {
            options[0] = (
              <option
                key={item.NUCLEO.nucleo_id}
                value={item.NUCLEO.nucleo_id}
                selected
              >
                {item.NUCLEO.nucleo_nome}
              </option>
            );
          }
        });
        setNucleoIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarNucleo();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarCoordenacao = async () => {
      try {
        const response = await getCoordenacao();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option
            key={item.COORDENACAO.coordenacao_id}
            value={item.COORDENACAO.coordenacao_id}
          >
            {item.COORDENACAO.coordenacao_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (coordenacaoId === item.COORDENACAO.coordenacao_id) {
            options[0] = (
              <option
                key={item.COORDENACAO.coordenacao_id}
                value={item.COORDENACAO.coordenacao_id}
                selected
              >
                {item.COORDENACAO.coordenacao_nome}
              </option>
            );
          }
        });
        setCoordenacaoIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarCoordenacao();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarConcurso = async () => {
      try {
        const response = await getConcurso();
        const responseData = response.data.RETORNO[0].RETORNO;
        const options = responseData.map((item) => (
          <option
            key={item.CONCURSO.concurso_id}
            value={item.CONCURSO.concurso_id}
          >
            {item.CONCURSO.concurso_nome}
          </option>
        ));

        responseData.forEach((item) => {
          if (concursoId === item.CONCURSO.concurso_id) {
            options[0] = (
              <option
                key={item.CONCURSO.concurso_id}
                value={item.CONCURSO.concurso_id}
                selected
              >
                {item.CONCURSO.concurso_nome}
              </option>
            );
          }
        });
        setConcursoIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarConcurso();

    return () => {};
  }, []);

  return (
    <div className="update-permission-modal">
      <div className="update-permission-modal-content">
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
          <label className="label-update">Unidade:</label>
          <select
            className="input-update"
            name="unidade_id"
            id="unidade_id"
            value={unidadeId}
            onChange={(event) => setUnidadeId(event.target.value)}
          >
            {unidadeIdOptions}
          </select>
          <label className="label-update">Setor:</label>
          <select
            className="input-update"
            name="setor_id"
            id="setor_id"
            value={setorId}
            onChange={(event) => setSetorId(event.target.value)}
          >
            {setorIdOptions}
          </select>
          <label className="label-update">UF:</label>
          <select
            className="input-update"
            name="uf_id"
            id="uf_id"
            value={ufId}
            onChange={(event) => setUfId(event.target.value)}
          >
            {ufIdOptions}
          </select>
          <label className="label-update">Município:</label>
          <select
            className="input-update"
            name="municipio_id"
            id="municipio_id"
            value={municipioId}
            onChange={(event) => setMunicipioId(event.target.value)}
          >
            {municipioIdOptions}
          </select>
          <label className="label-update">Cargo:</label>
          <select
            className="input-update"
            name="cargo_id"
            id="cargo_id"
            value={cargoId}
            onChange={(event) => setCargoId(event.target.value)}
          >
            {cargoIdOptions}
          </select>
          <label className="label-update">Carreira - Tipo:</label>
          <select
            className="input-update"
            name="carreira_tipo_id"
            id="carreira_tipo_id"
            value={carreiraTipoId}
            onChange={(event) => setCarreiraTipoId(event.target.value)}
          >
            {carreiraTipoIdOptions}
          </select>
          <label className="label-update">Função:</label>
          <select
            className="input-update"
            name="funcao_id"
            id="funcao_id"
            value={funcaoId}
            onChange={(event) => setFuncaoId(event.target.value)}
          >
            {funcaoIdOptions}
          </select>
          <label className="label-update">Ingresso:</label>
          <select
            className="input-update"
            name="ingresso_id"
            id="ingresso_id"
            value={ingressoId}
            onChange={(event) => setIngressoId(event.target.value)}
          >
            {ingressoIdOptions}
          </select>
          <label className="label-update">Núcleo:</label>
          <select
            className="input-update"
            name="nucleo_id"
            id="nucleo_id"
            value={nucleoId}
            onChange={(event) => setNucleoId(event.target.value)}
          >
            {nucleoIdOptions}
          </select>
          <label className="label-update">Coordenação:</label>
          <select
            className="input-update"
            name="coordenacao_id"
            id="coordenacao_id"
            value={coordenacaoId}
            onChange={(event) => setCoordenacaoId(event.target.value)}
          >
            {coordenacaoIdOptions}
          </select>
          <label className="label-update">Concurso:</label>
          <select
            className="input-update"
            name="concurso_id"
            id="concurso_id"
            value={concursoId}
            onChange={(event) => setConcursoId(event.target.value)}
          >
            {concursoIdOptions}
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
