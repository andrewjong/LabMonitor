/**
 * Sensor node status
 */
import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'
import { Line } from 'react-chartjs-2';
import { toCapitalCase } from '../utilityFunctions'

const HEIGHT = 200;
const WIDTH = 250;

const STATUS_COLOR_MAP = {
    'nominal': 'green',
    'warning': 'yellow',
    'critical': 'red'
}
class SensorCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card color={STATUS_COLOR_MAP[this.props.sensorData.status.toLowerCase()] || 'gray'}>
                <Card.Content>
                    <Button floated='right' icon='hide' size='tiny' onClick={() => this.props.toggleHidden()} />
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
                        options={this.props.sensorData.chartOptions}
                    />
                </Card.Content>
            </Card>
        );
    }
}

export default SensorCard;