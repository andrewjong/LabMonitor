/**
 * Sensor node status
 */
import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import Chart from './Chart';

class SensorCard extends Component {
    constructor(props) {
        super(props)
        // this.state.chartData =  props.sensorData.chartData
    }
    doSomething() {
        alert('Hi! I am ' + this.props.sensorData.chartData.datasets[0].label)

    }
    render() {
        return (
            <div style={{ margin: 25 + "px" }}>
                <div>
                    {/* Chart Settings button */}
                </div>
                <div>
                    {/* Hide/Unhide button */}
                </div>
                <div>
                    {/* status of the sensor */}
                    {`Status: ${this.props.sensorData.status}`}
                </div>
                <div>
                    {/* {this.props.title} */}
                    {/* CHART TITLE GOES HERE. OR DOES IT? */}
                </div>
                <Button icon='hide' onClick={() => this.doSomething()} />
                <Chart data={this.props.sensorData.chartData}
                    options={this.props.sensorData.chartOptions}
                />
            </div>
        );
    }
}

export default SensorCard;