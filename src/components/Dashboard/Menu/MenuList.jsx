import React from 'react';
import {Link} from "react-router-dom";

const MenuList = (props) => {
  return (
    <Link to={props.to}>{props.icon}{props.text}</Link>
  );
};

export default MenuList;