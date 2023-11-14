import React, { useState } from 'react';
import './FormLogin.scss';
import Navbar from '../Navbar/Navbar';

const FormLogin = () => {
  const [sapiensChecked, setSapiensChecked] = useState(true);
  const [superSapiensChecked, setSuperSapiensChecked] = useState(false);

  const handleSapiensCheckboxChange = () => {
    setSapiensChecked(!sapiensChecked);
    setSuperSapiensChecked(false);
  };

  const handleSuperSapiensCheckboxChange = () => {
    setSuperSapiensChecked(!superSapiensChecked);
    setSapiensChecked(false);
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2 className='Login-h2'>Bem vindo ao novo <span className='login-span'>G</span>ESFER</h2>
          <form>
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" placeholder='000.000.000-00' name="username" />

            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />

            <div className="checkboxes">
              <input
                type="checkbox"
                id="sapiensCheckbox"
                name="sapiensCheckbox"
                checked={sapiensChecked}
                onChange={handleSapiensCheckboxChange}
              />
              <label htmlFor="sapiensCheckbox">Sapiens</label>

              <input
                type="checkbox"
                id="superSapiensCheckbox"
                name="superSapiensCheckbox"
                checked={superSapiensChecked}
                onChange={handleSuperSapiensCheckboxChange}
              />
              <label htmlFor="superSapiensCheckbox">Super Sapiens</label>
            </div>

            <button className='login-button-submit' type="submit">Login</button>
          </form>
          <p className='login-p'>&copy; Gesfer <strong>Desenvolvimento</strong> 1.0.0 2023 CONATEC. Alguns direitos reservados.</p>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
