import React, {useEffect, useState} from 'react';
import './InfoTab.css'
import {Doughnut} from "react-chartjs-2";
import GraphService from "../../../services/graph.service";
import ChooseTime from "../../UI/ChooseTime";
import moment from "moment";

const InfoTab = ({board_id}) => {
  const [data, setData] = useState({})
  const [title, setTitle] = useState(<h3>Отчёт за последний месяц</h3>)
  const [dateStart, setDateStart] = useState(moment().add(-1,'month').format())
  const [dateEnd, setDateEnd] = useState(moment().format())
  const [changeType, setChangeType] = useState(true)

  const fetchData = async () => {
    const result = await GraphService.getDataByCategory(board_id, dateStart,dateEnd,changeType ? 1 : 0)
    if(result[0]){
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
    else{
      setData(null)
    }
  }

  useEffect(  () => {
    fetchData()
  },[])

  useEffect( () => {
    fetchData()
    setTitle(<h3>Отчёт с {dateStart.split('T')[0]} по {dateEnd.split('T')[0]}</h3>)
  },[changeType])

  return (
    <div className={'InfoTab'}>
      {title}
      <div className="graph">
        {data? <Doughnut height={9} width={10} options={
          {
            legend:{display:false}
          }
        } data={data}/> : <h2>Выберите период</h2>}

        <button onClick={() => {
          setChangeType(true)
        }}>Доход</button>
        <button onClick={() => {
          setChangeType(false)
        }}>Расход</button>
      </div>
      <div className="information">
        <ChooseTime setDate={setDateStart}/>
        <ChooseTime setDate={setDateEnd}/>
      </div>
    </div>
  );
};

export default InfoTab;