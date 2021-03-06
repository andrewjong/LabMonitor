/**
 * This file is where people can  choose what nodes todownload 
 */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button, FormGroup, Label, Input
} from 'reactstrap';
import Center from 'react-center';
import './Download.css'

class Download extends Component {
  render() {
    return (
      <Center>
        <div className="options">
          <FormGroup>
            <Label for="exampleSelect">Selection the nodes required for download to .csv</Label>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
              <option>Battery</option>
              <option>Carbon Monoxide</option>
              <option>Humidity</option>
              <option>Hydrogen</option>
              <option>Methane</option>
              <option>Sound</option>
              <option>Temperature Ambient</option>
              <option>Temperature IR</option>
              <option>Vibration</option>
            </Input>
          </FormGroup>
          <Button color="primary" size="lg" block>Download Now</Button>
        </div>
      </Center>
    );
  }
}
export default Download;