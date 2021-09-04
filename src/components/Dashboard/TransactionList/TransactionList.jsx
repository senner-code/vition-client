import React, {useContext, useEffect, useState} from 'react';
import TransactionService from "../../../services/transaction.service";
import {Context} from "../../App";
import TransactionItem from "./TransactionItem";
import {useParams} from "react-router-dom";
import './TransactionList.css'
import CreateTransaction from "./CreateTransaction/CreateTransaction";
import {observer} from "mobx-react-lite";
import sortTransactions from "../../../sort.transactions";


const TransactionList = () => {

  const {id} = useParams()

  const {store} = useContext(Context)

  const [transactions, setTransactions] = useState([])
  const [limit, setLimit] = useState(10)
  const [from, setFrom] = useState(0)
  const [pageSize, setPageSize] = useState(false)
  const [newTransaction, setNewTransaction] = useState(false)
  const [sortType, setSortType] = useState(null)
  const [dataSortType , setDataSortType] = useState(true)
  const [valueSortType , setValueSortType] = useState(null)


  const loadTransaction = async () => {
    const mapSort = (list) => {
      setTransactions([...list.map((transaction,index) => {
        console.log('Time - ', transaction.time)
          return {
            transaction_number: index,
            transaction_id: transaction.id,
            description: transaction.description,
            time:transaction.time,
            value: transaction.value
          }
        }
      )])
    }
    //Что то придумать поумнее


    if (id) {
      TransactionService.getTransactionsByWidget(id, from, limit).then(list => {
        mapSort(list)
      })
    } else {
      TransactionService.getTransactionsByUser(store.user.id, from, limit).then(list =>
        mapSort(list)
      )
    }
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  useEffect(() => {
    loadTransaction()
  }, [pageSize])
  useEffect(() => {
    setTransactions([...sortTransactions.sortByDate(transactions, dataSortType)])
  },[dataSortType])

  useEffect(() => {
    setTransactions([...sortTransactions.sortByValue(transactions, valueSortType)])
  },[valueSortType])

  useEffect(() => {
    setTransactions([...sortTransactions.sortByType(transactions, sortType)])
  },[sortType])

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

      <button onClick={() => setPageSize(!pageSize)}>Добавить</button>
      <button onClick={() => setDataSortType(!dataSortType)}>Отсортировать по дате</button>
      <button onClick={() => setValueSortType(valueSortType === null ? true : !valueSortType)}>Отсортировать по сумме</button>
      <button onClick={() => setSortType(sortType === null ? true : !sortType)}>Отсортировать по типу транзакции</button>
      <button onClick={() => setNewTransaction(!newTransaction)}>Создать</button>
      <ul className={'TransactionList'}>
        {transactions.map(transaction =>
           <TransactionItem
            key={transaction.id}
            value={transaction.value}
            description={transaction.description}
            time={String(transaction.time).split('T')[0]}/>
        )}
      </ul>

    </div>
  );
};

export default observer(TransactionList);