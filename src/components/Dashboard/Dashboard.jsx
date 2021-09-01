import {observer} from 'mobx-react-lite'
import React, {useContext, useEffect, useState} from 'react'
import WidgetList from "./WidgetList/WidgetList";
import {Context} from '../App'
import './Dashboard.css'
import boardService from '../../services/board.service'
import TransactionList from "./TransactionList/TransactionList";
import Menu from "./Menu/Menu";


const Dashboard = () => {
  const {store} = useContext(Context)
  const [board, setBoard] = useState(false)
  useEffect(() => {
    boardService.getBoardByUserID(store.user.id).then(result => {
        if(!result){
          boardService.createBoard(store.user.id, 'Dashboard').then(result => {
            setBoard(result.board)
            store.setUser(result.user)
          })
        }else{
          setBoard(result)
        }

      }
    )
  }, [])

  return (
    <div className='Dashboard'>
      {board ?
        <React.Fragment>
          <div className="Dashboard__header"><span>Dashboard</span></div>
          <div className="Dashboard__content">
            <Menu/>
            <div className="Dashboard__data">
              <WidgetList board={board.id}/>
              <TransactionList/>
            </div>
          </div>
        </React.Fragment>
        : null
      }
    </div>
  )
}

export default observer(Dashboard) 