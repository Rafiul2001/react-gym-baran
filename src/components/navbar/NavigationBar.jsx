import React from 'react'
import './navbar.css'
import { Logo } from '../../assets/index'

const NavigationBar = () => {
    return (
        <div className='container'>
            <nav>
                <div className='logo-container'>
                    <img src={Logo} alt="img" />
                </div>
                <ul className='navigation-links'>
                    <li className='navigation-link'>Home</li>
                    <li className='navigation-link'>Program</li>
                    <li className='navigation-link'>Blog</li>
                    <li className='navigation-link'>About us</li>
                    <li><button className='login-btn'>Log in</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar;