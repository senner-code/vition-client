import React, {useContext, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../App'
import './Auth.css'
import {Link} from "react-router-dom";
import Input from "../UI/Input";

function Auth(props) {
  const path = props.location.pathname
  const {store} = useContext(Context)
  const [error, setError] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleReset = () => {
    setError(null)
    setUsername('')
    setPassword('')
    setEmail('')
  }

  async function handleRegistration() {
    const data = await store.registration(email, password, username)
    setError(data)
  }

  async function handleLogin() {
    setError(await store.login(email, password))
  }

  return (
    <div className="Auth">

      <div className="container Auth__container ">
        {path === '/account/login' ?
          <div className="Auth__data">
            <div className="Auth__header">
              <h2>Sign in</h2>
            </div>
            <div className="form">
              <div className={`form__control ${error ? 'error' : null}`}>
                <label>Email</label>
                <Input type={'text'} placeholder={'expample@mail.com'} value={email} setValue={setEmail}/>
                <i className={'fas fa-check-circle'}/>
                <i className={'fas fa-exclamation-circle'}/>
              </div>
              <div className={`form__control ${error ? 'error' : null}`}>
                <label>Password</label>
                <Input type={'password'} placeholder={'Password'} value={password} setValue={setPassword}/>
                <i className={'fas fa-check-circle'}/>
                <i className={'fas fa-exclamation-circle'}/>
                <small>{error}</small>
              </div>

              <button onClick={() => handleLogin()}>Sign in</button>
              <span>Haven`t account? <Link to={'/account/registration'} onClick={() => handleReset()}>Join us</Link></span>
            </div>

          </div>
          :
          path === '/account/registration' ?
            <div className="Auth__data">
              <div className="Auth__header">
                <h2>Create Account</h2>
              </div>
              <div className="form">

                <div className={`form__control ${error ? error.error.indexOf('username') >= 0 ? 'error' : null : null}`}>
                  <label>Username</label>
                  <Input type={'text'} placeholder={'Username'} value={username} setValue={setUsername}/>
                  <i className={'fas fa-check-circle'}/>
                  <i className={'fas fa-exclamation-circle'}/>
                  <small>{error ? error.error.indexOf('username') >= 0 ? 'Неправильный Логин' : null : null}</small>
                </div>

                <div className={`form__control ${error ? error.error.indexOf('email') >= 0? 'error' : null : null}`}>
                  <label>Email</label>
                  <Input type={'text'} placeholder={'expample@mail.com'} value={email} setValue={setEmail}/>
                  <i className={'fas fa-check-circle'}/>
                  <i className={'fas fa-exclamation-circle'}/>
                  <small>{error ? error.error.indexOf('email') >= 0? 'Неправильный email' : null : null}</small>
                </div>

                <div className={`form__control ${error ? error.error.indexOf('password') >= 0? 'error' : null : null}`}>

                  <label>Password</label>
                  <Input type={'password'} placeholder={'Password'} value={password} setValue={setPassword}/>
                  <i className={'fas fa-check-circle'}/>
                  <i className={'fas fa-exclamation-circle'}/>
                  <small>{error ? error.error.indexOf('password') >= 0? 'Неправильный пароль' : null : null}</small>

                </div>

                <button onClick={() => handleRegistration()}>Registration</button>
                <span>Have account? <Link to={'/account/login'} onClick={() => handleReset()}>Sign in</Link></span>
              </div>

            </div>
            : null
        }
      </div>
    </div>
  )
}

export default observer(Auth)
