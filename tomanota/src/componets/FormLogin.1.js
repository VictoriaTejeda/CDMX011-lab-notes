import React, { useState } from "react";

import btngoogle from "../assets/images/btngoogle.png";

const FormLogin = ({ handleLogin, handleLoginGoogle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <form className="form">
      <div className="div-form">
        <label>Correo</label>
        <input
          className="email"
          type="text"
          required
          placeholder="ejemplo@ejemplo.com"
          onChange={handleEmail}
        />
        <label>Contraseña</label>
        <input
          type="password"
          required
          placeholder="*******"
          onChange={handlePassword}
        />
        <button
          className="btn-Login"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email, password);
          }}
        >
          Inicia Sesión
        </button>
        <p>-- o --</p>
        <button className="btn-google" onClick={handleLoginGoogle}>
          Ingresa con{" "}
          <img src={btngoogle} alt="google-img" className="google-img" />
        </button>
      </div>
    </form>
  );
};
export default FormLogin;
