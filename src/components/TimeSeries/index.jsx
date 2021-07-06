import React from 'react';
import RealTimeChart from 'react-rt-chart';
 
class TimeSeries extends React.Component {
    constructor(){
        super();
        this.state = { data: null };
        
        setInterval(() => {
            this.setState({data: { 
                date: new Date().getTime(), 
                values: [{id: 'data1', value: 52},{id: 'data2',value: 76}]
            }});
        }, 1000);
    }
    render() {
        return <RealTimeChart 
                maxValues={10} 
                fields={['data1','data2']} 
                data={this.state.data} />
    }
}

export default TimeSeries