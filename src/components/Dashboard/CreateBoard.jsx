import React, {useContext, useState} from 'react';
import boardService from "../../services/board.service";
import {Context} from "../App"
import {observer} from "mobx-react-lite";

const CreateBoard = (props) => {
  const {store} = useContext(Context)
  const [name, setName] = useState('')

  return (
    <div className='CreateBoard'>
      <input type="text"
             onChange={e => setName(e.target.value)}
             value={name}
             placeholder='Enter name..'
      />
      <button onClick={() => {
        boardService.createBoard(store.user.id, name).then(data => {
          if (data.user) {
            store.setUser(data.user)
            props.new(data.board)
            setName('')
          }
        })

      }}>Create
      </button>
    </div>
  );
};

export default observer(CreateBoard);