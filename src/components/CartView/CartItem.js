import React, {useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
// import { LoadingComponent } from '../Navbar/LoadingComponent'
import './CartItem.css'
import { BiTrashAlt } from "react-icons/bi";
import Swal from "sweetalert2"
import { generarOrden } from '../../config/generarOrden';



export const CartItem = () => {

  // const { loading , setLoading} = useContext(CartContext)

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

    //  if(values.nombre.length < 3 ){
    //   alert("nombre invalido")  
    //  }

    // setLoading(true)
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
    // .finally(()=>{
    //   setLoading(false)
    // })
}

  return (
    <>
  {/* {loading && <LoadingComponent />} */}
    <div>
      <div className="carrito">
        <button onClick={clear} className="clear-cart">Vaciar Carrito</button>
        
      </div>
      <h2 className="encabezado">Detalle de compra</h2>
      <aside className='aside'>
        <div className="summary">
          <div className="summary-total-items"><span className="total-items"></span>CheckOut de productos</div>
          <div className="summary-subtotal">
            <div className="subtotal-title">Subtotal</div>
            <div className="subtotal-value final-value">$ {calcularTotal()}</div>

          </div>
          <div className="summary-delivery">
            <select className="summary-delivery-selection">
              <option defaultValue="0">Seleccione Opcion de envio</option>
              <option defaultValue="collection">Retirar en Sucursal</option>
              <option defaultValue="first-class">Mercado envios</option>
              <option defaultValue="second-class">Correo Argentino</option>
              <option defaultValue="signed-for">Rappi</option>
            </select>
          </div>


          < form onSubmit={handleSubmit}>
            <h3>Complete sus datos</h3>

<input 
    type="text"
    placeholder="Nombre"
    name="nombre"
    value={values.nombre}
    onChange={handleInputChange}
    />
    {/* {values.nombre.length === 0 && <small>Este campo es obligatorio</small>} */}
<input 
     type="text"
     placeholder="Apellido"
     name="apellido"
     value={values.apellido}
     onChange={handleInputChange}
/>
    {/* {values.apellido.length === 0 && <small>Este campo es obligatorio</small>} */}
    <input 
     type="email"
     placeholder="Email"
     name="email"
     value={values.email}
     onChange={handleInputChange}
/>
    {/* {values.email.length === 0 && <small>Este campo es obligatorio</small>} */}

    <input 
     type="tel"
     placeholder="Tel"
     name="tel"
     value={values.tel}
     onChange={handleInputChange}
/>
    {/* {values.tel.length === 0 && <small>Este campo es obligatorio</small>} */}
            <button className="" type="submit">Finalizar Compra</button>
            </form>


          <div className="summary-total">
            <div className="total-title">Total</div>
            <div className="total-value final-value">$ {calcularTotal()}</div>
          </div>
          <div className="summary-checkout">
            {/* <Link to="/checkout">
              <button className="clear-cart" >REALIZAR PAGO</button>
            </Link> */}
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
                  {/* <li className="subtotal" >Subtotal</li> */}
                </ul>
              </div>
              <div className="basket-product">
                <div className="item">
                  <div className="product-image">
                    <img src={pro.img} alt={pro.name} key={pro.id} className="product-frame" />
                  </div>
                  <div className="product-details">
                    <h1><strong></strong>{pro.name}</h1>
                    <p>{pro.locations}</p>
                    <p>Codigo - {pro.code}</p>
                  </div>
                </div>
                <div className="price">{pro.price}</div>
                <div className="quantity">
                  <p>{pro.cantidad}</p>
                </div>
                {/* <div className="subtotal">${subTotal}</div> */}
                <div className="remove">
                  <button onClick={() => removeItem(pro.id)}><BiTrashAlt className="trash" /></button>
                </div>
              </div>
            </div>
            
          </>
        ))
      }

    </div>
    </>
  )
}
