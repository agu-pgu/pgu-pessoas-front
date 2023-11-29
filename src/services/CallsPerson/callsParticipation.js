import api from "../api";

export const getParticipacaoTipo = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        PARTICIPACAO_TIPO: {
          participacao_tipo_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarParticipacaoTipo", data, {
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

export const getPessoa = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        PESSOA: {
          pessoa_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarPessoa", data, {
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

export const getParticipacaoStatus = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        PARTICIPACAO_STATUS: {
          participacao_status_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarParticipacaoStatus", data, {
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

export const createParticipacao = async (data) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  try {
    const response = await api.post("/CadastrarParticipacao", data, {
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
