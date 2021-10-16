import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/Autcontext';
import homepick from '../assets/images/homepick.png';
import logo from '../assets/images/logo.png';
import  './styles/Register.css'

const Register = () => {
  const { signUp } = useAuth();

  const [error, setError] = useState('');
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmPass] = useState('');

const handleEmail = (e) => setEmail(e.target.value);
const handlePass = (e) => setPassword(e.target.value);
const handleConfirmPass = (e) => setConfirmPass(e.target.value);

const handleSignOut = async () => {
  if(password !== confirmpass){
    setError('la contraseña no coincide');
    setTimeout(() => setError(''), 1500);
  }else{
    try{
      await signUp(email, password);
      history.push('/WallNotes');
    }catch(error) {
      setError('Credenciales incorrectas');
      setTimeout(() => setError(''), 1500);
    }
  }
}

  return (
    <section className='container'>
      <div>
        <img src={homepick} alt='home-img' className='home-img'/>
      </div>
      <div className='container-Form'>
      <div>
        <img src={logo} alt='logo-img' className='logo' />
        {error && <p className='error' >{error}</p>}
      </div>
      <Fragment>
        <form className='form'>
          <div className='div-form'>
            <label>Correo</label>
            <input className='mail'
              type='email'
              placeholder='ejemplo@ejemplo.com'
              onChange={handleEmail}
            />
            <label>Contraseña</label>
            <input
              type='password'
              onChange={handlePass}
            />
            <label>Confirma tu contraseña</label>
            <input
              type='password'
              onChange={handleConfirmPass}
            />
            <button className= 'btn-resgister'
              onClick={(e) => {
                e.preventDefault();
                handleSignOut(email, password);
              }}
            >
              Registrate
            </button>
            <p>Ya estas registrado <Link to='/'>inicia Sesión</Link> </p>
          </div>
        </form>
      </Fragment>
      </div>
    </section>
  );
};

export default Register;
