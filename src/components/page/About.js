import React from 'react'
import '../../index.css'
import { AboutUs } from '../Banner/AboutUs'
import { Cards } from '../Banner/Cards'
import { Footer } from '../Banner/Footer'
import { Ours } from '../Banner/Ours'

export const About = () => {
    return (
        <div>
            <AboutUs/>
            <Cards/>
            <Ours/>
            <Footer/>
        </div>
    )
}
