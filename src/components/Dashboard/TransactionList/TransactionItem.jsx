import React from 'react';

const TransactionItem = (props) => {
  return (
    <li>
      Value: {props.value}
      Description: {props.description}
    </li>
  );
};

export default TransactionItem;

