import React from 'react'
import "./testimonials.css"
import { T1 } from '../../assets/index'

const Testimonials = () => {
    return (
        <div className='container'>
            <div className='testimonials'>
                <h1>Testimonials</h1>

                <div className='testimonials-contents'>
                    <div className='testimonials-content'>
                        <p>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</p>
                        <div className='testimonials-profile'>
                            <div className='testimonials-profile-pic'>
                                <img src={T1} alt="T1" />
                            </div>
                            <div className='testimonial-profile-text'>
                                <h4>Suketi Mantapo</h4>
                                <p>Designer Graphic</p>
                            </div>
                        </div>
                    </div>

                    <div className='testimonials-content'>
                        <p>exercise used to be a boring thing for me, but after following the gymbaran I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.</p>
                        <div className='testimonials-profile'>
                            <div className='testimonials-profile-pic'>
                                <img src={T1} alt="T1" />
                            </div>
                            <div className='testimonial-profile-text'>
                                <h4>Ada Apose</h4>
                                <p>Designer Graphic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials