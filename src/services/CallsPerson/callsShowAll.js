import api from "../api";

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

export const getCarreira = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        CARREIRA: {
          carreira_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarCarreira", data, {
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

export const getFerias = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        FERIAS: {
          ferias_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarFerias", data, {
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

export const getAfastamento = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        AFASTAMENTO: {
          afastamento_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarAfastamento", data, {
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

export const getParticipacao = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        PARTICIPACAO: {
          participacao_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarParticipacao", data, {
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

export const deletePerson = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        PESSOA: {
          pessoa_id: id,
          ATUALIZAR: {
            pessoa_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarPessoa", data, {
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

export const deleteCareer = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        CARREIRA: {
          carreira_id: id,
          ATUALIZAR: {
            carreira_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarCarreira", data, {
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

export const deleteVacation = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        FERIAS: {
          ferias_id: id,
          ATUALIZAR: {
            ferias_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarFerias", data, {
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

export const deleteRemoval = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        AFASTAMENTO: {
          afastamento_id: id,
          ATUALIZAR: {
            afastamento_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarAfastamento", data, {
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

export const deleteParticipation = async (id) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    ATUALIZAR: [
      {
        PARTICIPACAO: {
          participacao_id: id,
          ATUALIZAR: {
            participacao_ativo: "0",
          },
        },
      },
    ],
  };

  try {
    const response = await api.post("/AtualizarParticipacao", data, {
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
