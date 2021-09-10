import React, {useContext, useState} from 'react';
import SelectCategory from "./SelectCategory";
import TransactionService from "../../../../services/transaction.service";
import {Context} from "../../../App";
import ChooseTime from "../ChooseTime";
import './CreateTransaction.css'
import Input from "../../../UI/Input";

const CreateTransaction = ({setActive,updateStatus,transactions,update,board_id,setTransactions}) => {

  const {store} = useContext(Context)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState()
  const [transType, setTransType] = useState('')

  const [time , setTime] = useState('')


  return (
    <div className='CreateTransaction'>

      <label>Сумма</label>
      <Input type={'text'} value={value} placeholder={'Введите Value'} setValue={setValue}/>
      <label>Описание</label>
      <Input type={'text'} value={description} placeholder={'Введите Description'} setValue={setDescription}/>
      <label>Тип Транзакции</label>
      <select name="transaction_type" defaultValue={"0"} onChange={e => {
        setTransType(e.target.value)
      }}>
        <option value="0" disabled >Выберите тип транзакции</option>
        <option value="+">Доход</option>
        <option value="-">Расход</option>
      </select>
      <label>Категория</label>
      <SelectCategory selected={selected} select={setSelected} board_id={board_id}/>
      <label>Дата</label>
      <ChooseTime setDate={setTime}/>
      <button onClick={() => {
        TransactionService.createTransaction(Number(transType+value), time || null, description, selected, store.user.id)
          .then((transaction,index) => {
            setTransactions([...transactions,
              {
                transaction_number: index,
                transaction_id: transaction.id,
                description: transaction.description,
                time:transaction.time,
                value: transaction.value
              }])
            setActive(false)
            update(!updateStatus)
          })
      }}>Создать
      </button>
    </div>
  );
};

export default CreateTransaction;