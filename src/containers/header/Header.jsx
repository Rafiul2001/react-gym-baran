import React from 'react'
import './header.css'
import { NavigationBar, HeaderText } from '../../components/index'

const Header = () => {
  return (
    <div id='header'>
      <NavigationBar />
      <HeaderText />
    </div>
  )
}

export default Header