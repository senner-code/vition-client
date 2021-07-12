import React, { useState , useContext} from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
function Login() {

  const {store} = useContext(Context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  return (
    <div>
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
      <input type="text"
        onChange ={e => setUsername(e.target.value)}
        value ={username}
        placeholder = 'username'
      />


      <button onClick = {() => store.registration(email, password, username)}>Registration</button>
      <button onClick = {() => store.login(email, password)}>Login</button>
      
    </div>
  )
}

export default observer(Login)
