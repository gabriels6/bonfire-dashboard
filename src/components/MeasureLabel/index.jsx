import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Main} from './styles';

const MeasureLabel = ({label,dataSourceUrl}) => {

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

        let date = new Date()

        setValue({
            data:newData.data.Wattage,
            measure_date:date.toString()
        });
    }

    return(
        <Main>
            <h2>
                {label}: {(value.data/1000)} kW
            </h2>
            <p>
                {value.measure_date}
            </p>
        </Main>
    );

}

export default MeasureLabel;