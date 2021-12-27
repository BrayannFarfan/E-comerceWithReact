import React, {useRef , useContext, } from 'react'
import { UserAuthContext } from '../../context/UserAuthContext'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
// import './UserAutenticate.css'

export const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confPasswordRef = useRef()

    const { signup} = useContext(UserAuthContext);
    const { push } = useHistory()

    const handleSignup = e =>{
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value, confPasswordRef.current.value)
        push("/")
    }


    return (
        <div>
            <div >
                <div>
                    <div>
                        <h2>Sign up</h2>
                        <form onSubmit={handleSignup}>
                            <div>
                                <label>Email</label>
                                <input 
                                type="email"
                                className=''
                                placeholder='Ingrese su email'
                                name='email'
                                ref={emailRef}
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input 
                                type="password"
                                placeholder="Ingrese Password"
                                name="password"
                                ref={passwordRef}
                                />
                            </div>
                            <div>
                                <label>Repetir Password</label>
                                <input 
                                type="password"
                                placeholder='Repetir Password'
                                name='password'
                                ref={confPasswordRef}
                                />
                            </div>
                            <button
                            type='submit'
                            placeholder='registrate'
                            className='btn-signup'
                            >
                                Sign Up
                            </button>
                        </form>
                        <span>ya tenes una cuenta? 
                            <Link to="/login">LogIn</Link>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
