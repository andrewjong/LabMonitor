import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import './DownloadPage.css'

//const DownloadPage = () => {

const options = [
  { key: 'battery', text: 'Battery', value: 'battery' },
  { key: 'carbonMonoxide', text: 'Carbon Monoxide', value: 'carbonMonoxide' },
  { key: 'humidity', text: 'Humidity', value: 'humidity' },
  { key: 'hydrogen', text: 'Hydrogen', value: 'hydrogen' },
  { key: 'methane', text: 'Methane', value: 'methane' },
  { key: 'sound', text: 'Sound', value: 'sound' },
  { key: 'temperatureAmbient', text: 'Temperature Ambient', value: 'temperatureAmbient' },
  { key: 'temperatureIR', text: 'Temperature IR', value: 'temperatureIR' },
  { key: 'vibration', text: 'Vibration', value: 'Vibration' },
]
const DropdownExampleMultipleSearchSelection = () => (
  <div className="dropMenu">
    <Dropdown size="massive" placeholder='Select Node(s) Information to Download'
      fluid multiple search selection options={options} />
    <Button primary>Primary</Button>
  </div>


)

export default DropdownExampleMultipleSearchSelection
