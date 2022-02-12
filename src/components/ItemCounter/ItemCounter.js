import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import '../ItemDetailContainer/ItemDetail.css'

export const ItemCounter = ({ cantidad, setCantidad }) => {

  const handleSumar = () => {
    setCantidad(cantidad + 1)
    console.log("agregue un producto");
  }
  const handleRestar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
      console.log("disminui un producto");
    }
  }

  return (
    <>
      <div className='options'>

        <button
        className='btn-counter'
          onClick={handleRestar}
        >
          <FaAngleLeft />
        </button>
        <span className="options-cantidad">{cantidad}</span>
        <button
        className='btn-counter'
          onClick={handleSumar}
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  )
}
