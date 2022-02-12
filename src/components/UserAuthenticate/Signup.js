import React from 'react'
import { Link } from 'react-router-dom'
import PowerSlap from "../../video/cervemark.mp4"
import { useForm } from '../../hooks/useForm';


let initialForm = {
    email:"",
    password:"",
    // confPassword:""
}

const ValidationsSign =(form) =>{
    let errors = {}
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  
    if(!form.email.trim()){
      errors.email= "El campo 'Email' es 'Obligatorio'"
    }else if(!regexEmail.test(form.email.trim())){
      errors.email="El campo 'Email' solo acepta letras y espacios";
    }
  
  
    if(!form.password.trim()){
      errors.password="El campo 'Password' es 'Obligatorio'"
    }else if(!regexPass.test(form.password.trim())){
        errors.password="El Password debe tener Mínimo ocho caracteres, al menos una letra y un número"
    }
    return errors
    
  }

  

  let style={
    color: "red",
    fontSize: "14px",
    position: "relative",
    left: ".7rem"
  }


export const Signup = () => {

const {form, errors ,handleBlur,handleChange,handleSignup} = useForm(initialForm, ValidationsSign)
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
            <div >
                <div className='form-content'>
                    <div className='form-control'>
                        <form onSubmit={handleSignup}>
                        <h2>Sign up</h2>
                            <div>
                                <input 
                                className='forms__input'
                                placeholder='Email'
                                type="email"
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // ref={emailRef}                                
                                required
                                />  
                                {errors.email && <span style={style}>{errors.email}</span>}                  
                            </div>
                            <div>
                                <input 
                                className='forms__input'
                                placeholder='Password'
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // ref={passwordRef}
                                required
                                />
                                {errors.password && <span style={style}>{errors.password}</span>}
                            </div>
                            {/* <div>
                                <input 
                                className='forms__input'
                                type="password"
                                name='password'
                                placeholder='Password'
                                value={form.confPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // ref={confPasswordRef}
                                required
                                />
                            </div> */}
                            <button
                            type='submit'
                            className='btn-login'
                            >
                                Sign Up
                            </button>
                        </form>
                        <span className='up up-modifier'>ya tenes una cuenta? 
                            <Link to="/login" className='sign'>Login</Link>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
