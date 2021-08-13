import {observer} from 'mobx-react-lite'
import React, { useEffect, useState} from 'react'
import './WidgetList.css'
import WidgetService from "../../../services/widget.service";
import CreateWidget from "./CreateWidget/CreateWidget";
import WidgetItem from "./WidgetItem";


const WidgetList = (props) => {
  const [widgets, setWidgets] = useState([])

  const getWidgets = async () => {
    const widgets = await WidgetService.getWidgets(props.board)
    if(widgets){
      const widgetList = widgets.map((widget) => {
        return <WidgetItem name={widget.name} id={widget.id} />
      })
      setWidgets(widgetList)
    }
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
