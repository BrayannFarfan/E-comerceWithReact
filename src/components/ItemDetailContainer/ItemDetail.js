import React, { useContext, useState } from 'react'
import './ItemDetail.css';
import { ItemCounter } from '../ItemCounter/ItemCounter';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export const ItemDetail = ({ id, price, description, name, img, category, locations, code }) => {

  const [cantidad, setCantidad] = useState(0)

  const { addToCard, isInCart } = useContext(CartContext)

  const handleAgregar = () => {
    const newItems = {
      id,
      name,
      price,
      category,
      locations,
      cantidad,
      code,
      img
    }

    if (cantidad > 0) {
      addToCard(newItems)
    }
  }



  return (
    <>
      <div className='container' >

        <div className='highlight-window' id='product-img'><div className='highlight-overlay' id='highlight-overlay'></div></div>
        <div className='window'>
          <div className='main-content'>
            <h2>{locations}</h2>
            <h1>{name}</h1>
            <p className='description' id='description'>
              {description}</p>
            <div className='highlight-window  mobile' id='product-img'>
              <img src={img} alt={name} key={id} />
            </div>



            {isInCart(id) ? <Link to="/cart"><button className='btn-carrito'>IR AL CARRITO</button></Link> :
              <>
                <div className='options'>
                  <ItemCounter cantidad={cantidad} setCantidad={setCantidad} />
                </div>
                <div className='divider'></div>
                <div className='purchase-info'>
                  <p className='prices'>$ {price}</p>
                  <button
                  className='btn-add'
                    onClick={handleAgregar}
                  >ADD TO CART</button>
                </div>
              </>
            }
                <Link to="/category/negra">
                  <div>
                    <button className='btn-history'>SEGUIR COMPRA</button>
                  </div>
                </Link>

          </div>
        </div>
      </div>




    </>
  )
}
