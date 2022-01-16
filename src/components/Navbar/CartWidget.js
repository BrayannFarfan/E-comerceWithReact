import React, { useContext } from 'react';
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from '../../context/CartContext';
import { Shopping } from './CartWidgleStyled';

export const CartWidgle = () => {


  const { calcularCantidad } = useContext(CartContext)
  return (
    <div>
      <Shopping>
        <RiShoppingCartLine /><span>{calcularCantidad()}</span>
      </Shopping>
    </div>
  );


}