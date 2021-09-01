import React from 'react';

const TransactionItem = (props) => {
  return (
    <li>
      <ul className={'itemList'}>
        <li>
          {props.value >=0 ? 'Доход': 'Расход'  }
        </li>
        <li>
          {props.value >= 0 ? '+' + props.value : props.value}
        </li>
        <li>
          UAH
        </li>
        <li>
          {props.time}
        </li>
      </ul>
    </li>
  );
};

export default TransactionItem;

