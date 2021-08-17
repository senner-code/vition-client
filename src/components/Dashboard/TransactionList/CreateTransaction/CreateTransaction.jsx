import React, {useContext, useState} from 'react';
import SelectWidget from "./SelectWidget";
import TransactionService from "../../../../services/transaction.service";
import {Context} from "../../../App";
import TransactionItem from "../TransactionItem";

const CreateTransaction = (props) => {

  const {store} = useContext(Context)

  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)
  const [selected, setSelected] = useState()

  const time = 0


  return (
    <div className='newTransaction'>
      <input type={'text'} value={value} placeholder={'Введите Value'} onChange={(event => {
        setValue(event.target.value)
      })}/>
      <input type={'text'} value={description} placeholder={'Введите Description'} onChange={(event => {
        setDescription(event.target.value)
      })}/>
      <SelectWidget select={setSelected}/>
      <button onClick={() => {
        console.log(selected)
        TransactionService.createTransaction(value, time || null, description, selected, store.user.id)
          .then(transaction => {
            props.new([...props.transactions,
              <TransactionItem key={transaction.id} value={transaction.value} description={transaction.description}/>])
          })
      }}>Создать
      </button>
    </div>
  );
};

export default CreateTransaction;