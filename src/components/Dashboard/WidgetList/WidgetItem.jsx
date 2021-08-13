import React from 'react';
import {Link} from "react-router-dom";

const WidgetItem = (props) => {
  return (
    <Link className='WidgetItem' to={`${window.location.pathname}/${props.id}`}>
      <h3>Widget name {props.name}</h3>
    </Link>
  );
};

export default WidgetItem;