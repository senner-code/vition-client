import React from 'react'
import './Main.css'
import Navbar from "./Navbar/Navbar";

const Main = () => {


  return (
    <div className="Main">

      <Navbar/>
      <div className="hero">
        <div className="container hero__container">
            <h1 className="hero__title">Хочешь хорошую жизнь?<br/>Начни копить сегодня!</h1>
            <span className="hero__subtitle">Мы поможем тебе подойти к вопросу <br/>  сохранения финансово грамотно</span>
        </div>
      </div>
    </div>
  )
}

export default Main