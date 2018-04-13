import React, { Component } from 'react';
import { Dropdown, Button, Segment, Checkbox, Icon, Grid } from 'semantic-ui-react'
import './Download.css'

const nodeSamples = [
  "1", "2", "3", "4"
];
const sensorTypes = [
  "Battery", "Carbon Monoxide", "Humidity", "Hydrogen", "Methane",
  "Sound", "Temperature Ambient", "Temperature IR", "Vibration"
];

class Application extends Component {
  CreateSegmentMap = () => (
    nodeSamples.map(this.SegmentNodes)
  )

  SegmentNodes = nodeNumber => (
    <Segment>
      Node {nodeNumber}

      <div className="checkMarks">
      <Grid.Row>
        {this.CreateSenorTypesMap()}
        </Grid.Row>
      </div>

      <div className="button">
        <Button content="Download" icon='download' color="green"/>
      </div>

    </Segment>
  )
  CreateSenorTypesMap = () => (
    sensorTypes.map(this.CheckMark)

  )
  CheckMark = checkNames => (
    <Checkbox label={checkNames}>
    </Checkbox>
  )

  //}





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


  render() {
    return (
      <div className="container">

      {this.CreateSegmentMap()}

      </div>
    );
  }
}


//}


export default Application;
