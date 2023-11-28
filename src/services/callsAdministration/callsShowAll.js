import api from "../api";

export const getSetor = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        SETOR: {
          setor_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarSetor", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getCoordenacao = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        COORDENACAO: {
          coordenacao_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarCoordenacao", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getFuncao = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        FUNCAO: {
          funcao_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarFuncao", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getNucleo = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        NUCLEO: {
          nucleo_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarNucleo", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getCargo = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        CARGO: {
          cargo_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarCargo", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getRegiao = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        REGIAO: {
          regiao_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarRegiao", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getUnidade = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        UNIDADE: {
          unidade_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarUnidade", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getCid = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        CID: {
          cid_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarCid", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getIngresso = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        INGRESSO: {
          ingresso_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarIngresso", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getConcurso = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        CONCURSO: {
          concurso_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarConcurso", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getRegimeTrabalhoModalidade = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        REGIME_TRABALHO_MODALIDADE: {
          regime_trabalho_modalidade_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post(
      "/ConsultarRegimeTrabalhoModalidade",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          uid: uid,
        },
      }
    );
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getRegimeTrabalhoTipo = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        REGIME_TRABALHO_TIPO: {
          regime_trabalho_tipo_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarRegimeTrabalhoTipo", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteCid = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        CID: {
          cid_id: id,
          ATUALIZAR: {
            cid_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarCid", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteCoordenacao = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        COORDENACAO: {
          coordenacao_id: id,
          ATUALIZAR: {
            coordenacao_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarCoordenacao", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteFuncao = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        FUNCAO: {
          funcao_id: id,
          ATUALIZAR: {
            funcao_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarFuncao", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteCargo = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        CARGO: {
          cargo_id: id,
          ATUALIZAR: {
            cargo_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarCargo", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteRegiao = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        REGIAO: {
          regiao_id: id,
          ATUALIZAR: {
            regiao_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarRegiao", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteUnidade = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        UNIDADE: {
          unidade_id: id,
          ATUALIZAR: {
            unidade_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarUnidade", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteSetor = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        SETOR: {
          setor_id: id,
          ATUALIZAR: {
            setor_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarSetor", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteIngresso = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        INGRESSO: {
          ingresso_id: id,
          ATUALIZAR: {
            ingresso_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarIngresso", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteConcurso = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        CONCURSO: {
          concurso_id: id,
          ATUALIZAR: {
            concurso_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarConcurso", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteNucleo = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        NUCLEO: {
          nucleo_id: id,
          ATUALIZAR: {
            nucleo_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarNucleo", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteRegimeTrabalhoModalidade = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        REGIME_TRABALHO_MODALIDADE: {
          regime_trabalho_modalidade_id: id,
          ATUALIZAR: {
            regime_trabalho_modalidade_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post(
      "/AtualizarRegimeTrabalhoModalidade",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          uid: uid,
        },
      }
    );
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const deleteRegimeTrabalhoTipo = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        REGIME_TRABALHO_TIPO: {
          regime_trabalho_tipo_id: id,
          ATUALIZAR: {
            regime_trabalho_tipo_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarRegimeTrabalhoTipo", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        uid: uid,
      },
    });
    if (response.data.SUCESSO === true) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};
