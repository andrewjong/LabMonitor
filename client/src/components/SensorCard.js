/**
 * Sensor node status
 */
import React, { Component } from 'react';
import { Button, Icon, Card } from 'semantic-ui-react'
import Chart from './Chart';

const toCapitalCase = str => str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

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
            <Card>
                <Card.Content>
                    <Button floated='right' icon='hide' size='tiny' onClick={() => this.props.hideSensor()} />
                    <Card.Header textAlign='left'>
                        {toCapitalCase(this.props.sensorData.title)}
                    </Card.Header>
                    <Card.Meta textAlign='left'>
                        {`Status: ${this.props.sensorData.status}`}
                    </Card.Meta>
                    <Chart data={this.props.sensorData.chartData}
                        options={this.props.sensorData.chartOptions}
                    />
                </Card.Content>
            </Card>
        );
    }
}

export default SensorCard;