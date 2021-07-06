import React from 'react';
import Container from '../../components/Container';
import Gauge from '../../components/GaugeChart';

const BaseData = () => {

    const APIUrl = "https://scout-iot-api.herokuapp.com/iot/elec/devices";

    return(
        <Container width={"auto"} height={"100%"} paddingLeft={"80px"}>
            <ChartHolder width={"83.8vw"} height={"60%"} title={"Bonfire Economy Dashboard"}>
                <p>
                    Username: {"<Username>"}
                </p>
                <p>
                    Plano: Free
                </p>
            </ChartHolder>

            <ChartHolder width={"66%"} height={"60%"} title={"Gastos Gerais"}>
                <Gauge dataSourceUrl={APIUrl} deviceName={"outlet_livingroom_a"}/>
            </ChartHolder>
            <ChartHolder width={"90%"} height={"60%"} title={"Valores"}>

            </ChartHolder>
        </Container>
    );
}

export default BaseData;