import React, { Component } from 'react';
import './OverviewPage.css'
import NodeCard from '../NodeCard'
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Card, Grid, Dropdown } from 'semantic-ui-react'
import SensorCard from '../SensorCard'

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
/**
 * Mapping of sensor to rgba color.
 */
const BORDER_COLORS = {
  humidity: 'rgba(80,120,230,1)',
  temp_ambient: 'rgba(255,99,132,1)',
  temp_ir: 'rgba(255,99,132,1)',
  carbon_monoxide: 'rgba(220,220,80,1)',
  methane: 'rgba(180,255,132,1)',
  hydrogen: 'rgba(80,200,180,1)',
  sound: 'rgba(180,180,255,1)',
  vibration: 'rgba(100,50,132,1)',
  battery: 'rgba(80,80,80,1)',
}


/**
 * Takes the data for a node and transforms it into an object suitable for a NodeCard component
 * @param {Object[]} dataPoints the array containing the stored state data for a node
 * @returns {Object} object suited for NodeCard component. Has 'status', 'chartData', and 'chartOptions' properties.
 */
const makeDataWithChartOptions = (dataPoints) => {
  const timeLabels = dataPoints.map(point => point.time);
  return SENSOR_LABELS.map(sensorLabel => {
    return {
      status: "Good",
      chartData: {
        labels: timeLabels,
        datasets: [{
          label: sensorLabel,
          data: dataPoints.map(point => point[sensorLabel]),
          backgroundColor: BORDER_COLORS[sensorLabel].replace(',1)', ',.5)'),
          borderColor: BORDER_COLORS[sensorLabel],
          borderWidth: 1
        }],
      },
      chartOptions: CHART_OPTIONS
    }
  });
}

/**
 * Get list of experiment choice options from data
 * @param {} nodes 
 */
const getOptions = (nodes) => {
  return Object.keys(nodes).map(idkey => {
    const latest = nodes[idkey][nodes[idkey].length - 1]
    const equipment = latest.equipment
    return ({
      key: latest.id,
      text: equipment,
      value: latest.id
    })
  });
}

class OverviewPage extends Component {
  constructor(props) {
    super(props);
    const nodes = this.props.nodes;
    const firstExperiment = nodes[Object.keys(nodes)[0]]
    this.state = {
      experiment: firstExperiment
    };

  }

  /**
   * Change the experiment based on the selected option
   */
  handleChange = (event, {name, value}) => {
    // alert('Change detected!')
    const experiment = this.props.nodes[value]
    this.setState({experiment})
  }

  makeNodeCard = () => {
    const dataPoints = this.state.experiment;
    const sensorData = makeDataWithChartOptions(dataPoints);

    // use the most recent datapoint for the owner and description info
    const latestDataPoint = dataPoints[dataPoints.length - 1];
    const options = getOptions(this.props.nodes);
    const title = latestDataPoint.equipment || 'None'
    const owner = latestDataPoint.owner || 'None';
    const description = latestDataPoint.description || 'None';

    // put in a NodeCard for each node
    return (
      <Card color='blue' fluid centered >
        <Card.Content>
          <Card.Header>
            <Dropdown centered inline 
              noResultsMessage="No experiments available"
              options={options} defaultValue={title}
              onChange={this.handleChange}
              />
          </Card.Header>
          <Card.Meta>
            {`Experiment by ${owner}`}
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
          <Grid centered divided>
            {
              sensorData.map(data => <SensorCard sensorData={data} />)
            }
          </Grid>

        </Card.Content>
      </Card>
    );
  }

  /**
   * Render the graphs on the overview page.
   */
  render() {
    let nodeCard;
    if (this.state.experiment)
      nodeCard = this.makeNodeCard(this.state.experiment)
    else
      nodeCard = '';
    return (
      <div>
        {/* TODO: MAKE THE CARD HEADER A DROPDOWN MENU INSTEAD OF HAVING A SEPARATE ONE */}
        {nodeCard}
      </div>
    );

  }
}

export default OverviewPage