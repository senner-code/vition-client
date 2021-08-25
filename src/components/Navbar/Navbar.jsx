import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="container Navbar__container">
        <Link to="/">Vition</Link>
        <Link to="/auth">Join us</Link>
      </div>
    </div>
  )
}

export default Navbar