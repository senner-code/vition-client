import React, {useContext, useState} from 'react';
import WidgetService from "../../../../services/widget.service";
import WidgetItem from "../WidgetItem";
import {Context} from "../../../App";

const CreateWidget = (props) => {
  const [name, setName] = useState('')

  const {store} = useContext(Context)

  return (
    <div className='CreateWidget'>
      <input type="text"
             onChange={e => setName(e.target.value)}
             value={name}
             placeholder='Enter name widget'
      />
      <button onClick={() => {
        WidgetService.createWidget(props.board, name).then(widget => {
          store.setWidgetDataList([...store.widgetDataList, widget])
          props.new([...props.widgets, <WidgetItem key={widget.id} name={widget.name} id={widget.id}/>])
        })
        setName('')
      }}> Create WidgetList
      </button>
    </div>
  );
};

export default CreateWidget;