import React from 'react'
import { CardItem } from './CardItem'
import './cards.css'

export const TeamUs = () => {
    return (
        <>
            <div className='team__us'>
                <div className='about-content'>
                    <h2>THE TEAM</h2>
                    <div className='about-line'></div>
                    <p>The tallent behind the scenes</p>
                </div>
            </div>

            
            <div className='cards'>
            <div className='cards__item__content'>
                <h1>BARTENDER</h1>
                <div></div>
                <p className='item__content__text'>Everything You Want to Know</p>
            </div>
            </div>
            <section>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="/image/team1.jpg"
                        alt="chico en mesa"
                        title="SOPHIE WHITE"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
                        path="/about"
                        />
                        <CardItem 
                        src="/image/team2.jpg"
                        alt="chico en mesa"
                        title="MASON ROBINSON "
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
                        path="/about"
                        />
                        <CardItem 
                        src="/image/team3.jpg"
                        alt="chico en mesa"
                        title="MICAELA RODRIGUEZ"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes."
                        path="/about"
                        />
                    </ul>
                </div>
            </div>
            </section>

        </>
    )
}
