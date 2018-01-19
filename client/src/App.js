import React, { Component } from 'react';
import './App.css'
import NodeCard from './components/NodeCard';

const INTERVAL_SECONDS = 2;

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
    setInterval(() => {
      fetch('/live-data')
        .then(res => res.json())
        .then(latestData => {
          console.log(JSON.stringify(latestData, null, '\t'));
          return this.setState({ latestData });
        });
    }, INTERVAL_SECONDS * 1000);
  }
  // something here about generating the Nodes dynamically perhaps

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SHARP LABORATORY</h1>
        </header>
        {/* <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )} */}

        <div className="container">
          <NodeCard title="Node 1"
            ownerInfo={{
              name: "Andrew Jong",
              email: "andrew.jong@nasa.gov"
            }}
            description="This node is monitoring Andrew's lunchbox, to make sure evil ants don't get to it. Andrew's lunchbox has crackers which are known to be explosive."
            sensorData={[
              {
                status: "Good",
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
              },
              {
                status: "WARNING",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Gas over time',
                    // probably for data later we can read from props
                    data: [8, 19, 10, 5, 18, 42],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(99,190,132,1)',
                    borderWidth: 1
                  }]
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
              },
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Vibration over time',
                    // probably for data later we can read from props
                    data: [15, 14, 19, 18, 25, 28],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(80,100,190,1)',
                    borderWidth: 1
                  }]
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
              },
            ]}
          />

          <NodeCard title="Node 2"
            ownerInfo={{
              name: "George Gorospe",
              email: "george.s.gorospe@nasa.gov"
            }}
            description="This node is monitoring George's lunchbox, to make sure it doesn't spoil. George's lunchbox is actually a squircle, so it's a lunchsquircle."
            sensorData={[
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Temperature over time',
                    // probably for data later we can read from props
                    data: [5, 3, 13, 20, 9, 3],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                  }]
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
              },
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Gas over time',
                    // probably for data later we can read from props
                    data: [15, 19, 10, 5, 18, 18],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(99,190,132,1)',
                    borderWidth: 1
                  }]
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
              },
              {
                status: "Good",
                chartData: {
                  // probably for labels later we can read from props
                  labels: ["25s", "20s", "15s", "10s", "5s", "0s"],
                  datasets: [{
                    label: 'Vibration over time',
                    // probably for data later we can read from props
                    data: [25, 14, 19, 18, 10, 28],
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(80,100,190,1)',
                    borderWidth: 1
                  }]
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
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
