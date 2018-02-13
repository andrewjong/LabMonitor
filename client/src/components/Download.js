import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {
  Button, FormGroup, Label, Input
} from 'reactstrap';
import Center from 'react-center';

class Download extends Component {
  // return (
  render() {
    return (
      <Center>
        <div>
          <br></br>
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