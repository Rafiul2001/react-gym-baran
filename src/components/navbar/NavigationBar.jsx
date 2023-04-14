import React from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'

const NavigationBar = () => {
    return (
        <nav className='container'>
            <div className='logo-container'>
                <img src={ logo } alt="img" />
            </div>
            <ul>
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