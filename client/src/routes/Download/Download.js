import React, { Component } from 'react';
import { Button, Segment, Checkbox, Grid } from 'semantic-ui-react'
import './Download.css'

/**
 * Array of sample nodes
 */
const nodeSamples = [
  "1", "2", "3", "4"
];

/**
 * The data types found in node types
 */
const sensorTypes = [
  "Battery", "Carbon Monoxide", "Humidity", "Hydrogen", "Methane",
  "Sound", "Temperature Ambient", "Temperature IR", "Vibration"
];

/**
 * Displays each node options and sensors values that be downloaded from it.
 */
class Application extends Component {
  CreateSegmentMap = () => (
    nodeSamples.map(this.SegmentNodes)
  )

  // Interface of Download page. Nodes are split into segments 
  SegmentNodes = nodeNumber => (
    <Segment>
      Node {nodeNumber}

      <div className="checkMarks">
      <Grid.Row>
        {this.CreateSenorTypesMap()}
        </Grid.Row>
      </div>

      <div className="button">
        <Button content="Download" icon='download' color="green"/>
      </div>

    </Segment>
  )

  // Create a mapping of check marks for each sensor node type
  CreateSenorTypesMap = () => (
    sensorTypes.map(this.CheckMark)

  )

  // Create a label for each sensor node
  CheckMark = checkNames => (
    <Checkbox label={checkNames}>
    </Checkbox>
  )

  // render the sensor map
  render() {
    return (
      <div className="container">

      {this.CreateSegmentMap()}

      </div>
    );
  }
}

export default Application;
