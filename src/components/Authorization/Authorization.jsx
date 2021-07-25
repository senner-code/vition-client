import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './Authorization.css'
import Login from './Login/Login'
import Registration from './Registration/Registration'
const Authorization = () => {

  useEffect(() => {

  }, [])

  return (
    <div className="Authorization">

      <div className="auth">
        <Route exact path='/auth' component={Login} />
        <Route exact path='/auth/registration' component={Registration} />
      </div>
      <div className="auth-image">
        <div className="blur">

        </div>
      </div>



    </div>
  )


}

export default Authorization