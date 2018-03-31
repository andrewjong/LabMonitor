/**
 * Sensor node status
 */
import React, { Component } from 'react';
import { Button, Icon, Card } from 'semantic-ui-react'
import { Line } from 'react-chartjs-2';

const toCapitalCase = str => str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
const HEIGHT = 200;
const WIDTH = 250;

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
            <Card color='green'>
                <Card.Content>
                    <Button floated='right' icon='hide' size='tiny' onClick={() => this.props.hideSensor()} />
                    <Card.Header textAlign='left'>
                        {toCapitalCase(this.props.sensorData.title)}
                    </Card.Header>
                    <Card.Meta textAlign='left'>
                        {`Status: ${this.props.sensorData.status}`}
                    </Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Line
                        height={HEIGHT}
                        width={WIDTH}
                        data={this.props.sensorData.chartData}
                        options={this.props.chartOptions}
                    />
                </Card.Content>
            </Card>
        );
    }
}

export default SensorCard;