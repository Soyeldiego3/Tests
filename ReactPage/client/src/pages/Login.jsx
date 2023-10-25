import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Epico from './alerta';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/login', {email, password})
    .then((res) => { if(res["data"] === "Incio de sesión Corecto!"){console.log(res["data"]); Epico();}else{console.log(res); alert("Error al Iniciar Sesión.")}})
    .catch((err)=> console.log(err));
  }

  const logo = require('./img/moom.png');
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-secondary p-3'>
      <div className='p-3 bg-white w-25'>
        <div className='d-flex justify-content-center mb-5 mt-2'>
          <img src={logo} alt='logo' className='w-75 rounded-circle'/>
        </div>
        <form onSubmit={handleSubmit} className='d-flex flex-column text-center align-items-center'>
          <div className='mb-4 w-100'>
            <input id='email' type="email" placeholder='Correo Electronico' className='form-control border border-black'
            onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className='mb-4 w-100'>
            <input id='passwd' type="password" placeholder='Contraseña' className='form-control border border-black'
            onChange={e => setPassword(e.target.value)}/>
          </div>
          <button className='btn btn-info w-100 mb-3'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login