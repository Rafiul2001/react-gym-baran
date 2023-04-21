import React, { useState } from 'react'
import './navbar.css'
import { Logo } from '../../assets/index'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'
import { UseMediaQuery } from '../index'

const NavigationBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const isSize870 = UseMediaQuery('(min-width:870px)');

    return (
        <div className='container'>
            <nav>
                <div className='logo-container'>
                    <img src={Logo} alt="img" />
                </div>
                {
                    isSize870 ?
                        <ul className='navigation-links'>
                            <li className='navigation-link'>Home</li>
                            <li className='navigation-link'>Program</li>
                            <li className='navigation-link'>Blog</li>
                            <li className='navigation-link'>About us</li>
                            <li><button className='login-btn'>Log in</button></li>
                        </ul> :
                        toggleMenu ?
                            <div className='side-menu'>
                                <ul className='navigation-links'>
                                    <li className='navigation-link'>Home</li>
                                    <li className='navigation-link'>Program</li>
                                    <li className='navigation-link'>Blog</li>
                                    <li className='navigation-link'>About us</li>
                                    <li><button className='login-btn'>Log in</button></li>
                                </ul>
                            </div> : null
                }
                <div className='menuIcon'>
                    {
                        toggleMenu ?
                        <RiCloseFill onClick={() => setToggleMenu(false)} size={40} />
                        :
                        <RiMenuFill onClick={() => setToggleMenu(true)} size={40} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar;