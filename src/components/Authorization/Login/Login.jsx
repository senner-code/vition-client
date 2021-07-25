import React, { useState , useContext} from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
import './Login.css'
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
    </div>
  )
}

export default observer(Login)
