import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserAuthContext } from "../../context/UserAuthContext";
import { useHistory } from 'react-router-dom';


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
        <div>
            <div>
                <div>
                    <h2>login</h2>
                    <form onSubmit={handleSubmit}> 
                        <div>
                            <label>Email</label>
                            <input 
                            type='email'
                            className=''
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Passwprd</label>
                            <input 
                            type='password'
                            className=""
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={password}
                            />
                        </div>
                        <button
                        type='submit'
                        className=''
                        >
                            Login
                        </button>
                    </form>
                    <button
                    type='submit'
                    onClick={handleGoogle}
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


    )
     
    
}
