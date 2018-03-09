import React, { Component } from 'react';
import './OverviewPage.css'
import NodeCard from '../NodeCard'
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Card } from 'semantic-ui-react'
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

const makeNodeCards = (nodes) => {
  return Object.keys(nodes).map(idKey => {
    const dataPoints = nodes[idKey];
    const sensorData = makeDataWithChartOptions(dataPoints);

    // use the most recent datapoint for the owner and description info
    const latestDataPoint = dataPoints[dataPoints.length - 1];
    const owner = latestDataPoint.owner || 'None';
    const description = latestDataPoint.description || 'None';

    // put in a NodeCard for each node
    return (
      <Card color='blue' style={{ maxHeight: '80vh', minWidth: '400px' }}>
        <Card.Content>
          <Card.Header>
            {`Node ${idKey}`}
          </Card.Header>
          <Card.Meta>
            {`Owner: ${owner}`}
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
          <Card.Content>
            {
              sensorData.map(data =>
                <SensorCard sensorData={data} />
              )
            }
          </Card.Content>

        </Card.Content>
      </Card>
    );
  });

}

/**
 * Load the graphs on the overview page.
 */
const OverviewPage = (props) => {
  // console.log(`OverviewPage Props=${JSON.stringify(props)}`)
  // define a list of node cards
  const nodeCards = makeNodeCards(props.nodes);
  return (
    <Card.Group>
      {nodeCards}
    </Card.Group>
  );
}

export default OverviewPage