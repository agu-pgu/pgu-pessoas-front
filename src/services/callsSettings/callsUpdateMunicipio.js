import api from "../api";

export const getMunicipioId = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        MUNICIPIO: {
          municipio_id: id,
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarMunicipio", data, {
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

export const updateMunicipio = async (data) => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
  
    try {
      const response = await api.post("/AtualizarMunicipio", data, {
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