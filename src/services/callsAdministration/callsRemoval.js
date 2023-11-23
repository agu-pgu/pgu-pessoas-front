import api from "../api";

export const createRemovalStatus = async (data) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  try {
    const response = await api.post("/CadastrarAfastamentoStatus", data, {
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

export const createRemovalTipo = async (data) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  try {
    const response = await api.post("/CadastrarAfastamentoTipo", data, {
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

export const getAfastamentoStatus = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        AFASTAMENTO_STATUS: {
            afastamento_status_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarAfastamentoStatus", data, {
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
