import React from 'react'
import { CardItem } from './CardItem'
import './cards.css'

export const Cards = () => {
    return (
        <div className='cards'>
            <div className='cards__item__content'>
                <h1>Who are we</h1>
                <div></div>
                <p className='item__content__text'>Everything You Want to Know</p>
            </div>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="/image/image1.jpg"
                        alt="chico en mesa"
                        title="STRATEGY AND TIMING"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
                        label="Promocion"
                        path="/about"
                        />
                        <CardItem 
                        src="/image/image2.jpg"
                        alt="chico en mesa"
                        title="LEADERS OF TOMORROW"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
                        label="Promocion"
                        path="/about"
                        />
                        <CardItem 
                        src="/image/image3.jpg"
                        alt="chico en mesa"
                        title="BRAND - CENTERED BUYING"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
                        label="Promocion"
                        path="/about"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
