import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import NodeCard from './components/NodeCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SHARP LABORATORY</h1>
        </header>

        <NodeCard title="Node 1"
          description="This node is monitoring George's lunchbox, to make sure the food is safe to eat."
          ownerInfo={{
            name: "Andrew Jong",
            email: "andrew.jong@nasa.gov"
          }}
          sensorData={{
            status: "Good to go",
            chartData: {
                // probably for labels later we can read from props
                labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                datasets: [{
                    label: 'Temperature over time',
                    // probably for data later we can read from props
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                }]
            },
            chartOptions: {
                legend: {
                    display: true,
                    position: 'right'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            }
          }}
        />
      </div>
    );
  }
}

export default App;
