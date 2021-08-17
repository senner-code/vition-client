import {observer} from 'mobx-react-lite'
import React, {useContext, useEffect, useState} from 'react'
import './WidgetList.css'
import WidgetService from "../../../services/widget.service";
import CreateWidget from "./CreateWidget/CreateWidget";
import WidgetItem from "./WidgetItem";
import {Context} from "../../App";


const WidgetList = (props) => {
  const [widgets, setWidgets] = useState([])
  const {store} = useContext(Context)

  const getWidgets = async () => {
    WidgetService.getWidgets(props.board).then(widgetsList => {
      if(widgetsList){

        store.setWidgetDataList(widgetsList)

        const widgetComponentList = widgetsList.map((widget) => {
          return <WidgetItem key={widget.id} name={widget.name} id={widget.id} />
        })
        setWidgets(widgetComponentList)
      }
    })

  }

  useEffect(() => {
    getWidgets()
  }, [])


  return (
    <div className="WidgetList">
      {widgets}
      <CreateWidget new={setWidgets} widgets={widgets} board={props.board}/>

    </div>

  )
}

export default observer(WidgetList)
