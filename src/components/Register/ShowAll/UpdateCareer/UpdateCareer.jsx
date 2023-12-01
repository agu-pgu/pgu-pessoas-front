import React, { useEffect, useState } from "react";
import {
  getCarreiraId,
  getPessoa,
} from "../../../../services/CallsPerson/updateCareer";
import { ErrorAtGetData } from "../../../../assets/js/Alerts";

export default function UpdateCareer({ id, handleClose }) {
  const idString = String(id);
  const [pessoaId, setPessoaId] = useState("");
  const [cargoId, setCargoId] = useState("");
  const [cargoInicio, setCargoInicio] = useState("");
  const [initialDateCargoInicio, setInitialDateCargoInicio] = useState("");
  const [cargoFim, setCargoFim] = useState("");
  const [initialDateCargoFim, setInitialDateCargoFim] = useState("");
  const [ingressoId, setIngressoId] = useState("");
  const [concursoId, setConcursoId] = useState("");
  const [concursoClassificacaoId, setConcursoClassificacaoId] = useState("");
  const [concursoCotaId, setConcursoCotaId] = useState("");
  const [carreiraTipoId, setCarreiraTipoId] = useState("");
  const [setorId, setSetorId] = useState("");
  const [setorInicio, setSetorInicio] = useState("");
  const [initialDateSetorInicio, setInitialDateSetorInicio] = useState("");
  const [setorFim, setSetorFim] = useState("");
  const [initialDateSetorFim, setInitialDateSetorFim] = useState("");
  const [funcaoId, setFuncaoId] = useState("");
  const [funcaoInicio, setFuncaoInicio] = useState("");
  const [initialDateFuncaoInicio, setInitialDateFuncaoInicio] = useState("");
  const [funcaoFim, setFuncaoFim] = useState("");
  const [initialDateFuncaoFim, setInitialDateFuncaoFim] = useState("");
  const [coordenacaoId, setCoordenacaoId] = useState("");
  const [coordenacaoInicio, setCoordenacaoInicio] = useState("");
  const [initialDateCoordenacaoInicio, setInitialDateCoordenacaoInicio] =
    useState("");
  const [coordenacaoFim, setCoordenacaoFim] = useState("");
  const [initialDateCoordenacaoFim, setInitialDateCoordenacaoFim] =
    useState("");
  const [nucleoId, setNucleoId] = useState("");
  const [nucleoInicio, setNucleoInicio] = useState("");
  const [initialDateNucleoInicio, setInitialDateNucleoInicio] = useState("");
  const [nucleoFim, setNucleoFim] = useState("");
  const [initialDateNucleoFim, setInitialDateNucleoFim] = useState("");
  const [carreiraStatusId, setCarreiraStatusId] = useState("");
  const [regimeTrabalhoTipoId, setRegimeTrabalhoTipoId] = useState("");
  const [regimeTrabalhoModalidadeId, setRegimeTrabalhoModalidadeId] =
    useState("");
  const [pessoaIdOptions, setPessoaIdOptions] = useState([]);
  const [cargoIdOptions, setCargoIdOptions] = useState([]);
  const [ingressoIdOptions, setIngressoIdOptions] = useState([]);
  const [concursoIdOptions, setConcursoIdOptions] = useState([]);
  const [concursoClassificacaoIdOptions, setConcursoClassificacaoIdOptions] =
    useState([]);
  const [concursoCotaIdOptions, setConcursoCotaIdOptions] = useState([]);
  const [carreiraTipoIdOptions, setCarreiraTipoIdOptions] = useState([]);
  const [setorIdOptions, setSetorIdOptions] = useState([]);
  const [funcaoIdOptions, setFuncaoIdOptions] = useState([]);
  const [coordenacaoIdOptions, setCoordenacaoIdOptions] = useState([]);
  const [nucleoIdOptions, setNucleoIdOptions] = useState([]);
  const [carreiraStatusIdOptions, setCarreiraStatusIdOptions] = useState([]);
  const [regimeTrabalhoTipoIdOptions, setRegimeTrabalhoTipoIdOptions] =
    useState([]);
  const [
    regimeTrabalhoModalidadeIdOptions,
    setRegimeTrabalhoModalidadeIdOptions,
  ] = useState([]);

  const handleCancel = () => {
    handleClose();
  };

  const handleConfirm = async (e) => {
    const pessoaString = String(pessoaId);
    const cargoString = String(cargoId);
    const ingressoString = String(ingressoId);
    const concursoString = String(concursoId);
    const concursoClassificacaoString = String(concursoClassificacaoId);
    const concursoCotaString = String(concursoCotaId);
    const carreiraTipoString = String(carreiraTipoId);
    const setorString = String(setorId);
    const funcaoString = String(funcaoId);
    const coordenacaoString = String(coordenacaoId);
    const nucleoString = String(nucleoId);
    const carreiraStatusString = String(carreiraStatusId);
    const regimeTrabalhoTipoString = String(regimeTrabalhoTipoId);
    const regimeTrabalhoModalidadeString = String(regimeTrabalhoModalidadeId);

    e.preventDefault();

    const data = {
      ATUALIZAR: [
        {
          CARREIRA: {
            carreira_id: idString,
            ATUALIZAR: {
              pessoa_id: pessoaString,
              cargo_id: cargoString,
              cargo_inicio: cargoInicio,
              cargo_fim: cargoFim,
              ingresso_id: ingressoString,
              concurso_id: concursoString,
              concurso_classificacao: concursoClassificacaoString,
              concurso_cota_id: concursoCotaString,
              carreira_tipo_id: carreiraTipoString,
              setor_id: setorString,
              setor_inicio: setorInicio,
              setor_fim: setorFim,
              funcao_id: funcaoString,
              funcao_inicio: funcaoInicio,
              funcao_fim: funcaoFim,
              coordenacao_id: coordenacaoString,
              coordenacao_inicio: coordenacaoInicio,
              coordenacao_fim: coordenacaoFim,
              nucleo_id: nucleoString,
              nucleo_inicio: nucleoInicio,
              nucleo_fim: nucleoFim,
            },
          },
          CARREIRA_MOTIVO_STATUS: {
            carreira_status_id: carreiraStatusString,
          },
          REGIME_TRABALHO: {
            regime_trabalho_tipo_id: regimeTrabalhoTipoString,
            regime_trabalho_modalidade_id: regimeTrabalhoModalidadeString,
          },
        },
      ],
    };
console.log(pessoaId)
    // try {
    //   const response = await updateParticipation(data);
    //   if (response.data.SUCESSO == true) {
    //     createPersonSucess();
    //   }
    // } catch (error) {
    //   CreateError();
    //   console.log(error);
    // }
  };

  useEffect(() => {
    const getPavimentarCareer = async () => {
      try {
        const response = await getCarreiraId(idString);
        const carreiraData = response.data.RETORNO[0][0].RETORNO[0];
        setPessoaId(carreiraData.CARREIRA.pessoa_id[0].PESSOA.pessoa_id || "");
        setCargoId(carreiraData.CARREIRA.cargo_id[0]?.CARGO?.cargo_id || "");
        initialDateCargoInicio(carreiraData.CARREIRA.cargo_inicio || "");
        if (
          carreiraData.CARREIRA.cargo_inicio !== undefined &&
          carreiraData.CARREIRA.cargo_inicio !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.cargo_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setCargoInicio(formattedDate);
        } else {
          setCargoInicio("");
        }
        initialDateCargoFim(carreiraData.CARREIRA.cargo_fim || "");
        if (
          carreiraData.CARREIRA.cargo_fim !== undefined &&
          carreiraData.CARREIRA.cargo_fim !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.cargo_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setCargoFim(formattedDate);
        } else {
          setCargoFim("");
        }
        setIngressoId(
          carreiraData.CARREIRA.ingresso_id[0]?.INGRESSO?.ingresso_id || ""
        );
        setConcursoId(
          carreiraData.CARREIRA.concurso_id[0]?.CONCURSO?.concurso_id || ""
        );
        setConcursoClassificacaoId(
          carreiraData.CARREIRA.concurso_classificacao || ""
        );
        setConcursoCotaId(
          carreiraData.CARREIRA.concurso_cota_id[0]?.CONCURSO_COTA
            ?.concurso_cota_id || ""
        );
        setCarreiraTipoId(
          carreiraData.CARREIRA.carreira_tipo_id[0]?.CARREIRA_TIPO
            ?.carreira_tipo_id || ""
        );
        setSetorId(carreiraData.CARREIRA.setor_id[0]?.SETOR?.setor_id || "");
        setInitialDateSetorInicio(carreiraData.CARREIRA.setor_inicio || "");
        if (
          carreiraData.CARREIRA.setor_inicio !== undefined &&
          carreiraData.CARREIRA.setor_inicio !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.setor_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setSetorInicio(formattedDate);
        } else {
          setSetorInicio("");
        }
        setInitialDateSetorFim(carreiraData.CARREIRA.setor_fim || "");
        if (
          carreiraData.CARREIRA.setor_fim !== undefined &&
          carreiraData.CARREIRA.setor_fim !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.setor_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setSetorFim(formattedDate);
        } else {
          setSetorFim("");
        }
        setFuncaoId(
          carreiraData.CARREIRA.funcao_id[0]?.FUNCAO?.funcao_id || ""
        );
        setInitialDateFuncaoInicio(carreiraData.CARREIRA.funcao_inicio || "");
        if (
          carreiraData.CARREIRA.funcao_inicio !== undefined &&
          carreiraData.CARREIRA.funcao_inicio !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.funcao_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setFuncaoInicio(formattedDate);
        } else {
          setFuncaoInicio("");
        }
        setInitialDateFuncaoFim(carreiraData.CARREIRA.funcao_fim || "");
        if (
          carreiraData.CARREIRA.funcao_fim !== undefined &&
          carreiraData.CARREIRA.funcao_fim !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.funcao_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setFuncaoFim(formattedDate);
        } else {
          setFuncaoFim("");
        }
        setCoordenacaoId(
          carreiraData.CARREIRA.coordenacao_id[0]?.COORDENACAO
            ?.coordenacao_id || ""
        );
        setInitialDateCoordenacaoInicio(
          carreiraData.CARREIRA.coordenacao_inicio || ""
        );
        if (
          carreiraData.CARREIRA.coordenacao_inicio !== undefined &&
          carreiraData.CARREIRA.coordenacao_inicio !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.coordenacao_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setCoordenacaoInicio(formattedDate);
        } else {
          setCoordenacaoInicio("");
        }
        setInitialDateCoordenacaoFim(
          carreiraData.CARREIRA.coordenacao_fim || ""
        );
        if (
          carreiraData.CARREIRA.coordenacao_fim !== undefined &&
          carreiraData.CARREIRA.coordenacao_fim !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.coordenacao_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setCoordenacaoFim(formattedDate);
        } else {
          setCoordenacaoFim("");
        }
        setNucleoId(
          carreiraData.CARREIRA.nucleo_id[0]?.NUCLEO?.nucleo_id || ""
        );
        setInitialDateNucleoInicio(carreiraData.CARREIRA.nucleo_inicio || "");
        if (
          carreiraData.CARREIRA.nucleo_inicio !== undefined &&
          carreiraData.CARREIRA.nucleo_inicio !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.nucleo_inicio.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setNucleoInicio(formattedDate);
        } else {
          setNucleoInicio("");
        }
        setInitialDateNucleoFim(carreiraData.CARREIRA.nucleo_fim || "");
        if (
          carreiraData.CARREIRA.nucleo_fim !== undefined &&
          carreiraData.CARREIRA.nucleo_fim !== ""
        ) {
          const DateArray = carreiraData.CARREIRA.nucleo_fim.split("/");
          const formattedDate = `${DateArray[2]}-${DateArray[1]}-${DateArray[0]} 00:00:00`;
          setNucleoFim(formattedDate);
        } else {
          setNucleoFim("");
        }
        setCarreiraStatusId(
          carreiraData.CARREIRA_MOTIVO_STATUS.retorno[0]?.CARREIRA_MOTIVO_STATUS
            ?.carreira_status_id[0]?.CARREIRA_STATUS?.carreira_status_id || ""
        );
        setRegimeTrabalhoTipoId(
          carreiraData.REGIME_TRABALHO.retorno[0]?.REGIME_TRABALHO_TIPO
            ?.regime_trabalho_tipo_id || ""
        );
        setRegimeTrabalhoModalidadeId(
          carreiraData.REGIME_TRABALHO.retorno[0]?.REGIME_TRABALHO_MODALIDADE
            ?.regime_trabalho_modalidade_id || ""
        );
      } catch (error) {
        console.log(error);
        ErrorAtGetData();
      }
    };

    getPavimentarCareer();

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

  return (
    <div className="update-participation-modal">
      <div className="update-participation-modal-content">
        <h2 className="update-h2">Atualizar Participaçao</h2>
        <form onSubmit={handleConfirm}>
          <label className="label-update">Pessoa:</label>
          <select
            className="input-update"
            name="person_id"
            id="person_id"
            value={pessoaId}
            onChange={(event) => setPessoaId(event.target.value)}
          >
            {pessoaIdOptions}
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
