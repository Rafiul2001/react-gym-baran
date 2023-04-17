import React from 'react'
import "./details.css"
import { RiArrowRightLine } from 'react-icons/ri'
import { D1, D2, D3 } from '../../assets/index'

const Details = () => {
    return (
        <div className='container'>
            <div className='details'>
                <div className='detail-container'>
                    <div className='detail-image-container'>
                        <img src={D1} alt="D1" />
                    </div>

                    <div className='detail-text'>
                        <h1>Best full body <br />workout to lose fat</h1>
                        <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                        <button className='detail-get-started-btn'><span>Get started</span><RiArrowRightLine size={20} /></button>
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-text'>
                        <h1>Daily morning <br /> workout in home</h1>
                        <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                        <button className='detail-get-started-btn'><span>Get started</span><RiArrowRightLine size={20} /></button>
                    </div>

                    <div className='detail-image-container'>
                        <img src={D2} alt="D2" />
                    </div>
                </div>

                <div className='detail-container'>
                    <div className='detail-image-container'>
                        <img src={D3} alt="D3" />
                    </div>

                    <div className='detail-text'>
                        <h1>How it works?</h1>
                        <ul>
                            <li>The body becomes sick because of rarely exercise</li>
                            <li>Don't give up in order to get a healthy and ideal body</li>
                            <li>Become addicted to the exercise that is given</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details