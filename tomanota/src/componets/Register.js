import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/Autcontext";
import  FormRegister from "./FormRegister"
import homepick from "../assets/images/homepick.png";
import logo from "../assets/images/logo.png";
import "./styles/Register.css";

const Register = () => {
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const history = useHistory();
  const handleConfirmPass = (e) => setConfirmPass(e.target.value);
 

  const handleSignUP = async (password, email) => {
    if (password !== confirmpass) {
      console.log(password, confirmpass, 'jajajja');
      setError("la contraseña no coincide");
      setTimeout(() => setError(""),10000);

    } else {
      try {
        await signUp(email, password);
        history.push("/WallNotes");
      } catch (error) {
        setError("Credenciales incorrectas");
        setTimeout(() => setError(""), 1500);
      }
    }
  };

  return (
    <section className="container">
      <div className="homepick">
        <img src={homepick} alt="home-img" className="home-img" />
      </div>
      <div className="container-Form">
        <div>
          <img src={logo} alt="logo-img" className="logo" />
          {error && <p className="error">{error}</p>}
        </div>
        <FormRegister handleConfirmPass= {handleConfirmPass} handleSignUP = {handleSignUP}/>
        <p>
          Ya estas registrado <Link to="/">inicia Sesión</Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Register;
