import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../..'
import boardService from '../../services/board.service'


const Dashboard = () => {

  const {store} = useContext(Context)

  const [board, setBoard] = useState()

  useEffect(async () => {

    const boardData = await boardService.getBoardbyUserID(store.user.id)

    setBoard(boardData)

  }, [])

  console.log(board);

  return (
    <div className="Dashboard">
      
    </div>
  )

}

export default Dashboard