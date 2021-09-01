import React, {useContext, useEffect, useState} from 'react';
import TransactionService from "../../../services/transaction.service";
import {Context} from "../../App";
import TransactionItem from "./TransactionItem";
import {useParams} from "react-router-dom";
import './TransactionList.css'
import CreateTransaction from "./CreateTransaction/CreateTransaction";


const TransactionList = () => {

  const {id} = useParams()

  const {store} = useContext(Context)

  const [transactions, setTransactions] = useState([])
  const [limit, setLimit] = useState(10)
  const [from, setFrom] = useState(0)
  const [pageSize, setPageSize] = useState(false)
  const [newTransaction, setNewTransaction] = useState(false)


  const loadTransaction = async () => {


    //Что то придумать поумнее


    if (id) {
      TransactionService.getTransactionsByWidget(id, from, limit).then(transactionList => {
        const transactionElements = transactionList.map((transaction) => {

          return <TransactionItem key={transaction.id} value={transaction.value} description={transaction.description}
                                  time={String(transaction.time).split('T')[0]}/>
        })
        setTransactions([...transactionElements])
      })
    } else {
      TransactionService.getTransactionsByUser(store.user.id, from, limit).then(transactionList => {
        const transactionElements = transactionList.map((transaction) => {
          return <TransactionItem key={transaction.id} value={transaction.value} description={transaction.description}
                                  time={String(transaction.time).split('T')[0]}/>
        })
        setTransactions([...transactionElements])
      })
    }


  }

  useEffect(() => {
    loadTransaction()
  }, [])

  useEffect(() => {
    loadTransaction()
  }, [pageSize])

  return (
    <div className='Transaction'>
      {
        newTransaction ?
          <CreateTransaction transactions={transactions} new={setTransactions} complete={setNewTransaction}/>
          : null
      }


      <input placeholder={'Введите с какой транзакции начать отсчёт'} value={from}
             onChange={(e) => setFrom(e.target.value)}
      />
      <input placeholder={'Введите последний элемент выборки'} value={limit}
             onChange={(e) => setLimit(e.target.value)}
      />

      <button onClick={() => setPageSize(!pageSize)}>Отсортировать</button>
      <button onClick={() => setNewTransaction(!newTransaction)}>Создать</button>
      <ul className={'TransactionList'}>
        {transactions}
      </ul>

    </div>
  );
};

export default TransactionList;