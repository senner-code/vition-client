import React, {useContext, useEffect} from 'react';
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";

const SelectWidget = (props) => {
  const {store} = useContext(Context)

  useEffect(() => {

  })

  return (
    <select defaultValue={'Choose Widget'} onChange={(e) => {
      props.select(e.target.value)
    }}>
      <option value="Choose Widget" disabled hidden>Choose widget</option>
      {store.widgetDataList.map((widget,index) => {
        return <option key={index} value={widget.id}>{widget.name}</option>
      })}
    </select>
  );
};

export default observer(SelectWidget);