import React, {useContext, useEffect, useState} from 'react';
import TransactionService from "../../../services/transaction.service";
import {Context} from "../../App";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import TransactionItem from "./TransactionItem";
import './TransactionList.css'
import CreateTransaction from "./CreateTransaction/CreateTransaction";
import {observer} from "mobx-react-lite";
import sortTransactions from "../../../services/sort.transactions";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";


const TransactionList = (props) => {

  const {store} = useContext(Context)
  const [transactions, setTransactions] = useState([])
  const [limit, setLimit] = useState(10)
  const [from, setFrom] = useState(0)
  const [activeModal , setActiveModal] = useState(false)
  const [transactionsCount, setTransactionsCount] = useState(0)
  const [pages,setPages] = useState(null)
  const [sortType, setSortType] = useState(null)
  const [dataSortType , setDataSortType] = useState(true)
  const [update, setUpdate] = useState(false)
  const [valueSortType , setValueSortType] = useState(null)


  const loadTransaction = async () => {
    const mapSort = (list) => {
      const tempList = list.map((transaction,index) => {
          return {
            transaction_number: index,
            transaction_id: transaction.id,
            description: transaction.description,
            time:transaction.time,
            value: transaction.value
          }
        }
      )
      setTransactions([...sortTransactions.sortByDate(tempList, true)])
    }
    TransactionService.getTransactionsByUser(store.user.id, from, limit).then(list =>{
        mapSort(list.transactions)
        const count = Number(list.count.count)
        setTransactionsCount(count)
    }

    )
  }



  useEffect(() => {
    if(transactionsCount >= 10){
      console.log('Here')
      const pagesCount = Math.ceil(transactionsCount / 10)
      const uls = []
      for (let i = 0; i < pagesCount; i++) {
        uls[i] = <li key={i} onClick={() => {
          setLimit(10 * (i + 1))
          setFrom(10 * i)
        }}>{i + 1}</li>
      }
      setPages(uls)
    }
  },[transactionsCount,update])


  useEffect(() => {
    loadTransaction()
  }, [])

  useEffect(() => {
    loadTransaction()
  },[limit])

  useEffect(() => {
    setTransactions([...sortTransactions.sortByDate(transactions, dataSortType)])
  },[dataSortType,update])

  useEffect(() => {
    setTransactions([...sortTransactions.sortByValue(transactions, valueSortType)])
  },[valueSortType])

  useEffect(() => {
    setTransactions([...sortTransactions.sortByType(transactions, sortType)])
  },[sortType])

  return (
      <div className={'TransactionList'}>

        <div className="changeList">
          <div className="TransactionChange TransactionType"
               onClick={() => setSortType(sortType === null ? true : !sortType)}>
            Тип
            {sortType === null ? null
            : sortType === true ? <ArrowDropUpIcon className={'arrowType'}/> : <ArrowDropDownIcon className={'arrowType'}/>
            }
          </div>
          <div className="TransactionChange TransactionValue"
               onClick={() => setValueSortType(valueSortType === null ? true : !valueSortType)}>
            Сумма
            {valueSortType === null ? null
              : valueSortType === false ? <ArrowDropUpIcon className={'arrowType'}/> : <ArrowDropDownIcon className={'arrowType'}/>
            }
          </div>
          <div className="TransactionChange TransactionCurrency">Валюта</div>
          <div className="TransactionChange TransactionTime">

            <span onClick={() => setDataSortType(!dataSortType)}>
              Время
              {
                dataSortType === false ? <ArrowDropUpIcon className={'arrowType'}/> : <ArrowDropDownIcon className={'arrowType'}/>
              }
            </span>

            <AddIcon fontSize={'large'} className={'createTransaction'} onClick={() => setActiveModal(true)}/>

          </div>

        </div>
        <div className="list">
          {transactions.map(transaction =>
            <TransactionItem
              key={transaction.id}
              value={transaction.value}
              description={transaction.description}
              time={String(transaction.time).split('T')[0]}/>
          )}
        </div>
        {activeModal ?
          <ModalWindow active={activeModal} setActive={setActiveModal}>
            <CreateTransaction
              board_id={props.board.id}
              transactions={transactions}
              setTransactions={setTransactions}
              update={setUpdate}
              updateStatus={update}
              setActive={setActiveModal}
            />
          </ModalWindow>
          : null
        }
        <ul className={'page__list'}>
          {pages}
        </ul>
      </div>
  );
};

export default observer(TransactionList);