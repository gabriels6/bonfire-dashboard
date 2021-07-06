import React, {useState, useEffect} from 'react';
import ChartHolder from '../../components/ChartHolder';
import Container from '../../components/Container';
import LineChart from '../../components/LineChart';
import Gauge from '../../components/GaugeChart';
import MeasureLabel from '../../components/MeasureLabel';

const DeviceData = () => {

    const APIUrl = "https://scout-iot-api.herokuapp.com/iot/elec/devices";
    const BuildingAPIURL = "https://scout-iot-api.herokuapp.com/iot/elec/building/house_a";

    

    return(
        <Container width={"auto"} height={"100%"} paddingLeft={"80px"}>
            <ChartHolder width={"83.8vw"} height={"60%"} title={"Bonfire Economy Dashboard"}>
                <div style={{paddingLeft: '30px'}}>
                    <MeasureLabel label={"Gasto Total"} dataSourceUrl = {BuildingAPIURL}/>
                </div>
            </ChartHolder>
            
            <>
                <ChartHolder width={"47%"} height={"50%"} title={"Sala de Estar A"}>
                    <LineChart widthPercentage={40} dataSourceUrl={APIUrl} deviceName={"outlet_livingroom_a"} />
                </ChartHolder>

                <ChartHolder width={"40%"} height={"50%"} title={"Sala de Estar A"}>
                    <Gauge dataSourceUrl={APIUrl} deviceName={"outlet_livingroom_a"}/>
                </ChartHolder>
            </>

            <>
                <ChartHolder width={"40%"} height={"50%"} title={"Sala de Estar B"}>
                    <Gauge dataSourceUrl={APIUrl} deviceName={"outlet_livingroom_b"}/>
                </ChartHolder>

                <ChartHolder width={"47%"} height={"50%"} title={"Sala de Estar B"}>
                    <LineChart widthPercentage={40} dataSourceUrl={APIUrl} deviceName={"outlet_livingroom_b"} />    
                </ChartHolder>                
            </>

            <>
                <ChartHolder width={"47%"} height={"50%"} title={"Sala de Estar C"}>
                    <LineChart widthPercentage={40} dataSourceUrl={APIUrl} deviceName={"outlet_livingroom_c"} />   
                </ChartHolder>

                <ChartHolder width={"40%"} height={"50%"} title={"Sala de Estar C"}>
                    <Gauge dataSourceUrl={APIUrl} deviceName={"outlet_livingroom_c"}/>
                </ChartHolder>
            </>

            <>
                <ChartHolder width={"47%"} height={"50%"} title={"Banheiro A"}>
                    <LineChart widthPercentage={40} dataSourceUrl={APIUrl} deviceName={"outlet_bathroom_a"} />    
                </ChartHolder>

                <ChartHolder width={"40%"} height={"50%"} title={"Banheiro A"}>
                    <Gauge dataSourceUrl={APIUrl} deviceName={"outlet_bathroom_a"}/>
                </ChartHolder>
            </>
        </Container>
    )
}

export default DeviceData;