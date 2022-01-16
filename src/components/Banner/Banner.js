import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
 import "./Banner.css"

export const Banner = ({title}) => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    


    let interval = useRef();

    const startTimer = () =>{
        const countdownDate = new Date('Feb 28 2022 00:00:00').getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24 ));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24 ) / (1000 * 60 *60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 )) ;
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);


            if(distance < 1 ){
                clearInterval(interval.current);
            }else{
                 setTimerDays(days);
                 setTimerHours(hours);
                 setTimerMinutes(minutes);
                 setTimerSeconds(seconds);
            }
        }, 1000)
    } ;

    useEffect(() =>{
        startTimer();
        // return() => {
        //     clearInterval(interval.current);
        // }
    });

    return (
        <section className="banner time-container">
                    <h2>{title}</h2>
            <section className='timer'>
                <div>
                </div>
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p><span>Days</span></p>
                    </section>
                    <span className='timer-points'></span>
                    <section>
                        <p>{timerHours}</p>
                        <p><span>Hours</span></p>
                    </section>
                    <span className='timer-points'></span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><span>Minutes</span></p>
                    </section>
                    <span className='timer-points'></span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><span>Seconds</span></p>
                    </section>
                </div>
            </section>
            <Link to="/contact" className='timer-view'>
                    View More
                </Link>
        </section>
    )
}
