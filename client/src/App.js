/**
 * This file defines the core of the react app. This is where things start.
 */
import React, { Component } from 'react';
import './App.css'

import './semantic/dist/semantic.min.css';
import LabHeader from './components/LabHeader';
import Navigation from './routes/Navigation';

import RoutingPaths from './routes/RoutingPaths';

// time between polling for new data in seconds
const INTERVAL_SECONDS = 2;
// max amount of data to store in the state
const MAX_DATA_POINTS = 10;

class App extends Component {
  constructor(props) {
    super(props);
    // initialize the state as an object with property 'nodes', which points to an object
    // the 'nodes' object will map each nodeid to an array of data
    this.state = {
      nodes: {}
    };
  }

  /**
   * When the component loads, set the interval to repeatedly update data
   */
  componentWillMount() {
    setInterval(() => {
      this.updateData();
    }, INTERVAL_SECONDS * 1000);
  }

  /**
   * Get experimental data from the server
   */
  updateData() {
    // fetch the latest data
    fetch('/live-data')
      // make sure it worked
      .then(res => {
        if (res.ok) return res.json();
        else throw new Error('Could not connect');
      })
      // else if it didn't, log it
      .catch(err => {
        console.log(err);
      })
      // add the latest data to our state of past data
      .then(latestData => {
        if (!latestData) throw new Error('No data');
        // latestData is an array of node objects
        latestData.map(node => {
          // clone the original state
          const newState = Object.assign({}, this.state);
          // check to see if our state has this node in its mapping. if not, add it and set its data to an empty array
          if (typeof newState.nodes[node.id] === 'undefined') {
            const values = [];
            values.length = MAX_DATA_POINTS;
            values.fill(0);
            newState.nodes[node.id] = values;
          }

          const dataPoints = newState.nodes[node.id]; // the existing datapoints for this node in our state
          const lastPoint = dataPoints[dataPoints.length - 1]; // the latest datapoint for this node in our state

          // check if the fetched data is the same as our state's most recent data for that node. we should update if
          // it's not the same (i.e. new data)
          if (!(JSON.stringify(node) === JSON.stringify(lastPoint))) {
            console.log('New data detected. Updating state...')
            // add the new data
            newState.nodes[node.id].push(node);
            newState.nodes[node.id].shift();

            // set the new state
            return this.setState({ newState });
          } else {  // if it is the same, 
            console.log(`No new data for node id ${node.id}`)
          }
        });
      })
      .catch(err => {
        console.log(err);
      });

  }

  /**
   * Render the app with the header, navigation, and routing paths.
   */
  render() {
    return (
      <div className="App">
        <LabHeader />
        <Navigation />
        <RoutingPaths nodes={this.state.nodes} />
      </div>
    );
  }
}

export default App;