import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar