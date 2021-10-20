import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import { CartNotFound } from './CartNotFound'

export const CartViewContainer = () => {

  const { carrito } = useContext(CartContext)

  return (
    <div>
      {carrito.length === 0 ? <><CartNotFound /></> : <>{<><CartItem /></>}</>}
    </div>
  )
}
