import React, {useContext} from 'react';
import {Context} from "../App";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRouter, publicRouter} from "../../router";
import {observer} from "mobx-react-lite";

const Router = () => {
  const {store} = useContext(Context)
  return store.isAuth
    ?
    <Switch>
      {privateRouter.map((route) => {
        return <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
      })}
      <Redirect to={'/dashboard'}/>
    </Switch>
    :
    <Switch>
      { publicRouter.map((route) => {
        return <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
      })}
      <Redirect to={'/'}/>
    </Switch>


};

export default observer(Router);