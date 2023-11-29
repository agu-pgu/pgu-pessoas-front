import api from "../api";

export const getPessoaId = async (id) => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
  
    const data = {
      CONSULTAR: [
        {
          PESSOA: {
            pessoa_id: id,
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