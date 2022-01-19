import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FooterItems } from './FooterItems'

export const Footer = () => {
    return (
        <>
            <footer className='footer_body'>
                <div className='footer '>
                    <div className='container__footer'>

                        <div className='sec aboutus'>
                            <h2 className='footer__title'>Our Story</h2>
                            <p className='footer__text'>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet. Aeneansollicitudin, lorem quis bibendum auctonisi elit consequat lorem ipsum.</p>
                            <ul className='footer__meeting'>
                                <li>
                                    <i className="far fa-clock"></i><Link to="/" className='footer__links links'>Mon- Sat 8:00 - 18:00</Link>
                                </li>
                                <li>
                                    <i className="far fa-clock"></i> <Link to="/" className='footer__links links'>Sunday Closed</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='sec links'>
                            <h2 className='footer__title'>Useful links</h2>
                            <ul>
                                <li>
                                    <Link to="/" className='footer__links'>Engaging, Purposeful, and Creative</Link>
                                </li>
                                <li>
                                    <Link to="/" className='footer__links'>Extroadinary Life Events</Link>
                                </li>
                                <li>
                                    <Link to="/" className='footer__links'>Design Your Perfect Event</Link>
                                </li>
                                <li>
                                    <Link to="/" className='footer__links'>Connect Your Worlds</Link>
                                </li>
                                <li>
                                    <Link to="/" className='footer__links'>Improving Workplace Productivity</Link>
                                </li>
                                <li>
                                    <Link to="/" className='footer__links'>Leading Organizations</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='sec post'>
                            <h2 className='footer__title'>LATEST POSTS</h2>
                            <ul>
                                <li>
                                    <div className='footer__posts'>
                                            <FooterItems
                                            src="/image/footer1.jpg"
                                            alt="imagen de footer"
                                            className='footer__img'
                                            />
                                        <div className='footer__content__links'>
                                            <Link to="/" className='footer__links footer__links-modifier'>Francisco Haynes</Link >
                                            <Link to="/" className='footer__links'>10/02/2015</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='footer__posts'>
                                        <FooterItems
                                        src="/image/footer2.jpg"
                                        alt="imagen de footer"
                                        className='footer__img'
                                        />
                                        <div className='footer__content__links'>
                                            <Link to="/" className='footer__links footer__links-modifier '>The Art Success</Link >
                                            <Link to="/" className='footer__links'>32/12/2018</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='footer__posts'>
                                        <FooterItems
                                        src="/image/footer3.jpg"
                                        alt="imagen de footer"
                                        className='footer__img'
                                        />
                                        <div  className='footer__content__links'>
                                            <Link to="/" className='footer__links footer__links-modifier'>Cooking is an Art</Link>
                                            <Link to="/" className='footer__links'>02/12/2016</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='sec contact'>
                            <h2 className='footer__title'>Find Us</h2>
                            <ul>
                                <li>
                                    <span><i className="fas fa-map-pin"></i></span>
                                    <Link to="/" className='footer__direction footer__links'>Phoenixviille, PA 1953,USA</Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-mobile-alt"></i></span>
                                    <Link to="/" className='footer__links'>+54 11-136-134</Link>
                                </li>
                                <li>
                                    <span><i className="far fa-envelope-open"></i></span>
                                    <Link to="/" className='footer__links'>Exampĺe@gmail.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='footer__container__copy'>
                        <div className='footer__copy'>
                            <div>
                                <h4>CerveMark</h4>
                            </div>
                            <div>
                                <p className='footer__copy__name'>&#169; Brayann Farfan, All Rights Reserved, Clone 2022</p>
                            </div>
                            <div className='footer__icons'>
                                <div>
                                    <p className='footer__follow'>Follow us</p>
                                </div>
                                <div className='footer__items__icons'>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                </div>
        </>
    )
}
