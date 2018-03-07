import React, { Component } from 'react';
import { Dropdown, Button, Segment, Checkbox, Icon } from 'semantic-ui-react'
import './DownloadPage.css'

/*
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

const renderLabel = label => ({
  color: 'blue',
  content: `${label.text}`,

})

const DropdownExampleMultipleSearchSelection = () => (
  <div className="dropMenu">

    <div className="searchBar">
      <Dropdown size="massive" placeholder='Select/Search Node(s) Information to Download'
        fluid multiple search selection options={options} renderLabel={renderLabel}/>
    </div>

    <div className="downloadButton">
      <Button primary>Download</Button>
    </div>

  </div>
)

export default DropdownExampleMultipleSearchSelection



const sensorTypes = ["humidity", "temp_ambient", "temp_ir", "carbon_monoxide", "methane", "hydrogen", "sound", "vibration", "battery"];

const SegmentExampleSegment = () => (
  <Segment>
    Node${sensorTypes}
  </Segment>
)

export default SegmentExampleSegment
*/

const nodeSamples = [
  "1", "2", "3", "4"
];
const sensorTypes = [
  "Battery", "Carbon Monoxide", "Humidity", "Hydrogen", "Methane",
  "Sound", "Temperature Ambient", "Temperature IR", "Vibration"
];
const DownloadPage = (props) => {
  const nodeMaps = Object.keys(props.nodes).map(idKey => {
    const CreateSegmentMap = () => (
      nodeSamples.map(SegmentNodes)
    )

    const SegmentNodes = nodeNumber => (
      <Segment>
        Node {nodeNumber}

        <div className="checkMarks">
          {CreateSenorTypesMap}
        </div>

        <div className="button">
          <Button icon labelPosition='right' color="green">
            Download
        <Icon name='download' />
          </Button>
        </div>

      </Segment>
    )

    const CreateSenorTypesMap = () => (
      sensorTypes.map(CheckMark)
    )

    const CheckMark = checkNames => (
      <Checkbox label={checkNames}>
      </Checkbox>
    )

  })




  /*
  const DownloadPage = (props) => {
  
    
    const CreateSegmentMap = () => (
      nodeSamples.map(SegmentNodes)
    )
  
    const SegmentNodes = nodeNumber => (
      <Segment>
        Node {nodeNumber}
  
        <div className="checkMarks">
          {CreateSenorTypesMap}
        </div>
  
        <div className="button">
          <Button icon labelPosition='right' color="green">
            Download
          <Icon name='download' />
          </Button>
        </div>
  
      </Segment>
    )
  
    const CreateSenorTypesMap = () => (
      sensorTypes.map(CheckMark)
    )
  
    const CheckMark = checkNames => (
      <Checkbox label={checkNames}>
      </Checkbox>
    )
  
    /*
      componentWillMount = () => {
        this.selectedCheckboxes = new Set();
      }
    
      toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }
      }
    
      handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        for (const checkbox of this.selectedCheckboxes) {
          console.log(checkbox, 'is selected.');
        }
      }
    
      createCheckbox = label => (
        <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
      )
    
      createCheckboxes = () => (
        items.map(this.createCheckbox)
      )
    */

  return (
    <div className="container">

      {nodeMaps}

    </div>
  );



}

export default DownloadPage;
