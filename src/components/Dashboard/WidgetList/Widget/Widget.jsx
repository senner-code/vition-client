import React, {useEffect, useState} from 'react';
import WidgetService from "../../../../services/widget.service";


const Widget = (props) => {

  const [widget , setWidget] = useState({})




  const loadWidget = async () => {
    const widgetData = await WidgetService.getWidget(props.match.params.id)
    setWidget(widgetData)
  }

  useEffect(() => {
    loadWidget()
  },[])


  return (
    <div>
      <h1>{props.match.params.id}</h1>
      <p>{widget.name}</p>
    </div>
  );
};

export default Widget;