import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../..'
import './Navbar.css'

const Navbar = () => {

  const { store } = useContext(Context)


  return (
    <div className="Navbar">

      

      {store.isAuth
        ?

        <div className="Navbar-auth" >
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to='/'
            onClick={() => {
              store.logout()
            }}>Выйти</Link>

        </div>
        
        :
        
        <div className="Navbar-auth">
          <Link to="/">Vition</Link>
          <Link to="/auth">Join us</Link>
        </div>}

    </div>
  )
}

export default Navbar