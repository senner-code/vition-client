import React, {useEffect, useState} from 'react';
import DatePicker from 'react-date-picker'


const ChooseTime = (props) => {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const tempDate =

      String(date.getFullYear())
      + '-' +
      String(date.getMonth() >= 9
        ? date.getMonth() + 1
        :('0'+(date.getMonth() + 1)) )
      + '-' +
      String(date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
      ' 00:00:00-00'

    props.setDate(tempDate)
  }, [date])

  return (
    <DatePicker
      format={'y-MM-dd'}
      onChange={setDate}
      value={date}
    />
  );
};

export default ChooseTime;