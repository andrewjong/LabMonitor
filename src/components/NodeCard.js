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
            <div className="Node-card">
                <div className="Header">
                    <Title title={this.props.title} />
                    <p id="description">
                        {this.props.description}
                    </p>
                    <Owner ownerInfo={this.props.ownerInfo} />
                </div>
                <div className="Charts">
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