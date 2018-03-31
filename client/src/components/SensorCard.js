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
        alert('Hi! I am ' + this.props.sensorData.title)

    }
    render() {
        return (
            <div style={{ margin: 25 + "px" }}>
                <div>
                    {/* {this.props.title} */}
                    {this.props.sensorData.title}
                </div>
                <div>
                    {/* status of the sensor */}
                    {`Status: ${this.props.sensorData.status}`}
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