import React, {useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'
import { BiTrashAlt } from "react-icons/bi";
import Swal from "sweetalert2"
import { generarOrden } from '../../config/generarOrden';



export const CartItem = () => {


  const { carrito, clear, removeItem, calcularTotal } = useContext(CartContext)

  const [values, setValues] = useState({
    nombre:'',
    apellido:'',
    email:'',
    tel:''
})

const handleInputChange = (e) =>{
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}

const handleSubmit =  (e) => {
    e.preventDefault()



    //   if(values.nombre.length < 3 ){
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Completa tus datos',
    //   })
    //    return  
    //   }
    //   if(values.apellido.length < 3 ){
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...Complete el espacio de Apellido',
    //   }) 
    //     return
    //    }


    //    if(values.email.length < 3 ){
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...Complete el espacio de Email',
    //   })
    //   return
    // }
        
       
    //    if(values.tel.length < 3 ){
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...Complete el espacio de Telefono',
    //   }) 
    //     return
    //    }

    let timerInterval
Swal.fire({
  title: 'Prosecando su compra!',
  html: 'Su compra estará lista en  <b></b> segundos.',
  timer: 8000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
  generarOrden(values, carrito, calcularTotal())
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Orden Registrada',
        text: ` Guarde su numero de Orden : ${res}`,
        willClose: () =>{
          clear()
        }
      })
    }).catch((err) =>{
      Swal.fire({
        icon: 'Error',
        title: 'Producto sin stock',
        text: ` No hay stock de  : ${err.map(el => el.name).join(', ')}`,
      })
    })
}

  return (
    <>
    <div>
      
      <h2 className="encabezado">Detalle de compra</h2>
      <aside className='aside'>
        <div className="summary">
          <div className="summary-total-items"><span className="total-items"></span>CheckOut de productos</div>
          <form onSubmit={handleSubmit} className='form_ckeckout'>
            <h3>Complete sus datos</h3>
            <div>
              <input 
                  type="text"
                  placeholder="Nombre"
                  className='forms__inputs'
                  name="nombre"
                  value={values.nombre}
                  onChange={handleInputChange}
                  />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="Apellido"
                    className='forms__inputs forms__input__modifier'
                    name="apellido"
                    value={values.apellido}
                    onChange={handleInputChange}
                />
                </div>
                <div>
                    <input 
                    type="email"
                    placeholder="Email"
                    className='forms__inputs'
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                    {/* {!values.email.length ? <small className='errors__red'>Este campo es obligatorio</small> : ""} */}
              </div>
              <div>
                <input 
                type="number"
                placeholder="Tel"
                className='forms__inputs'
                name="tel"
                value={values.tel}
                onChange={handleInputChange}
            />
                </div>
                  <div className='btn-buy'>
                    <div>
                        <button className="btn-compra" type="submit">Finalizar Compra</button>
                    </div>
                    <div>
                        <button onClick={clear} className="clear-cart">Cancelar Compra</button>
                    </div>
                  </div>


            </form>
          <div className="summary-total">
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value">$ {calcularTotal()}</div>
          </div>
            <div className="total-title">Total</div>
            <div className="total-value final-value">$ {calcularTotal()}</div>
          </div>
          <div className="summary-checkout">
          </div>
        </div>
      </aside>

      {
        carrito.map((pro) => (
          <>
            <div className="basket">
              <div className="basket-labels">
                <ul className="ul">
                  <li className="item item-heading" >{pro.name} </li>
                  <li className="price" >Price</li>
                  <li className="quantity" >Cantidad</li>
                </ul>
              </div>
              <div className="basket-product">
                <div className="item">
                  <div className="product-image">
                    <img src={pro.img} alt={pro.name} key={pro.id} className="product-frame" />
                  </div>
                  <div className="product-details">
                    <div className='product-name'>
                        <h1><strong></strong>{pro.name}</h1>
                        <p>{pro.locations}</p>
                        <p>Codigo - {pro.code}</p>
                    </div>
                    <div className='move_price'>
                      <div className="price price_modifier">{pro.price}</div>
                      <div className="quantity quantity_modifier">
                        <p>{pro.cantidad}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                  <button  className="remove" onClick={() => removeItem(pro.id)}><BiTrashAlt className="trash" /></button>
                
              </div>
            </div>
            
          </>
        ))
      }

    </div>
    </>
  )
}
