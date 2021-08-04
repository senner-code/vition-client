import './App.css';
import React, { useEffect, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import Main from './Main/Main';
import Authorization from './Authorization/Authorization';
import Dashboard from './Dashboard/Dashboard';



function App() {

  const { store } = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  return (

    <div className="App">


      <div className="header">
        <Navbar />
        <Switch>

          {store.isAuth ?

            <React.Fragment>
              <Route path='/login' ><Redirect to='/' /></Route>
              <Route path='/registration'><Redirect to='/' /></Route>
            </React.Fragment>

            :

            <React.Fragment>
              <Route exact path='/' component={Main} />
              <Route path='/auth' component={Authorization} />
            </React.Fragment>

          }

          <div className="header__content">

          </div>
        </Switch>

      </div>


      <div className="content">

        {store.isAuth ?
          <React.Fragment>
            <Route exact path='/dashboard' component={Dashboard} />
          </React.Fragment>
          :
          null
        }

      </div>

      <div className="footer">

      </div>

    </div>
  );
}

export default observer(App);
