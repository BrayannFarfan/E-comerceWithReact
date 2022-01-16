import React from 'react'
import '../../index.css'
import { AboutUs } from '../Banner/AboutUs'
import { Cards } from '../Banner/Cards'
import { Ours } from '../Banner/Ours'

export const About = () => {
    return (
        <div>
            <AboutUs/>
            <Cards/>
            <Ours/>
        </div>
    )
}
