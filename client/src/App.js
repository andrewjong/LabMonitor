/**
 * This file defines the core of the react app. This is where things start.
 */
import React, { Component } from 'react';
import './App.css'
import NodeCard from './components/NodeCard';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Jumbotron, Button, TabContent, TabPane, Container,
  Nav, NavItem, NavLink, Row, Col, InputGroup,
  Form, FormGroup, Label, Input, Badge,
} from 'reactstrap';
import classnames from 'classnames';

import Download from './components/Download';
import Nodes from './components/Nodes';

import './semantic/dist/semantic.min.css';
import { Sidebar, Segment, Menu, Image, Icon, Header } from 'semantic-ui-react';
import LabHeader from './components/LabHeader';
import SideTab from './components/Routing/SideTab';

import RoutingPaths from './components/Routing/RoutingPaths';
 
// time between polling for new data in seconds
const INTERVAL_SECONDS = 2;
// max amount of data to store in the state
const MAX_DATA = 10;
// sensor labels for a node 
const SENSOR_LABELS = ["humidity", "temp_ambient", "temp_ir", "carbon_monoxide", "methane", "hydrogen", "sound", "vibration", "battery"];
// graphical options for Chart.JS
const CHART_OPTIONS = {
  legend: {
    display: true,
    position: 'top'
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

class App extends Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  constructor(props) {
    super(props);

    // form
    this.handleChange = this.handleChange.bind(this);

    // tabs
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      nodes: []
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  //handles form events
  handleChange(event) {
    this.setState(Object.apply(this.state, { [event.target.name]: event.target.value }));
  }

  // initialize the state as an object with property 'nodes', which points to an object
  // the 'nodes' object will map each nodeid to an array of data
  state = { nodes: {} };

  componentWillMount() {
    setInterval(() => {
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
            if (typeof newState.nodes[node.id] === 'undefined') newState.nodes[node.id] = [];

            const dataPoints = newState.nodes[node.id]; // the existing datapoints for this node in our state
            const lastPoint = dataPoints[dataPoints.length - 1]; // the latest datapoint for this node in our state

            // check if the fetched data is the same as our state's most recent data for that node. we should update if
            // it's not the same (i.e. new data)
            if (!(JSON.stringify(node) === JSON.stringify(lastPoint))) {
              console.log('New data detected. Updating state...')
              // add the new data
              newState.nodes[node.id].push(node);
              // don't store in the state more than max amount of datapoints
              if (newState.nodes[node.id].length > MAX_DATA) newState.nodes[node.id].shift();

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
    }, INTERVAL_SECONDS * 1000);
  }
  /**
   * Hardcode the color for each sensor
   * @param {string} label the label
   */
  chooseBorderColor(label) {
    if (label === "humidity") return 'rgba(80,120,230,1)';
    if (label === "temp_ambient") return 'rgba(255,99,132,1)';
    if (label === "temp_ir") return 'rgba(255,99,132,1)';
    if (label === "carbon_monoxide") return 'rgba(220,220,80,1)';
    if (label === "methane") return 'rgba(180,255,132,1)';
    if (label === "hydrogen") return 'rgba(80,200,180,1)';
    if (label === "sound") return 'rgba(180,180,255,1)';
    if (label === "vibration") return 'rgba(100,50,132,1)';
    if (label === "battery") return 'rgba(80,80,80,1)';
    return 'rgba(0,0,0,1)';
  }

  /**
   * Takes the data for a node and transforms it into an object suitable for a NodeCard component
   * @param {Object[]} dataPoints the array containing the stored state data for a node
   * @returns {Object} object suited for NodeCard component. Has 'status', 'chartData', and 'chartOptions' properties.
   */
  makeDataWithChartOptions(dataPoints) {
    const timeLabels = dataPoints.map(point => point.time);
    return SENSOR_LABELS.map(sensorLabel => {
      return {
        status: "Good",
        chartData: {
          labels: timeLabels,
          datasets: [{
            label: sensorLabel,
            data: dataPoints.map(point => point[sensorLabel]),
            backgroundColor: this.chooseBorderColor(sensorLabel).replace(',1)', ',.5)'),
            borderColor: this.chooseBorderColor(sensorLabel),
            borderWidth: 1
          }],
        },
        chartOptions: CHART_OPTIONS
      }
    });
  }

  // render each of the nodes in the state into its own NodeCard
  render() {
    // State variables for lab header
    var LAB_NAME = this.state.value;
    var MANAGER_NAME = this.state.manager;
    var EMAIL = this.state.email;
    const { visible } = this.state;

    return (

      <div className="App">

      <LabHeader/>
      <SideTab/>
      <RoutingPaths/>



     {/* 
        <header className="App-header">
         

        <div className="container">
          {
            // map over each of the nodes
            Object.keys(this.state.nodes).map(idKey => {
              const dataPoints = this.state.nodes[idKey];
              const sensorData = this.makeDataWithChartOptions(dataPoints);

              // use the most recent datapoint for the owner and description info
              const latestDataPoint = dataPoints[dataPoints.length - 1];
              const owner = latestDataPoint.owner || '';
              const description = latestDataPoint.description || '';

              // put in a NodeCard for each node
              return (
                <NodeCard title={`Node ${idKey}`}
                  ownerInfo={{
                    name: owner,
                    email: `${owner.split(' ').join('.')}@nasa.gov`
                  }}
                  description={latestDataPoint.description}
                  sensorData={sensorData}
                />);
            })
          }
        </div>
        */}
      </div>
    );
  }
}

export default App;