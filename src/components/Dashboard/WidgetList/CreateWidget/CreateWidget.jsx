import React, {useState} from 'react';
import WidgetService from "../../../../services/widget.service";
import WidgetItem from "../WidgetItem";

const CreateWidget = (props) => {
  const [name, setName] = useState('')

  return (
    <div className='CreateWidget'>
      <input type="text"
             onChange={e => setName(e.target.value)}
             value={name}
             placeholder='Enter name widget'
      />
      <button onClick={() => {
        WidgetService.createWidget(props.board, name).then(widget => {
          props.new([...props.widgets, <WidgetItem name={widget.name} id={widget.id}/>])
        })
        setName('')
      }}> Create WidgetList
      </button>
    </div>
  );
};

export default CreateWidget;