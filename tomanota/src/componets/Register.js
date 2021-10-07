import React, { Fragment, useState } from 'react';
import homepick from '../assets/images/homepick.png';
import logo from '../assets/images/logo.png';
import  './styles/Register.css'

const Register = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  return (
    <section className='container'>
      <div>
        <img src={homepick} alt='home-img' className='home-img'/>
      </div>
      <div className='container-Form'>
      <div>
        <img src={logo} alt='logo-img' className='logo' />
      </div>
      <Fragment>
        <form className='form'>
          <div className='frame'>
            <label>Nombre de usuario</label>
            <input
              type='text'
              placeholder='Por ejemplo, Victoria'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Correo</label>
            <input className='mail'
              type='text'
              placeholder='Por ejemplo, correo@mail.com'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Contraseña</label>
            <input
              type='password'
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <label>Confirma tu contraseña</label>
            <input
              type='password'
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <button className= 'btn-resgister'
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email, pass);
              }}
            >
              Registrate
            </button>
          </div>
        </form>
      </Fragment>
      </div>
    </section>
  );
};

export default Register;
