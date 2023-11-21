import api from "./api";

export const getGenero = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const dataUser = {
    CONSULTAR: [
      {
        GENERO: {
          genero_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarGenero", dataUser, {
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

export const getRegiao = async (regiao) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        UF: {
          uf_ativo: "1",
          uf_regiao: regiao,
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarUf", data, {
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

export const getMunicipio = async (uf) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        MUNICIPIO: {
          municipio_ativo: "1",
          uf_id: uf,
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

export const createPessoa = async (data) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  try {
    const response = await api.post("/CadastrarPessoa", data, {
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
