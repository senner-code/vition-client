import React from 'react';
import {Link} from "react-router-dom";

const WidgetItem = (props) => {
  return (
      <Link className={'WidgetItem'} to={`${window.location.pathname}/${props.id}`}>
        <span>{props.name}</span>
      </Link>
  );
};

export default WidgetItem;