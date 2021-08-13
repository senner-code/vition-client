import {observer} from 'mobx-react-lite'
import React, {useContext, useEffect, useState} from 'react'
import WidgetList from "./WidgetList/WidgetList";
import {Context} from '../App'
import boardService from '../../services/board.service'
import CreateBoard from "./CreateBoard";


const Dashboard = () => {
  const {store} = useContext(Context)
  const [board, setBoard] = useState(false)
  useEffect(() => {
    boardService.getBoardbyUserID(store.user.id).then(result => setBoard(result))
  }, [])

  return (
    <div className='Dashboard'>
      {board
        ?
        <React.Fragment>
          Board - {board.name}
          <WidgetList board={board.id}/>
        </React.Fragment>
        : <CreateBoard new={setBoard}/>
      }
    </div>
  )
}

export default observer(Dashboard) 