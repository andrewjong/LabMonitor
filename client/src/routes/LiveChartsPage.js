import React, { Component } from 'react';
import './LiveChartsPage.css'
import { Card, Grid, Dropdown } from 'semantic-ui-react'
import SensorCard from '../components/SensorCard'

// sensor labels for a node 
const SENSOR_GROUPS = [
  ["humidity"],
  ["temp_ambient", "temp_ir"], // group temperature together
  ["carbon_monoxide", "methane", "hydrogen"], // group gases together
  ["sound"], 
  ["vibration"], 
  ["battery"]
];
// graphical options for Chart.JS
const CHART_OPTIONS = {
  legend: {
    display: true,
    position: 'top'
  },
  scales: {
    yAxes: [{
      ticks: {
        suggestedMin: 0,
        suggestedMax: 60,
        stepSize: 20
      }
    }],
    xAxes: [{
      ticks: {
        maxTicksLimit: 4
      }
    }],
  }, 
  responsive: false,
  maintainAspectRatio: true,
  animation: {
    duration: 3000,
    easing: 'linear'
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    animationDuration: 200
  }
}
/**
 * Mapping of sensor to rgba color.
 */
const BORDER_COLORS = {
  humidity: 'rgba(80,120,230,0.9)',
  temp_ambient: 'rgba(255,99,132,0.9)',
  temp_ir: 'rgba(255, 131, 58,0.9)',
  carbon_monoxide: 'rgba(220,220,80,0.9)',
  methane: 'rgba(180,255,132,0.9)',
  hydrogen: 'rgba(80,200,180,0.9)',
  sound: 'rgba(180,180,255,0.9)',
  vibration: 'rgba(100,50,132,0.9)',
  battery: 'rgba(80,80,80,0.9)',
}

const toCapitalCase = str => {
  str.split(" ").map(word => word[0].toUpperCase()+word.slice(1)).join(" ")
}
/**
 * Takes the data for a node and transforms it into an object suitable for a 
 * @param {Object[]} dataPoints the array containing the stored state data for a node
 * @returns {Object} object suited for NodeCard Has 'status', 'chartData', and 'chartOptions' properties.
 */
const makeDataWithChartOptions = (dataPoints) => {
  const timeLabels = dataPoints.map(point => point.time);
  return SENSOR_GROUPS.map(sensorGroup => {
    const datasets = sensorGroup.map(label => {
      return {
        label: label,
        data: dataPoints.map(point => point[label]),
        backgroundColor: BORDER_COLORS[label], //.replace(',1)', ',.5)'), // make the background slightly transparent
        fill: false,
        borderColor: BORDER_COLORS[label],
        borderWidth: 1,
        lineTension: 0
      }
    });

    return {
      status: "Good",
      chartData: {
        labels: timeLabels,
        datasets: datasets,
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
      activeExperiment: firstExperiment
    };

  }

  /**
   * Change the experiment based on the selected option
   */
  handleChange = (event, { name, value }) => {
    // alert('Change detected!')
    const experiment = this.props.nodes[value]
    this.setState({ experiment })
  }

  makeNodeCard = () => {
    const dataPoints = this.state.activeExperiment;
    const sensorData = makeDataWithChartOptions(dataPoints);

    // use the most recent datapoint for the owner and description info
    const latestDataPoint = dataPoints[dataPoints.length - 1];
    const options = getOptions(this.props.nodes);
    const title = latestDataPoint.equipment || 'None'
    const owner = latestDataPoint.owner || 'None';
    const description = latestDataPoint.description || 'None';

    // put in a NodeCard for each node
    return (
      <Card fluid centered>
        <Card.Content>
          <Card.Header>
            <Dropdown centered inline
              noResultsMessage="No experiments available"
              options={options} defaultValue={title} placeholder="Select an experiment"
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
        {
          // Something down here for hidden charts? or should we put it on top? probably bottom makes more sense because they're hidden
        }
      </Card>
    );
  }

  /**
   * Render the graphs on the overview page.
   */
  render() {
    let nodeCard;
    if (this.state.activeExperiment)
      nodeCard = this.makeNodeCard(this.state.activeExperiment)
    else
      nodeCard = 'Please refresh the state';
    return (
      <div>
        {nodeCard}
      </div>
    );

  }
}

export default OverviewPage