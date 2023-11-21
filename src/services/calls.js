import api from "./api";

export const loginUser = async (username, password, sapiens) => {

  const dataUser = {
    USUARIO: username,
    SENHA: password,
    SAPIENS: sapiens,
  };

  try {
    const response = await api.post("/login", dataUser, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", response.data.TOKEN);
    localStorage.setItem("uid", response.data.PROFILE_ID);
    if (response.data.SUCESSO === true) {
      console.log(response);
      return 200;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

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

