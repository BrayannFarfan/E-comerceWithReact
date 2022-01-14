import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserAuthContext } from "../../context/UserAuthContext";
import { useHistory } from 'react-router-dom';
import './UserAuthenticate.css';
import PowerSlap from "../../video/cervemark.mp4"
import Swal from 'sweetalert2';
//  import { useForm } from "react-hook-form";


export const UserAuthenticate = () => {


//  const { register , handleSubmit, formState: { errors}} = useForm();
const {login, loginGoogle} = useContext(UserAuthContext);
const [ values , setValues] = useState({
    email : '',
    password : ''
}); 

const { email, password } = values;


const { push } = useHistory()

const handleChange = (e) => {
    e.preventDefault();
    setValues({
        ...values,
        [e.target.name] : e.target.value,
    });
}

const handleSubmit = (e) =>{
    e.preventDefault();
    login(email,password)
    .then( (res) => push('/'))
    .catch((err) => Swal.fire({
        icon: 'error',
        title: 'Deberias poner datos en los campos',
        text: 'Para una mejor experiencia , ingresa tus datos',
      }));
}

const handleGoogle = (e) => {
    e.preventDefault();
    loginGoogle();
    push("/");
}

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
                    <form onSubmit={handleSubmit}> 
                        <div>
                            <label>Email</label>
                            {/* {
                                errors.email && <span>{errors.email.message}</span>
                            } */}
                            <input 
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                            //  {...register("email", {
                            //      required:{
                            //          value:true,
                            //          message: "El Email es obligatorio"
                            //      },
                            //      pattern:{
                            //          // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            //          message: "Ingrese un Email Válido" 
                            //      }
                            //  })}
                            />
                            
                        </div>
                        <div>
                            <label>Password</label>
                            {/* {
                                errors.password && <span>{errors.password.message}</span>
                            } */}
                            <input 
                            type='password'
                            name='password'
                            onChange={handleChange}
                            value={password}
                            //  {...register("password", {
                            //      required:{
                            //          value:true,
                            //          message: "El Password es obligatorio"
                            //      },
                            //      minLength:{
                            //          value: 8,
                            //          message: "La contraseña debe tener por lo menos 8 caracteres"
                            //      }
                            //  })}
                            />
                            
                        </div>
                        <button
                        type='submit'
                        className='btn-login'
                        >
                            Login
                        </button>
                    </form>
                    <div className='btn-links'>
                        <p className='or'>Or Login with</p>
                    <button
                    type='submit'
                    onClick={handleGoogle}
                    className='btn-google'
                    >
                    <i className="fab fa-google"></i>
                    </button>
                    <span className='up'>no tenes cuenta?
                        <Link  to="/signup" className='sign'>Sing Up</Link>
                    </span>
                        </div>
                </div>
            </div>
        </div>



        </div>


    )
     
    
}
