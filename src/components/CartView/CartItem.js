import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'
import { BiTrashAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

export const CartItem = () => {

  const { carrito, clear, removeItem, calcularTotal } = useContext(CartContext)
  return (
    <div>
      <div className="carrito">
        <button onClick={clear} className="clear-cart">Vaciar Carrito</button>
      </div>
      <h2 className="encabezado">Detalle de compra</h2>
      <aside>
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
          <div className="summary-total">
            <div className="total-title">Total</div>
            <div className="total-value final-value">$ {calcularTotal()}</div>
          </div>
          <div className="summary-checkout">
            <Link to="/">
              <button className="clear-cart">REALIZAR PAGO</button>
            </Link>
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
  )
}