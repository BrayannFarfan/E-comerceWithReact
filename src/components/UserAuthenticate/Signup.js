import React, {useRef , useContext, } from 'react'
import { UserAuthContext } from '../../context/UserAuthContext'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import PowerSlap from "../../video/cervemark.mp4"
import Swal from 'sweetalert2'
// import { useForm } from "react-hook-form";


export const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confPasswordRef = useRef()

    const { signup} = useContext(UserAuthContext);
    const { push } = useHistory()

    const handleSignup = e =>{
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value, confPasswordRef.current.value)
        Swal.fire({
            icon: 'success',
            title: 'Registro correcto',
            text: 'Te redireccionaremos a la Home',
            willClose: () =>{
                push("/")
              }
          })
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
            <div >
                <div className='form-content'>
                    <div className='form-control'>
                        <h2>Sign up</h2>
                        <form onSubmit={handleSignup}>
                            <div>
                                <label>Email</label>
                                <input 
                                type="email"
                                name='email'
                                ref={emailRef}
                                required
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input 
                                type="password"
                                name="password"
                                ref={passwordRef}
                                required
                                />
                            </div>
                            <div>
                                <label>Repetir Password</label>
                                <input 
                                type="password"
                                name='password'
                                ref={confPasswordRef}
                                required
                                />
                            </div>
                            <button
                            type='submit'
                            className='btn-login'
                            >
                                Sign Up
                            </button>
                        </form>
                        <span className='up'>ya tenes una cuenta? 
                            <Link to="/login" className='sign'>Login</Link>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
