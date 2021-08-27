import React, {useState, useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../App'
import './Auth.css'
import {Link} from "react-router-dom";
import Input from "../UI/Input";

function Auth(props) {
  const path = props.location.pathname
  const {store} = useContext(Context)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="Auth">

      <div className="container Auth__container ">
        {path === '/account/login' ?
          <div className="Auth__data">
            <div className="Auth__header">
              <h2>Sign in</h2>
            </div>
            <div className="form">
              <div className="form__control error">
                <label>Email</label>
                <Input type={'text'} placeholder={'expample@mail.com'} value={email} setValue={setEmail}/>
                <i className={'fas fa-check-circle'}/>
                <i className={'fas fa-exclamation-circle'}/>
                <small>Error Message</small>
              </div>
              <div className="form__control success">
                <label>Password</label>
                <Input type={'password'} placeholder={'Password'} value={password} setValue={setPassword}/>
                <i className={'fas fa-check-circle'}/>
                <i className={'fas fa-exclamation-circle'}/>
                <small>Error Message</small>
              </div>

              <button onClick={() => store.login(email, password)}>Sign in</button>
              <span>Haven`t account? <Link to={'/account/registration'}>Join us</Link></span>
            </div>

          </div>
          :
          path === '/account/registration' ?
            <div className="Auth__data">
              <div className="Auth__header">
                <h2>Create Account</h2>
              </div>
              <form className="form">
                <div className="form__control">
                  <label>Username</label>
                  <Input type={'text'} placeholder={'Username'} value={username} setValue={setUsername}/>
                  <i className={'fas fa-check-circle'}/>
                  <i className={'fas fa-exclamation-circle'}/>
                  <small>Error Message</small>
                </div>
                <div className="form__control error">
                  <label>Email</label>
                  <Input type={'text'} placeholder={'expample@mail.com'} value={email} setValue={setEmail}/>
                  <i className={'fas fa-check-circle'}/>
                  <i className={'fas fa-exclamation-circle'}/>
                  <small>Error Message</small>
                </div>
                <div className="form__control success">
                  <label>Password</label>
                  <Input type={'password'} placeholder={'Password'} value={password} setValue={setPassword}/>
                  <i className={'fas fa-check-circle'}/>
                  <i className={'fas fa-exclamation-circle'}/>
                  <small>Error Message</small>
                </div>
                <div className="form__control">
                  <label>Repeat Password</label>
                  <Input type={'password'} placeholder={'Password'} value={password} setValue={setPassword}/>
                  <i className={'fas fa-check-circle'}/>
                  <i className={'fas fa-exclamation-circle'}/>
                  <small>Error Message</small>
                </div>

                <button onClick={() => store.registration(email, password, username)}>Registration</button>
                <span>Have account? <Link to={'/account/login'}>Sign in</Link></span>
              </form>

            </div>
            : null
        }
      </div>
    </div>
  )
}

export default observer(Auth)
