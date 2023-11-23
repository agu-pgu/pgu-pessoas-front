import api from "../api";

export const createCareerStatus = async (data) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  try {
    const response = await api.post("/CadastrarCarreiraStatus", data, {
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

export const createCarreiraTipo = async (data) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  try {
    const response = await api.post("/CadastrarCarreiraTipo", data, {
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

export const getCarreiraStatus = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        CARREIRA_STATUS: {
          carreira_status_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarCarreiraStatus", data, {
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
