import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Main} from './styles';

const MeasureLabel = ({label,dataSourceUrl,dataName,CurrentDate = true}) => {

    const [value, setValue] = useState({
        data:0,
        measure_date:new Date().toString()
    });

    useEffect(() => {
        setInterval(() => {
            handleData();
        },10000);
    },[]);

    async function handleData(){
        let newData = await axios.get(dataSourceUrl);

        let date

        if(!CurrentDate){
            date = new Date(newData.data.Last_measure_date)
        }else{
            date = new Date()
        }

        setValue({
            data:newData.data[dataName],
            measure_date:date.toString()
        });

    }

    return(
        <Main>
            <h2>
                {label}: {(value.data/1000)} kW
            </h2>
            <h3>
                Consumo médio por hora: {value.data/(730.5 * 1000)} kWh
            </h3>
            <h4>
                Gasto Total: R$ {((value.data/(730.5 * 1000)) * 0.85).toFixed(2)}** <br/>
            </h4>
            <small>
                ** Valor utilizado para medição: R$ 0,85/ kWh 
            </small>
            <p>
                {value.measure_date}
            </p>
        </Main>
    );

}

export default MeasureLabel;