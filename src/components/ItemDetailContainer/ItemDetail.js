import React from 'react'
import './ItemDetail.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


export const ItemDetail = ({ id, price, description, name, img, category, locations }) => {
  return (
    <>




      <div className='container' >
        <div >
        </div>
        <div className='highlight-window' id='product-img'><div className='highlight-overlay' id='highlight-overlay'></div></div>
        <div className='window'>
          <div className='main-content'>
            <h2>{locations}</h2>
            <h1>{name}</h1>
            <p className='description' id='description'>
              {description}</p>

            <div className='highlight-window  mobile' id='product-img'>
              <img src={img} alt={name} />
            </div>
            <div className='options'>

              <p className="quantity">CANTIDAD <FaAngleLeft /><span id="qt">3</span><FaAngleRight /></p>
            </div>
            <div className='divider'></div>

            <div className='purchase-info'>
              <div className='price'>$ {price}</div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}
