import React, {useContext, useEffect, useState} from 'react';
import TransactionService from "../../../services/transaction.service";
import {Context} from "../../App";
import TransactionItem from "./TransactionItem";



const TransactionList = (props) => {

  const {store} = useContext(Context)

  const [transactions, setTransactions] = useState([])


  const loadTransaction = async () => {


    //Что то придумать поумнее

    let transactionList = []


    if (props.match.params.id) {
      transactionList = await TransactionService.getTransactionsByWidget(props.match.params.id)
    }else{
      transactionList = await TransactionService.getTransactionsByUser(store.user.id)
    }

    const transactionElements = transactionList.map((transaction) => {
      return <TransactionItem key={transaction.id} value={transaction.value} description={transaction.description}/>
    })
    setTransactions(...transactionElements)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <div className='Transaction'>

      {transactions}
    </div>
  );
};

export default TransactionList;