import React from 'react'
import './Footer.css'

export const FooterItems = (props) => {
    return (
        <div>
            <div className='footer__contain__img'>
                <img src={props.src}  alt={props.alt} className='footer__img'/>
            </div>
        </div>
    )
}
