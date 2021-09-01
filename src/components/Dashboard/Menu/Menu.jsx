import React, {useContext, useState} from 'react';
import {Context} from "../../App";
import './Menu.css'
import {Link} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuList from "./MenuList";
import {observer} from "mobx-react-lite";
const Menu = () => {

  const [activeMenu, setActiveMenu] = useState(false)
  const {store} = useContext(Context)

  const menuList = [
    {to: '/dashboard' , icon: <DashboardIcon/>, text:'Dashboard'},
    {to: '/profile' , icon: <AccountBoxIcon/>, text: 'Profile'}
  ]

  const showMenu = () => {
    return menuList.map((elem,index) => {
      return <MenuList key={index} to={elem.to} icon={elem.icon} func={elem.func} text={activeMenu? elem.text : null}/>
    })
  }

  return (
    activeMenu ?
      <div className={`Menu Menu__active`}
           onMouseOut={() => {
             setActiveMenu(!activeMenu)
           }}>
        {showMenu()}
        <Link to={'/'} onClick={() => {store.logout()}}><ExitToAppIcon/>Logout</Link>
      </div>
      :
      <div className={`Menu`}
           onMouseOver={() => {
             setActiveMenu(!activeMenu)
           }}>
        {showMenu()}
        <Link to={'/'} onClick={() => {store.logout()}}><ExitToAppIcon/></Link>
      </div>
  )
};

export default observer(Menu);