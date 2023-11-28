import api from "../api";

export const getGenero = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        GENERO: {
          genero_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarGenero", data, {
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

export const getModulo = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        MODULO: {
          modulo_ativo: "1",
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

export const getPermissao = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        PERMISSAO: {
          permissao_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarPermissao", data, {
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

export const getUf = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        UF: {
          uf_ativo: "1",
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

export const getMunicipio = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        MUNICIPIO: {
          municipio_ativo: "1",
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

export const deleteGenero = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        GENERO: {
          genero_id: "1",
          ATUALIZAR: {
            genero_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarGenero", data, {
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

export const deleteModulo = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        MODULO: {
          modulo_id: "1",
          ATUALIZAR: {
            modulo_ativo: "0",
          },
        },
      },
    ],
  };

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

export const deletePermissao = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        PERMISSAO: {
          permissao_id: "1",
          ATUALIZAR: {
            permissao_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarPermissao", data, {
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

export const deleteUf = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        UF: {
          uf_id: "1",
          ATUALIZAR: {
            uf_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarUf", data, {
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

export const deleteMunicipio = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        MUNICIPIO: {
          municipio_id: "1",
          ATUALIZAR: {
            municipio_ativo: "0",
          },
        },
      },
    ],
  };

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
