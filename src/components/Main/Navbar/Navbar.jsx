import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="container Navbar__container">
        <Link className={'Navbar__logo'} to="/">Vition</Link>
        <Link className={'Navbar__login'} to="/account/login">Join us</Link>
      </div>
    </div>
  )
}

export default Navbar