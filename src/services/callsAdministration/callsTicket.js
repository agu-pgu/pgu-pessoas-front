import api from "../api";

export const createTicket = async (data) => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    
    try {
      const response = await api.post("/CadastrarIngresso", data, {
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