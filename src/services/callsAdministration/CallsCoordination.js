import api from "../api";

export const createCoordination = async (data) => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    
    try {
      const response = await api.post("/CadastrarCoordenacao", data, {
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