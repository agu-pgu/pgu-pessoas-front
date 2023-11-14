import React, { useState } from "react";
import "./FormLogin.scss";
import Navbar from "../Navbar/Navbar";
import { loginUser } from "../../services/calls";
import { useNavigate } from "react-router-dom";
import { loginServerError, loginUserError } from "../../assets/js/Alerts";

const FormLogin = () => {
  const [sapiensChecked, setSapiensChecked] = useState(true);
  const [superSapiensChecked, setSuperSapiensChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSapiensCheckboxChange = () => {
    setSapiensChecked(!sapiensChecked);
    setSuperSapiensChecked(false);
  };

  const handleSuperSapiensCheckboxChange = () => {
    setSuperSapiensChecked(!superSapiensChecked);
    setSapiensChecked(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sapiens = superSapiensChecked ? "SUPERSAPIENS" : "SAPIENS";

    loginUser(username, password, sapiens).then((res) => {
      if (res === 200) {
        console.log("Login efetuado com sucesso");
        navigate("/home");
      } else if (res === 401) {
        loginUserError();
      } else {
        loginServerError();
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2 className="Login-h2">
            Bem vindo ao <span className="login-span">PGU</span>-Pessoas
          </h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="000.000.000-00"
              name="username"
            />

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="checkboxes">
              <input
                type="checkbox"
                id="SAPIENS"
                name="SAPIENS"
                checked={sapiensChecked}
                onChange={handleSapiensCheckboxChange}
              />
              <label htmlFor="sapiensCheckbox">Sapiens</label>

              <input
                type="checkbox"
                id="SUPERSAPIENS"
                name="SUPERSAPIENS"
                checked={superSapiensChecked}
                onChange={handleSuperSapiensCheckboxChange}
              />
              <label htmlFor="superSapiensCheckbox">Super Sapiens</label>
            </div>

            <button className="login-button-submit" type="submit">
              Login
            </button>
          </form>
          <p className="login-p">
            &copy; PGU-Pessoas <strong>Desenvolvimento</strong> 1.0.0 2023
            CONATEC. Alguns direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
