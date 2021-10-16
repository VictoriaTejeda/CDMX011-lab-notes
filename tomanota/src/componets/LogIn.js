import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/Autcontext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import homepick from "../assets/images/homepick.png";
import logo from "../assets/images/logo.png";
import btngoogle from "../assets/images/btngoogle.png"
import "./styles/Login.css";

const LogIn = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    try {
      await login(email, password);
      history.push("/WallNotes");
    } catch (error) {
      setError("Error en las credenciales");
      setTimeout(() => setError(""), 1500);
    }
  };

  const handleLoginGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        history.push("/WallNotes");
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };

  return (
    <section className="container">
      <div>
        <img src={homepick} alt="home-img" className="home-img" />
      </div>
      <div className="container-Form">
        <div>
          <img src={logo} alt="logo-img" className="logo" />
        </div>
        {error && <p className="error">{error}</p>}
        <Fragment>
          <form className="form">
            <div className="div-form">
              <label>Correo</label>
              <input
                className="mail"
                type="text"
                required
                placeholder="ejemplo@ejemplo.com"
                onChange={handleEmail}
              />
              <label>Contraseña</label>
              <input type="password" required onChange={handlePassword} />
              <button
                className="btn-Login"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email, password);
                }}
              >
                Inicia Sesión
              </button>
              <p>
               -- o --
              </p>
              <button className="btn-google" onClick={handleLoginGoogle}>
                Ingresa con <img src={ btngoogle } alt="google-img" className="google-img" />
              </button>
            </div>
          </form>
          <p>
            ¿No tienes una cuenta? <Link to="/register">Registrate</Link>{" "}
          </p>
        </Fragment>
      </div>
    </section>
  );
};

export default LogIn;
