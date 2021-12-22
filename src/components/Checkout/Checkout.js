import React, { useState, useContex } from 'react'
import { CartContext } from '../../context/CartContext'

export const Checkout = () => {

const {carrito, calcularTotal} = useContex(CartContext)

const [values, setValues] = useState({
    nombre:'',
    apellido:'',
    email:'',
    tel:''
})

const handleInputChange = (e) =>{
    setValues({
        ...values,
        [e.target.name]: e.target.vales
    })
}

const handleSubmit = (e) => {
    e.preventDefault()

    const orden={
        buyer:{
            ...values
        },
        items:carrito,
        total: calcularTotal()
    }
    console.log(orden);
}




    return (
        <>
            <h2>Complete sus datos</h2>
            < form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    />
                    {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}
                <input 
                     type="text"
                     placeholder="Apellido"
                     name="apellido"
                     value={values.apellido}
                     onChange={handleInputChange}
                />
                    {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}
                    <input 
                     type="email"
                     placeholder="Email"
                     name="email"
                     value={values.email}
                     onChange={handleInputChange}
                />
                    {values.email.length === 0 && <small>Este campo es obligatorio</small>}
                
                    <input 
                     type="tel"
                     placeholder="Tel"
                     name="tel"
                     value={values.tel}
                     onChange={handleInputChange}
                />
                    {values.tel.length === 0 && <small>Este campo es obligatorio</small>}
                <button type="submit">Finalizar Compra</button>
            </form>
        </>
    )
}
