import React, { Component } from 'react';
import './App.css'
import NodeCard from './components/NodeCard';

const INTERVAL_SECONDS = 2;
const MAX_DATA = 10;

/*
state = {
  nodes: {
    1: [{}, {}, {}],
    2: [{}, {}, {}],
    3: [{}, {}, {}]
  }
}
*/
class App extends Component {
  // initialize state as an object with an empty array
  state = { nodes: {} };

  componentDidMount() {
    setInterval(() => {
      fetch('/live-data')
        .then(res => {
          if (res.ok) return res.json();
          else throw new Error('Could not connect');
        })
        .catch(err => {
          console.log(err);
        })
        .then(latestData => {
          if (!latestData) throw new Error('No data');
          latestData.map(node => {
            // clone the original state
            const newState = Object.assign({}, this.state);
            // init the array of datapoints if necessary
            if (typeof newState.nodes[node.id] === 'undefined') newState.nodes[node.id] = [];
            const dataPoints = newState.nodes[node.id];
            const lastPoint = dataPoints[dataPoints.length - 1];
            if (!(JSON.stringify(node) === JSON.stringify(lastPoint))) {
              console.log('New data detected. Updating state...')
              // add the new data
              newState.nodes[node.id].push(node);
              // don't store in the state more than max amount of datapoints
              if (newState.nodes[node.id].length > MAX_DATA) newState.nodes[node.id].shift();
              return this.setState({ newState });
            } else {
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
   * @param {string} label 
   */
  chooseBorderColor(label){
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SHARP LABORATORY</h1>
        </header>
        <div className="container">
          {
            // map over each of the nodes
            Object.keys(this.state.nodes).map(idKey => {
              const values = this.state.nodes[idKey];
              const lastValue = values[values.length - 1];
              const owner = lastValue.owner || '';
              const sensorLabels = ["humidity", "temp_ambient", "temp_ir", "carbon_monoxide", "methane", "hydrogen", "sound", "vibration", "battery"];
              const sensorData = sensorLabels.map(label => {
                return {
                  status: "Good",
                  chartData: {
                    labels: values.map(timePoint => timePoint.time),
                    datasets: [{
                      label: label,
                      data: values.map(timePoint => timePoint[label]),
                      backgroundColor: this.chooseBorderColor(label).replace(',1)', ',.5)'),
                      borderColor: this.chooseBorderColor(label),
                      borderWidth: 1
                    }],
                  },
                  chartOptions: {
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
                    },
                  }
                }
              });

              return (
                <NodeCard title={`Node ${idKey}`}
                  ownerInfo={{
                    name: owner,
                    email: `${owner.split(' ').join('.')}@nasa.gov`
                  }}
                  description={lastValue.description}
                  sensorData={sensorData}
                />);
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
