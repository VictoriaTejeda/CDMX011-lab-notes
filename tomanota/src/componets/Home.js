import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom"
import homepick from '../assets/images/homepick.png';
import logo from '../assets/images/logo.png';
import  './styles/Home.css'

const Home = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <section className='container'>
      <div>
        <img src={homepick} alt='home-img' className='home-img' />
      </div>
      <div className='container-Form'>
      <div>
        <img src={logo} alt='logo-img'className='logo' />
      </div>
      <Fragment>
        <form className='form'>
          <div className='frame'>
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
            <button className= 'btn-Login'
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email, pass);
              }}
            >
              Registrate
            </button>
          </div>
        </form>
        <p>¿No tienes una cuenta? <Link to='/register'>Registrate</Link> </p>
      </Fragment>
      </div>
    </section>
  );
};


export default Home
