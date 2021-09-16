import React, {useEffect, useState} from 'react';
import './DateGraph.css'
import {Line} from 'react-chartjs-2';
import LineGraph from "../../../services/linegraph.service";
import ChooseTime from "../../UI/ChooseTime";

const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};


const DateGraph = () => {
  const [dateStart, setDateStart] = useState('2021-08-15 00:00:00-00')
  const [dateEnd, setDateEnd] = useState('2021-12-15 00:00:00-00')
  const [changeDate, setChangeDate] = useState(false)
  const [data, setData] = useState({})

  const fetchData = async () => {
    const dataForGraph = await LineGraph.getData(1,dateStart,dateEnd)
    setData({
      labels: dataForGraph.map(elem => elem.time),
      datasets: [
        {
          data: dataForGraph.map(elem => elem.value),
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        }
      ]
    })
  }


  useEffect( () => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  },[changeDate])


  return (
    <div className={'DateGraph'}>
      <Line width={1000} height={350} data={data} options={options}/>
      <ChooseTime setDate={setDateStart}/>
      <ChooseTime setDate={setDateEnd}/>
      <button onClick={() => setChangeDate(!changeDate)}>Отсортировать</button>
    </div>
  );
};

export default DateGraph;