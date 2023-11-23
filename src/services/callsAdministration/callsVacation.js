import api from "../api";

export const createVacationStatus = async (data) => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  try {
    const response = await api.post("/CadastrarFeriasStatus", data, {
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

export const getVacationStatus = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  const data = {
    CONSULTAR: [
      {
        FERIAS_STATUS: {
            ferias_status_ativo: "1",
        },
      },
    ],
  };

  try {
    const response = await api.post("/ConsultarFeriasStatus", data, {
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
