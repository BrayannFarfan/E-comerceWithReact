import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'

export const CardItem = (props) => {
    return (
        <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt={props.alt} className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__title'>{props.title}</h5>
                    <p className='cards__item__text'>{props.text}</p>
                </div>
            </Link>
        </li> 
        </>
    )
}
