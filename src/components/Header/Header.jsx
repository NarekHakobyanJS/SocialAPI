import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div>
            <h2>Social Api</h2>
        </div>
        <nav>
            <NavLink to='/'>Home Page</NavLink>
            <NavLink to='/users'>Users Page</NavLink>
        </nav>
    </header>
  )
}

export default Header