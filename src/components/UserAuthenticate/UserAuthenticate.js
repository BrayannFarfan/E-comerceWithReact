import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserAuthContext } from "../../context/UserAuthContext";
import { useHistory } from 'react-router-dom';
import './UserAuthenticate.css';


export const UserAuthenticate = () => {


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
    .catch((err) => console.log(err));
}

const handleGoogle = (e) => {
    e.preventDefault();
    loginGoogle();
    push("/");
}

    return (
        <div
        className=''
        >
        <div className='form-container'>
            <h1>Te damos la Binvenida :)</h1>
            <div className='form-content'>
                <div className='form-control'>
                    <h2>login</h2>
                    <form onSubmit={handleSubmit}> 
                        <div>
                            <label>Email</label>
                            <input 
                            type='email'
                            className=''
                            name='email'
                            value={email}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input 
                            type='password'
                            className=""
                            name='password'
                            onChange={handleChange}
                            value={password}
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
                    <button
                    type='submit'
                    onClick={handleGoogle}
                    className='btn-google'
                    >
                        login with Google
                    </button>
                    <span>no tenes cuenta?
                        <Link  to="/signup">Sing Up</Link>
                    </span>
                        </div>
                </div>
            </div>
        </div>



        </div>


    )
     
    
}
