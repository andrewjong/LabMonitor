import React, { Component } from 'react';
import Chart from './Chart';

class SensorCard extends Component {
    constructor(props){
        super(props)
        // this.state.chartData =  props.sensorData.chartData
    }
    render() {
        return (
            <div>
                <div>
                    {/* Chart Settings button */}
                </div>
                <div>
                    {/* Hide/Unhide button */}
                </div>
                <div>
                    {/* status of the sensor */}
                    {/* {this.props.sensorData.status} */}
                </div>
                <div>
                    {this.props.title}
                    CHART TITLE GOES HERE. OR DOES IT?
                </div>
                {/* <Chart data={this.props.sensorData.chartData} options={this.props.sensorData.chartOptions} /> */}
            </div>
        );
    }
}

export default SensorCard;