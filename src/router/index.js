import Dashboard from "../components/Dashboard/Dashboard";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import Widget from "../components/Dashboard/WidgetList/Widget/Widget";

export const publicRouter = [
  {path: '/login' , component: Login, exact : true},
  {path: '/registration' ,component: Registration , exact: true },
  {path: '/', component: Main, exact: true}
]

export const privateRouter = [
  {path: '/dashboard' , component: Dashboard , exact : true},
  {path: '/dashboard/:id', component: Widget, exact: true}
]
