import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <div id='main_navbar'>
      <NavLink exact className='d'to='/Login'>Login</NavLink>
      <NavLink exact className='d'to='/HOME'>Home</NavLink>
      <NavLink exact className='d'to='/Contact'>Contact</NavLink>
      <NavLink exact className='d'to='/ABOUT'>About</NavLink>
    </div>
  )
}

export default Menu
