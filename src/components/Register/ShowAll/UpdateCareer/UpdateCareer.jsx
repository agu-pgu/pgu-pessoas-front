import React, { useEffect, useState } from "react";
import {
  getCargo,
  getCarreiraId,
  getCarreiraStatus,
  getCarreiraTipo,
  getCoordenacao,
  getFuncao,
  getIngresso,
  getNucleo,
  getPessoa,
  getSetor,
  getRegimeTrabalhoTipo,
  getConcurso,
  getConcursoCota,
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
          // REGIME_TRABALHO: {
          //   regime_trabalho_tipo_id: regimeTrabalhoTipoString,
          //   regime_trabalho_modalidade_id: regimeTrabalhoModalidadeString,
          // },
        },
      ],
    };
    console.log(concursoId);
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
        console.log(carreiraData);
        // setRegimeTrabalhoTipoId(carreiraData)
        setNucleoId(carreiraData.CARREIRA.nucleo_id[0].NUCLEO.nucleo_id || "");
        setInitialDateCargoInicio(carreiraData);
        setPessoaId(carreiraData.CARREIRA.pessoa_id[0].PESSOA.pessoa_id || "");
        setIngressoId(
          carreiraData.CARREIRA.ingresso_id[0].INGRESSO.ingresso_id || ""
        );
        setCargoId(carreiraData.CARREIRA.cargo_id[0]?.CARGO?.cargo_id || "");
        setConcursoId(
          carreiraData.CARREIRA.concurso_id[0].CONCURSO.concurso_id || ""
        );
        setConcursoClassificacaoId(
          carreiraData.CARREIRA.concurso_classificacao || ""
        );
        setConcursoCotaId(carreiraData.CARREIRA.concurso_cota_id || "");
        setCarreiraTipoId(
          carreiraData.CARREIRA.carreira_tipo_id[0]?.CARREIRA_TIPO
            ?.carreira_tipo_id || ""
        );
        setSetorId(carreiraData.CARREIRA.setor_id[0]?.SETOR?.setor_id || "");
        setInitialDateSetorInicio(carreiraData.CARREIRA.setor_inicio || "");
        setFuncaoId(
          carreiraData.CARREIRA.funcao_id[0]?.FUNCAO?.funcao_id || ""
        );
        setCoordenacaoId(
          carreiraData.CARREIRA.coordenacao_id[0]?.COORDENACAO
            ?.coordenacao_id || ""
        );

        setCarreiraStatusId(
          carreiraData.CARREIRA_MOTIVO_STATUS.RETORNO[0].CARREIRA_MOTIVO_STATUS
            .carreira_motivo_status_id || ""
        );

        setInitialDateCargoInicio(carreiraData.CARREIRA.cargo_inicio || "");

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

        setInitialDateCargoFim(carreiraData.CARREIRA.cargo_fim || "");

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

  useEffect(() => {
    const getPavimentarIngresso = async () => {
      try {
        const response = await getIngresso();
        const ingressoData = response.data.RETORNO[0].RETORNO;
        const options = ingressoData.map((item) => (
          <option
            key={item.INGRESSO.ingresso_id}
            value={item.INGRESSO.ingresso_id}
          >
            {item.INGRESSO.ingresso_nome}
          </option>
        ));

        ingressoData.forEach((item) => {
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
    const getPavimentarCargo = async () => {
      try {
        const response = await getCargo();
        const cargoData = response.data.RETORNO[0].RETORNO;
        const options = cargoData.map((item) => (
          <option key={item.CARGO.cargo_id} value={item.CARGO.cargo_id}>
            {item.CARGO.cargo_nome}
          </option>
        ));

        cargoData.forEach((item) => {
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
        const carreiraTipoData = response.data.RETORNO[0].RETORNO;
        const options = carreiraTipoData.map((item) => (
          <option
            key={item.CARREIRA_TIPO.carreira_tipo_id}
            value={item.CARREIRA_TIPO.carreira_tipo_id}
          >
            {item.CARREIRA_TIPO.carreira_tipo_nome}
          </option>
        ));

        carreiraTipoData.forEach((item) => {
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
    const getPavimentarSetor = async () => {
      try {
        const response = await getSetor();
        const setorData = response.data.RETORNO[0].RETORNO;
        const options = setorData.map((item) => (
          <option key={item.SETOR.setor_id} value={item.SETOR.setor_id}>
            {item.SETOR.setor_nome}
          </option>
        ));

        setorData.forEach((item) => {
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
    const getPavimentarFuncao = async () => {
      try {
        const response = await getFuncao();
        const funcaoData = response.data.RETORNO[0].RETORNO;
        const options = funcaoData.map((item) => (
          <option key={item.FUNCAO.funcao_id} value={item.FUNCAO.funcao_id}>
            {item.FUNCAO.funcao_nome}
          </option>
        ));

        funcaoData.forEach((item) => {
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
    const getPavimentarCoordenacao = async () => {
      try {
        const response = await getCoordenacao();
        const coordenacaoData = response.data.RETORNO[0].RETORNO;
        const options = coordenacaoData.map((item) => (
          <option
            key={item.COORDENACAO.coordenacao_id}
            value={item.COORDENACAO.coordenacao_id}
          >
            {item.COORDENACAO.coordenacao_nome}
          </option>
        ));

        coordenacaoData.forEach((item) => {
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
    const getPavimentarNucleo = async () => {
      try {
        const response = await getNucleo();
        const nucleoData = response.data.RETORNO[0].RETORNO;
        const options = nucleoData.map((item) => (
          <option key={item.NUCLEO.nucleo_id} value={item.NUCLEO.nucleo_id}>
            {item.NUCLEO.nucleo_nome}
          </option>
        ));

        nucleoData.forEach((item) => {
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

  //   useEffect(() => {
  //     const getPavimentarRegimeTrabalhoTipo = async () => {
  //       try {
  //         const response = await getRegimeTrabalhoTipo();
  //         const regimeTrabalhoTipoData = response.data.RETORNO[0].RETORNO;
  //         const options = regimeTrabalhoTipoData.map((item) => (
  //           <option
  //             key={item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_id}
  //             value={item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_id}
  //           >
  //             {item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_nome}
  //           </option>
  //         ));

  //         regimeTrabalhoTipoData.forEach((item) => {
  //           if (regimeTrabalhoTipoId === item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_id) {
  //             options[0] = (
  //               <option
  //                 key={item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_id}
  //                 value={item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_id}
  //                 selected
  //               >
  //                 {item.REGIME_TRABALHO_TIPO.regime_trabalho_tipo_nome}
  //               </option>
  //             );
  //           }
  //         });
  //         setRegimeTrabalhoTipoIdOptions(options);
  //       } catch (error) {
  //         ErrorAtGetData();
  //         console.log(error);
  //       }
  //     };
  //     getPavimentarRegimeTrabalhoTipo();

  //     return () => {};
  //   }, []);

  useEffect(() => {
    const getPavimentarCarreiraStatus = async () => {
      try {
        const response = await getCarreiraStatus();
        const carreiraStatusData = response.data.RETORNO[0].RETORNO;
        const options = carreiraStatusData.map((item) => (
          <option
            key={item.CARREIRA_STATUS.carreira_status_id}
            value={item.CARREIRA_STATUS.carreira_status_id}
          >
            {item.CARREIRA_STATUS.carreira_status_nome}
          </option>
        ));

        carreiraStatusData.forEach((item) => {
          if (carreiraStatusId === item.CARREIRA_STATUS.carreira_status_id) {
            options[0] = (
              <option
                key={item.CARREIRA_STATUS.carreira_status_id}
                value={item.CARREIRA_STATUS.carreira_status_id}
                selected
              >
                {item.CARREIRA_STATUS.carreira_status_nome}
              </option>
            );
          }
        });
        setCarreiraStatusIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarCarreiraStatus();

    return () => {};
  }, []);

  useEffect(() => {
    const getPavimentarConcurso = async () => {
      try {
        const response = await getConcurso();
        const concursoData = response.data.RETORNO[0].RETORNO;
        const options = concursoData.map((item) => (
          <option
            key={item.CONCURSO.concurso_id}
            value={item.CONCURSO.concurso_id}
          >
            {item.CONCURSO.concurso_nome}
          </option>
        ));

        concursoData.forEach((item) => {
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

  useEffect(() => {
    const getPavimentarConcursoCota = async () => {
      try {
        const response = await getConcursoCota();
        const concursoCotaData = response.data.RETORNO[0].RETORNO;
        const options = concursoCotaData.map((item) => (
          <option
            key={item.CONCURSO_COTA.concurso_cota_id}
            value={item.CONCURSO_COTA.concurso_cota_id}
          >
            {item.CONCURSO_COTA.concurso_cota_nome}
          </option>
        ));

        concursoCotaData.forEach((item) => {
          if (concursoCotaId === item.CONCURSO_COTA.concurso_cota_id) {
            options[0] = (
              <option
                key={item.CONCURSO_COTA.concurso_cota_id}
                value={item.CONCURSO_COTA.concurso_cota_id}
                selected
              >
                {item.CONCURSO_COTA.concurso_cota_nome}
              </option>
            );
          }
        });
        setConcursoCotaIdOptions(options);
      } catch (error) {
        ErrorAtGetData();
        console.log(error);
      }
    };
    getPavimentarConcursoCota();

    return () => {};
  }, []);

  return (
    <div className="update-participation-modal">
      <div className="update-participation-modal-content">
        <h2 className="update-h2">Atualizar Carreira</h2>
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
          <label className="label-update">
            Cargo - Data inicial atual: {initialDateCargoInicio}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={cargoInicio || ""}
            onChange={(e) => setCargoInicio(e.target.value)}
          />
          <label className="label-update">
            Cargo - Data final atual: {initialDateCargoFim}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={cargoFim || ""}
            onChange={(e) => setCargoFim(e.target.value)}
          />
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
          <label className="label-update">Concurso - Classificação:</label>
          <input
            type="number"
            className="input-update"
            name="concursoClassificacao"
            value={concursoClassificacaoId}
            onChange={(e) => setConcursoClassificacaoId(e.target.value)}
          />
          <label className="label-update">Concurso - Cota:</label>
          <select
            className="input-update"
            name="concurso_id"
            id="concurso_id"
            value={concursoCotaId}
            onChange={(event) => setConcursoCotaId(event.target.value)}
          >
            {concursoCotaIdOptions}
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
          <label className="label-update">Carreira - Status:</label>
          <select
            className="input-update"
            name="carreira_status_id"
            id="carreira_status_id"
            value={carreiraStatusId}
            onChange={(event) => setCarreiraStatusId(event.target.value)}
          >
            {carreiraStatusIdOptions}
          </select>
          <label className="label-update">Setor:</label>
          <select
            className="input-update"
            name="setor"
            id="setor"
            value={setorId}
            onChange={(event) => setSetorId(event.target.value)}
          >
            {setorIdOptions}
          </select>
          <label className="label-update">
            Setor - Data inicial atual: {initialDateSetorInicio}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={setorInicio || ""}
            onChange={(e) => setSetorInicio(e.target.value)}
          />
          <label className="label-update">
            Setor - Data final atual: {initialDateSetorFim}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={setorFim || ""}
            onChange={(e) => setSetorFim(e.target.value)}
          />
          <label className="label-update">Função:</label>
          <select
            className="input-update"
            name="funcao"
            id="funcao"
            value={funcaoId}
            onChange={(event) => setFuncaoId(event.target.value)}
          >
            {funcaoIdOptions}
          </select>
          <label className="label-update">
            Função - Data inicial atual: {initialDateFuncaoInicio}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={funcaoInicio || ""}
            onChange={(e) => setFuncaoInicio(e.target.value)}
          />
          <label className="label-update">
            Função - Data final atual: {initialDateFuncaoFim}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={funcaoFim || ""}
            onChange={(e) => setFuncaoFim(e.target.value)}
          />
          <label className="label-update">Coordenação:</label>
          <select
            className="input-update"
            name="coordenacao"
            id="coordenacao"
            value={coordenacaoId}
            onChange={(event) => setCoordenacaoId(event.target.value)}
          >
            {coordenacaoIdOptions}
          </select>
          <label className="label-update">
            Coordenação - Data inicial atual: {initialDateCoordenacaoInicio}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={coordenacaoInicio || ""}
            onChange={(e) => setCoordenacaoInicio(e.target.value)}
          />
          <label className="label-update">
            Coordenação - Data final atual: {initialDateCoordenacaoFim}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={coordenacaoFim || ""}
            onChange={(e) => setCoordenacaoFim(e.target.value)}
          />
          <label className="label-update">Núcleo:</label>
          <select
            className="input-update"
            name="nucleo"
            id="nucleo"
            value={nucleoId}
            onChange={(event) => setNucleoId(event.target.value)}
          >
            {nucleoIdOptions}
          </select>
          <label className="label-update">
            Núcleo - Data inicial atual: {initialDateNucleoInicio}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={nucleoInicio || ""}
            onChange={(e) => setNucleoInicio(e.target.value)}
          />
          <label className="label-update">
            Núcleo - Data final atual: {initialDateNucleoFim}
          </label>
          <input
            className="input-update"
            type="date"
            placeholder="*Data inicial"
            value={nucleoFim || ""}
            onChange={(e) => setNucleoFim(e.target.value)}
          />
          {/* <label className="label-update">Carreira - Status:</label>
          <select
            className="input-update"
            name="carreira_status_id"
            id="carreira_status_id"
            value={carreiraStatusId}
            onChange={(event) => setCarreiraStatusId(event.target.value)}
          >
            {carreiraStatusIdOptions}
          </select> */}
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
