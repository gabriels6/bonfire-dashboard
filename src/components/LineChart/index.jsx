import React, {useState, useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const LChart = ({dataSourceUrl,deviceName,widthPercentage}) => { 

    const [ data, setData ] = useState([]);

    useEffect(() => {
        setInterval(() => {
            handleData();
        },10000);

        window.addEventListener('resize', () => {
            setData(prevState => [...prevState]);
        });
    },[]);

    async function handleData(){

        let newData = await axios.get(dataSourceUrl + "/" + deviceName);

        let date = new Date()

        setData(prevState => [
            ...prevState,
            {
                name:date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                wattage:newData.data.Wattage
            }
        ]);

    }



    return (
    <LineChart width={window.innerWidth * widthPercentage/100} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="wattage" stroke="#ff2a00" />
    </LineChart>
    );
}

export default LChart;