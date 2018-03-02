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
/*
    return (
      <div>
        {nodeMeasurements.map(size => (
              <Checkbox size="massive" key={size} label={size}/>
              
          
        ))}
      </div>
    )
}
*/
/*
const DropdownExampleMultipleSearchSelection = () => (
  const nodeMeasurements = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];
return (
  <div>
    {nodeMeasurements.map(size => (
      <Dropdown fluid multiple search selection options={size} />
    ))}
  </div>
  )
)
*/

// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

const DropdownExampleMultipleSearchSelection = () => (
  <div className="dropMenu">
  <Dropdown size="massive" placeholder='Select Node(s) Information to Download' 
  fluid multiple search selection options={options} />
    <Button primary>Primary</Button>
  </div>

  
)

export default DropdownExampleMultipleSearchSelection
