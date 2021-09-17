import {observer} from 'mobx-react-lite'
import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../App'
import './Dashboard.css'
import boardService from '../../services/board.service'
import TransactionList from "./TransactionList/TransactionList";
import Menu from "./Menu/Menu";
import DateGraph from "./DateGraph/DateGraph";
import InfoTab from "./InfoTab/InfoTab";


const Dashboard = () => {
  const {store} = useContext(Context)
  const [board, setBoard] = useState(false)

  useEffect(() => {
    boardService.getBoardByUserID(store.user.id).then(board => {
        if(!board){
          boardService.createBoard(store.user.id, 'Dashboard').then(newBoard => {
            setBoard(newBoard)
          })
        }else{
          setBoard(board)
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
              <DateGraph user_id={store.user.id}/>
              <InfoTab board_id={board.id}/>
              <TransactionList board={board}/>
            </div>
          </div>
        </React.Fragment>
        : null
      }
    </div>
  )
}

export default observer(Dashboard) 