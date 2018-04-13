import React, { Component } from 'react';
import './LiveChartsPage.css'
import { Card, Grid, Dropdown } from 'semantic-ui-react'
import ExperimentCard from '../components/ExperimentCard'
import SensorCard from '../components/SensorCard'

// sensor labels for a node 
const SENSOR_GROUPS = {
  'humidity': ['humidity'],
  'temperature': ['temp_ambient', 'temp_ir'],
  'gas': ["carbon_monoxide", "methane", "hydrogen"], // group gases together
  'sound': ['sound'],
  'vibration': ['vibration'],
  'battery': ['battery']
};

// graphical options for Chart.JS
const CHART_OPTIONS = {
  legend: {
    display: true,
    position: 'bottom'
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
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
    easing: 'linear'
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    animationDuration: 0.5 // in seconds???
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


/**
 * Takes the data for a node and transforms it into an object suitable for a 
 * @param {Object[]} dataPoints the array containing the stored state data for a node
 * @returns {array} array of objects
 */
const makeDataWithChartOptions = (dataPoints) => {
  const timeLabels = dataPoints.map(point => point.time);
  return Object.keys(SENSOR_GROUPS).map(sensorGroupKey => {
    const subLabels = SENSOR_GROUPS[sensorGroupKey];
    const datasets = subLabelsToDatasets(subLabels, dataPoints);
    return {
      title: sensorGroupKey,
      status: "Good",
      chartData: {
        labels: timeLabels,
        datasets: datasets,
      },
      chartOptions: CHART_OPTIONS
    }
  });
}

const subLabelsToDatasets = (subLabels, dataPoints) => subLabels.map(label => {
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
    const firstID = Object.keys(nodes)[0] // because the first id is not necessarily 0. eg. where 0 has been deleted
    this.state = {
      activeExperimentID: firstID,
      experiments: nodes
    };
  }

  /**
   * Change the experiment based on the selected option
   */
  changeExperiment = (event, { value }) => {
    // alert('Change detected!')
    const newState = Object.assign(this.state, { activeExperimentID: value });
    this.setState(newState);
  }

  makeMainDisplay = () => {
    const id = this.state.activeExperimentID;
    const dataPoints = this.state.experiments[id];
    const sensorData = makeDataWithChartOptions(dataPoints);

    // use the most recent datapoint for the owner and description info
    const latestDataPoint = dataPoints[dataPoints.length - 1];
    const experimentOptions = getOptions(this.props.nodes);
    const title = latestDataPoint.equipment || 'None'
    const owner = latestDataPoint.owner || 'None';
    const description = latestDataPoint.description || 'None';

    return (
      <Grid centered>
        <Grid.Row>
          <Dropdown centered inline
            noResultsMessage="No experiments available"
            options={experimentOptions} defaultValue={title} placeholder="Select an experiment"
            onChange={this.changeExperiment}
          />
        </Grid.Row>
        <Grid.Row>
          <ExperimentCard sensorData={sensorData} title={title} owner={owner} description={description} />
        </Grid.Row>
      </Grid>
    );
  }

  /**
   * Render the graphs on the overview page.
   */
  render() {
    let experimentCard;
    if (this.state.activeExperimentID)
      experimentCard = this.makeMainDisplay()
    else
      experimentCard = 'Please refresh the state';
    return (
      <div>
        {experimentCard}
      </div>
    );

  }
}

export default OverviewPage