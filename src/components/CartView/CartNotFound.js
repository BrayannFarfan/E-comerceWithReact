import React from 'react'
import './CartNotFound.css'
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';

export const CartNotFound = () => {
  return (
    <div className="shopping-container">
      <GiShoppingCart className="shipping-icons" />
      <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
      <Link to="/category/negra">
        <button className="rediction">
          IR A COMPRAR
        </button>
      </Link>
    </div>
  )
}
