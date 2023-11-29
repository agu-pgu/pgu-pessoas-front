import api from "../api";

export const getCapacitacao = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        CAPACITACAO_TIPO: {
          capacitacao_tipo_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarCapacitacaoTipo", data, {
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

export const getCapacitacaoStatus = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        CAPACITACAO_STATUS: {
          capacitacao_status_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarCapacitacaoStatus", data, {
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

export const createCapacitacao = async (data) => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
  
    try {
      const response = await api.post("/CadastrarCapacitacao", data, {
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