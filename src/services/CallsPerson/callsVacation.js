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

  export const getFeriasStatus = async () => {
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

  export const createVacation = async (data) => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
  
    try {
      const response = await api.post("/CadastrarFerias", data, {
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

