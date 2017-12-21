import React, { Component } from 'react';
import './NodeCard.css'
import Title from './Title'
import Owner from './Owner'
import SensorCard from './SensorCard'

class NodeCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Sensor-card">
                <div>
                    <Title title={this.props.title}/>
                    <Owner ownerInfo={this.props.ownerInfo}/>
                </div>
                <div>
                    {this.props.description}
                </div>
                <div>
                    {/* These will have to scale */}
                    <SensorCard sensorData={this.props.sensorData[0]} />
                    <SensorCard sensorData={this.props.sensorData[1]} />
                    <SensorCard sensorData={this.props.sensorData[2]} />
                </div>
            </div>
        );
    }
}

export default NodeCard;