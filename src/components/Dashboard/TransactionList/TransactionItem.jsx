import React from 'react';

const TransactionItem = (props) => {
  return (
    <div className={'TransactionItem'}>
      <span> {props.value >= 0 ? 'Доход' : 'Расход'}</span>
      <span>{props.value >= 0 ? '+' + props.value : props.value}</span>
      <span>UAH</span>
      <span>{props.time}</span>
    </div>
  );
};

export default TransactionItem;

