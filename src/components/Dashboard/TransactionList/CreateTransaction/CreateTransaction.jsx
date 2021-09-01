import React, {useContext, useState} from 'react';
import SelectWidget from "./SelectWidget";
import TransactionService from "../../../../services/transaction.service";
import {Context} from "../../../App";
import TransactionItem from "../TransactionItem";
import ChooseTime from "../ChooseTime";
const CreateTransaction = (props) => {

  const {store} = useContext(Context)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState()
  const [transType, setTransType] = useState('')

  const [time , setTime] = useState('')


  return (
    <div className='newTransaction'>

      <input type={'text'} value={value} placeholder={'Введите Value'} onChange={(event => {
        setValue(event.target.value)
      })}/>
      <input type={'text'} value={description} placeholder={'Введите Description'} onChange={(e => {
        setDescription(e.target.value)
      })}/>
      <select name="transaction_type" defaultValue={"0"} onChange={e => {
        setTransType(e.target.value)
      }}>
        <option value="0" disabled >Выберите тип транзакции</option>
        <option value="+">Доход</option>
        <option value="-">Расход</option>
      </select>
      <SelectWidget select={setSelected}/>
      <ChooseTime setDate={setTime}/>
      <button onClick={() => {
        TransactionService.createTransaction(Number(transType+value), time || null, description, selected, store.user.id)
          .then(transaction => {
            props.new([...props.transactions,
              <TransactionItem key={transaction.id} value={transaction.value} description={transaction.description} time={transaction.time.split('T')[0]}/>])
            props.complete(false)
          })
      }}>Создать
      </button>
    </div>
  );
};

export default CreateTransaction;