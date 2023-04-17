import React from 'react'
import './footer.css'
import { F1, F2, Logo2 } from '../../assets/index'

const Footer = () => {
  return (
    <div id='footer'>
      <img className='footer-background-img' src={F2} alt="F2" />
      <img className='footer-background-img' src={F2} alt="F2" />
      <div className='container'>
        <div className='footer'>
          <div className='footer-info'>
            <div className='footer-logo'>
              <img src={Logo2} alt="F1" />
            </div>
            <p>We take care of your health with <br /> regular and fun exercise</p>
            <ul>
              <li><img src={F1} alt="F2" /></li>
              <li><img src={F1} alt="F2" /></li>
              <li><img src={F1} alt="F2" /></li>
              <li><img src={F1} alt="F2" /></li>
              <li><img src={F1} alt="F2" /></li>
            </ul>
          </div>

          <div className='footer-links'>
            <ul>
              <li>Program</li>
              <li>Workout</li>
              <li>Gym</li>
              <li>Cardio</li>
              <li>Zumba</li>
            </ul>

            <ul>
              <li>Blog</li>
              <li>Daily stretch</li>
              <li>Daily workout</li>
            </ul>

            <ul>
              <li>About Us</li>
              <li>Support</li>
              <li>Contact</li>
              <li>Address</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer