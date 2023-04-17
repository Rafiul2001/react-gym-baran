import React from 'react'
import "./headerText.css"
import { B1, B2, B3, B4, g1, O1, O2, O3 } from '../../assets/index'
import { RiArrowRightSLine, RiPlayCircleFill, RiArrowRightLine } from 'react-icons/ri'

const HeaderText = () => {
    return (
        <div className='container'>
            <div className='header-text'>
                <div className='header-text-container'>
                    <h1>Healthy in side <span>fresh</span> out side</h1>
                    <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>

                    <div className='header-text-btns'>
                        <button className='get-started-btn'>
                            <span>Get started</span>
                            <RiArrowRightSLine size={26} />
                        </button>

                        <button className='learn-more-btn'>
                            <RiPlayCircleFill size={26} />
                            <span>Learn more</span>
                        </button>
                    </div>
                    <h3>Brands:</h3>
                    <div className='brands-name'>
                        <div className='brand-image-container'>
                            <img src={B1} alt="B1" />
                        </div>

                        <div className='brand-image-container'>
                            <img src={B2} alt="B2" />
                        </div>

                        <div className='brand-image-container'>
                            <img src={B3} alt="B3" />
                        </div>

                        <div className='brand-image-container'>
                            <img src={B4} alt="B4" />
                        </div>
                    </div>
                </div>

                <div className='header-image-container'>
                    <img src={g1} alt="G1" />
                </div>
            </div>
            <div className='header-bottom-text'>
                <h1>Healthy in side fresh out side</h1>
                <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
            </div>
            <div className='outcomes'>
                <div className='outcome'>
                    <div className='outcome-image-container'>
                        <img src={O1} alt="O1" />
                    </div>
                    <div className='outcome-text'>
                        <h3>Get that 11 line in 30 days</h3>
                        <button className='outcome-learn-more-btn'>
                            <span>Learn more</span>
                            <RiArrowRightLine color='#FFFFFF' size={18}/>
                        </button>
                    </div>
                </div>

                <div className='outcome'>
                    <div className='outcome-image-container'>
                        <img src={O2} alt="O2" />
                    </div>
                    <div className='outcome-text'>
                        <h3>14 Days sherd challenge</h3>
                        <button className='outcome-learn-more-btn'>
                            <span>Learn more</span>
                            <RiArrowRightLine color='#FFFFFF' size={18}/>
                        </button>
                    </div>
                </div>

                <div className='outcome'>
                    <div className='outcome-image-container'>
                        <img src={O3} alt="O3" />
                    </div>
                    <div className='outcome-text'>
                        <h3>Get flat belly in 30 days</h3>
                        <button className='outcome-learn-more-btn'>
                            <span>Learn more</span>
                            <RiArrowRightLine color='#FFFFFF' size={18}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderText