import './App.css';
import React, { useEffect , useContext} from 'react'
import { Switch, Route , Redirect, Link} from 'react-router-dom'
// import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';
import Login from './Authorization/Login'
import { observer } from 'mobx-react-lite';
import { Context } from '..';



function App() {

  const {store} = useContext(Context)
  useEffect(() => {
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  },[])

  return (
      <div className="App">
        <Navbar/>
        
        <Switch>
          {store.isAuth ? <Redirect to='/'/> : <Route path='/login' component={Login}/>}
        </Switch>
        {store.isAuth ? <Link to= "/">
        <button className="logout" onClick = {() => {
          store.logout()
          
        }}>Выйти</button>
        </Link> : null}
      </div>
  );
}

export default observer(App) ;
