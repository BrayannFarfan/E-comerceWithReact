import React from 'react'
import { Link } from 'react-router-dom'
import './OurStyle.css';

export const Ours = () => {
    return (
        <>
            <section className='container__story'>
                <div className='container__story__one'>
                    <h5 className='story__one__title'>Our story</h5>
                    <div></div>
                    <h6 className='story__one__slogan'>We aim to inspire</h6>
                    <p className='story__one__text'>Lorem ipsum dolor sit amet, repudiare inciderint referrentur qui ei, sit apeirian detraxit mnesarchum et. Eos nostro vivendo consulatu ea, purto posse quo at. Elit reprehendunt ius an posse facilis quaerendum.</p>
                    <Link to="/" className='story__links'>
                        View more
                    </Link>
                </div>
                <div className='container__story__two'></div>
            </section>
        </>
    )
}
