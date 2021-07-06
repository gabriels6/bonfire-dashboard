import React, {useState, useEffect} from 'react';
import GaugeChart from 'react-gauge-chart';
import axios from 'axios';

const Gauge = ({dataSourceUrl,deviceName}) => {

    const [ percentage, setPercentage ] = useState({
        name:"00:00:00",
        wattage:0
    })

    useEffect(() => {
        setInterval(() => {
            handleData();
        },10000);

        window.addEventListener('resize', () => {
            setPercentage(prevState => ({
                name: prevState.name,
                wattage: prevState.wattage
            }));
        });
    },[]);

    async function handleData(){

        let newData = await axios.get(dataSourceUrl + "/" + deviceName);

        let date = new Date()

        setPercentage(
            {
                name:date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                wattage:newData.data.Wattage
            }
        );

    }

    return(
        <GaugeChart 
            nrOfLevels={10} 
            percent={percentage.wattage/100}
            colors={['#5BE12C', '#F5CD19', '#EA4228']} 
            style={
                {
                    height:250,
                    width: window.innerWidth * 37/100
                }
            }
            id="gauge-chart1"/>
    )
}

export default Gauge;