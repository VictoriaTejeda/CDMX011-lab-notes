import { useState } from "react";
import FormLogin from "./FormLogin.1";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/Autcontext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import homepick from "../assets/images/homepick.png";
import "./styles/Login.css";

const LogIn = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogin = async (email, password) => {
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
      .then(() => {
      
        history.push("/WallNotes");
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };
  

  return (
    <div>
      <section className="container">
        <div className="homepick">
          <img src={homepick} alt="home-img" className="home-img" />
        </div>
        <div className="container-Form">
          <div>
            <img src={logo} alt="logo-img" className="logo" />
          </div>
          {error && <p className="error">{error}</p>}
          <FormLogin handleLogin={handleLogin} handleLoginGoogle={handleLoginGoogle} />
          <p>
          ¿No tienes una cuenta? <Link to="/register">Registrate</Link>{" "}
        </p>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
