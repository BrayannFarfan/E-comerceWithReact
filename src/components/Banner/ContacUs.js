import React from "react"
import './Contact.css'


export const ContacUs = () => {
    return (
        <>
            <div className="contact__us">
                <div className='about-content'>
                    <h2>Contact us</h2>
                    <div className='about-line'></div>
                    <p className="about__text">We’d love to hear from You</p>
                </div>
            </div>
            
            <section className="Contact__container">
                <div className="contact__content">
                    <div className="contact__title">
                        <h2>GET IN TOUCH</h2>
                    </div>
                    <div className="contact__text">
                        <p className="contact__text_item">Lorem ipsum dolor sit amet, repudiare inciderint referrentur qui ei, sit apeirian detraxit mnesarchum. Eos nostro vivendo consulatu.</p>
                    </div>
                    <div className="contact__direction">
                        <div className="contact__direction__item">
                            <h6>PHONES: </h6>
                            <p>+1135626659</p>
                        </div>
                        <div className="contact__direction__item">
                            <h6>E-MAILS:</h6>
                            <p>+CerveMark@example.com</p>
                        </div>
                        <div className="contact__direction__item">
                            <h6>ADDRES: </h6>
                            <p>LA, California 3265 NY</p>
                        </div>
                        <div className="contact__direction__item">
                            <h6>FOLLOW:</h6>
                            <div className="contact__icons">
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="forms__container">
                    <form className="forms__control">
                        <div>
                            <input className="forms__input" type="text" placeholder="Name"/>
                        </div>
                        <div>
                            <input className="forms__input" type="text" placeholder="Last Name"/>
                        </div>
                        <div>
                            <input className="forms__input" type="email" placeholder="E-mail"/>
                        </div>
                        
                            <textarea className="form__textarea" placeholder="Messege...."></textarea>
                            <input type="submit" className="form__btn"/>
                    </form>
                </div>

            </section>
        </>
    )
}
