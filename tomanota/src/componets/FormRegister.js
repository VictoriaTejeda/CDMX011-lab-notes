import { useState } from "react";
import React  from "react";

const FormRegister = ({ handleConfirmPass, handleSignUP}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //console.log(password);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePass = (e) => setPassword(e.target.value);
   

  return (
    <form className="form">
      <div className="div-form">
        <label>Correo</label>
        <input
          className="mail"
          type="email"
          required
          placeholder="ejemplo@ejemplo.com"
          onChange={handleEmail}
        />
        <label>Contraseña</label>
        <input type="password" required placeholder="*******" onChange={handlePass} />
        <label>Confirma tu contraseña</label>
        <input type="password" onChange={handleConfirmPass} />
        <button
          className="btn-resgister"
          onClick={(e) => {
            e.preventDefault();
            handleSignUP(password, email);
          }}
        >
          Registrate
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
