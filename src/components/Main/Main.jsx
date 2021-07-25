import { observer } from 'mobx-react-lite'
import React from 'react'
import './Main.css'

const Main = () => {


  return (
    <div className="Main">
      <div className="Main__title">
        <h1>Monitor your business on real-time dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea est architecto reprehenderit neque maxime.</p>
      </div>
      <div className="Main__content">
      <img src="https://i.ibb.co/z8JR3ZZ/Main-content.png" alt="Main-content" border="0"/>
      </div>
    </div>
  )
}

export default observer(Main)