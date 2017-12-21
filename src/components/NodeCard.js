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
                {/* <div> */}
                    {/* <Title title={this.props.title}/>
                    <Owner ownerInfo={this.props.ownerInfo}/>
                    {this.props.ownerInfo.email} */}
                {/* </div> */}
                <div>
                    <p>
                        This sensor is super cool and will display awesome things, 
                        because it is awesome.
                        {NodeCard.props.somethingElse.another}
                        {NodeCard.props.somethingElse.something}
                    </p>
                </div>
                {/* <div> */}
                    {/* These will have to scale */}
                    {/* {this.props.ownerInfo.email} */}
                    {/* {NodeCard.props.somethingElse.something} */}
                    {/* <SensorCard sensorData={this.props.sensorData} /> */}
                    {/* <SensorCard sensorData={this.props.sensorData}/> */}
                    {/* <SensorCard sensorData={this.props.sensorData} />
                    <SensorCard sensorData={this.props.sensorData} /> */}
                {/* </div> */}
            </div>
        );
    }
}

export default NodeCard;