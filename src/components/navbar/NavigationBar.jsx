import React from 'react'
import './navbar.css'
import Logo from '../../assets/index'

const NavigationBar = () => {
    return (
        <nav className='container'>
            <div className='logo-container'>
                <img src={ Logo } alt="img" />
            </div>
            <ul className='navigation-links'>
                <li>Home</li>
                <li>Program</li>
                <li>Blog</li>
                <li>About us</li>
            </ul>
            <div className='login-btns'>
                <button>Log in</button>
            </div>
        </nav>
    )
}

export default NavigationBar;