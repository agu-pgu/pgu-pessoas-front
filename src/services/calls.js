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

export const logoutUser = async () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");

  try {
    const response = await api.post(
      "/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          uid: uid,
        },
      }
    );
    if (response.data.SUCESSO === true) {
      return 200;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};
