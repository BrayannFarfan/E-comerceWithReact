import React from 'react'
import { Link } from 'react-router-dom';
import './UserAuthenticate.css';
import PowerSlap from "../../video/cervemark.mp4"
import { useForm } from '../../hooks/useForm';



let initialForm = {
    email:"",
    password:""
}


const validationsLogin =(form) =>{
  let errors = {}
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;


  if(!form.email.trim()){
    errors.email= "El campo 'Email' es 'Obligatorio'"
  }else if(!regexEmail.test(form.email.trim())){
    errors.email="El campo 'Email' solo acepta letras y espacios";
  }


  if(!form.password.trim()){
    errors.password="El campo 'Password' es 'Obligatorio'"
  }
  return errors
}


let style={
  color: "red",
  fontSize: "14px",
  position: "relative",
  left: ".7rem"
}
export const UserAuthenticate = () => {

const {
  form,
  errors,
  handleChange,
  handleBlur,
  handleLogin,
  handleGoogle} = useForm(initialForm , validationsLogin);


    return (
        <div>
            <video autoPlay loop muted
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transform: "trasslate(-50%, -50% )",
                zIndex: "-1"
            }}
            >
                <source src={PowerSlap}type='video/mp4' />
            </video>
        <div className='form-container'>
            <div className='form-content'>
                <div className='form-control'>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}> 
                        <div>
                            <input 
                            className='forms__input'
                            placeholder="Email"
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            />
                            {errors.email && <span style={style}>{errors.email}</span>}
                        </div>
                        <div>
                            <input 
                            className='forms__input'
                            placeholder="Password"
                            type='password'
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.password}
                            required
                            />
                            {errors.password && <span style={style}>{errors.password}</span>}
                        </div>
                        <button
                        type='submit'
                        className='btn-login'
                        >
                            Login
                        </button>
                    </form>
                    <div className='btn-links'>
                    <button
                    type='submit'
                    onClick={handleGoogle}
                    className='btn-google'
                    >
                    {/* <i className="fab fa-google"></i> */}
                    ingresar con google
                    </button>
                    <span className='up '>no tenes cuenta?
                        <Link  to="/signup" className='sign'>Sing Up</Link>
                    </span>
                        </div>
                </div>
            </div>
        </div>



        </div>


    )
     
    
}
