import React, { useState , useContext} from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../App'
import './Login.css'
import {Link} from "react-router-dom";
function Login() {

  const {store} = useContext(Context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="Login">

      <input type="text"
        onChange ={e => setEmail(e.target.value)}
        value ={email}
        placeholder = 'Email'
      />
      <input type="password"
        onChange ={e => setPassword(e.target.value)}
        value ={password}
        placeholder = 'password'
      />
      <button onClick = {() => store.login(email, password)}>Login</button>
      <Link to={'/registration'}>Registration</Link>
    </div>
  )
}

export default observer(Login)
