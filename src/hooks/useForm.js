import {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UIContext } from '../context/UIContext';
import { UserAuthContext } from '../context/UserAuthContext';
import { helpHttp } from '../helpers/helpHttp'

export const useForm = (initialForm, validateForm) => {


    const { loading, setLoading} = useContext(UIContext)
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(null);
    // const [ values , setValues] = useState({email : '',password : ''}); 


    const {login, loginGoogle, signup} = useContext(UserAuthContext);
    const { email, password } = form;

   
    const { push } = useHistory()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });

        // setValues({
        //     ...form,
        //     [name]: value,
        // })
        };
  
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    };
  
    const handleSubmit = (e) => {
        e.preventDefault(e);
        setErrors(validateForm(form))

        if(Object.keys(errors).length === 0){
            setLoading(true);
            helpHttp()
                .post('https://formsubmit.co/ajax/brayann.fave@gmail.com', {
                    body: form,
                    headers:{
                        "Content-Type":"application/json",
                        Accept: "application/json"
                    },
                })
                .then((res) => {
                    setLoading(false);
                    setResponse(true);
                    let timerInterval
                    Swal.fire({
                        position: 'bottom-end',
                        iconColor: '#ad9a3b',
                        icon:'success',
                        title: 'MENSAJE ENVIADO',
                        showConfirmButton: false,
                        timer: 1500,
                        willClose: () => {
                            clearInterval(timerInterval)
                          }
                      })
                      setForm(initialForm)
                }).catch((err) =>{
                    console.log(err);
                })
                
        }else{
            return
        }
    };

    const handleSignup = e =>{
        e.preventDefault()
        signup(email,password)
        .then((res) => 
          Swal.fire({
             icon: 'success',
             title: 'Registro correcto',
             text: 'Bienvenido ' + email,
             willClose: () =>{
                 push("/")
               }
           })
        )
          
        //   .catch(((err) => Swal.fire({
        //      icon: 'error',
        //      title: 'ERROR',
        //      text: 'Para una mejor experiencia , ingresá una contraseña correcta',
        //  })))
        
    }

    const handleLogin = (e) =>{
        e.preventDefault(e);
        login(email,password)  
        .then( (res) => push('/'))
        .catch((err) => Swal.fire({
            icon: 'error',
            title: 'Credenciales Incorrectas',
            text: 'Para una mejor experiencia , ingresá bien tus Credenciales',
        }))
    }

    const handleGoogle = (e) => {
        e.preventDefault();
        loginGoogle();
        push("/");
    }

 


    return {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit,
      handleLogin,
      handleGoogle,
      handleSignup
    };
  };