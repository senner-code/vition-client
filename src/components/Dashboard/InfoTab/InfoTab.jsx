import React, {useEffect, useState} from 'react';
import './InfoTab.css'
import {Doughnut} from "react-chartjs-2";
import LineGraph from "../../../services/linegraph.service";
import ChooseTime from "../../UI/ChooseTime";




const InfoTab = () => {
  const [data, setData] = useState({})

  const [dateStart, setDateStart] = useState('2021-08-15 00:00:00-00')
  const [dateEnd, setDateEnd] = useState('2021-12-15 00:00:00-00')
  const [changeDate, setChangeDate] = useState(false)
  const [changeType, setChangeType] = useState(true)

  const fetchData = async () => {
    const result = await LineGraph.getDataByCategory(1, dateStart,dateEnd,changeType ? 1 : 0)
    setData({
      labels: result.map(elem => elem.name),
      datasets: [
        {
          label: '# of Votes',
          data: result.map(elem => elem.value),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    })
  }

  useEffect( () => {
    fetchData()
  },[])

  useEffect( () => {
    fetchData(changeType)
  },[changeType,changeDate])

  return (
    <div className={'InfoTab'}>
      <div className="graph">
        <Doughnut height={9} width={10} options={
          {
            legend:{display:false}
          }
        } data={data}/>
        <button onClick={() => setChangeType(true)}>Доход</button>
        <button onClick={() => setChangeType(false)}>Расход</button>
      </div>
      <div className="information">
        <ChooseTime setDate={setDateStart}/>
        <ChooseTime setDate={setDateEnd}/>
        <button onClick={() => setChangeDate(!changeDate)}>Отсортировать</button>
      </div>
    </div>
  );
};

export default InfoTab;