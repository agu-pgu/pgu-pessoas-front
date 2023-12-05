import api from "../api";

export const getModuloId = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        MODULO: {
          modulo_id: id,
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarModulo", data, {
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

export const updateModule = async (data) => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
  
    try {
      const response = await api.post("/AtualizarModulo", data, {
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