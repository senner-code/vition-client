import './App.css';
import React, {useEffect, createContext} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {observer} from 'mobx-react-lite';
import Store from '../store/store';
import Router from "./Router/Router";


const store = new Store()

export const Context = createContext(store)


function App() {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  return (
    <div className="App">
      <Context.Provider value = {{
        store
      }}>
        <BrowserRouter>

          <Router/>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default observer(App);
