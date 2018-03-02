/**
 * Add or remove node graphs
 */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button, Row, Col, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import Center from 'react-center';

import './Nodes.css'

class Nodes extends Component {
  render() {
    return (
      <Center>
          <Form>

<div className="direction">
          Choose the nodes you want to show on webpage:
          <div className="check">
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Battery
              <br></br>
                <Input type="checkbox" />{' '}
                Carbon Monoxide
              <br></br>
                <Input type="checkbox" />{' '}
                Humidity
              <br></br>
                <Input type="checkbox" />{' '}
                Hydrogen
              <br></br>
                <Input type="checkbox" />{' '}
                Methane
              <br></br>
                <Input type="checkbox" />{' '}
                Sound
              <br></br>
                <Input type="checkbox" />{' '}
                Temperature Ambient
              <br></br>
                <Input type="checkbox" />{' '}
                Temperature IR
              <br></br>
                <Input type="checkbox" />{' '}
                Vibration
              </Label>
            </FormGroup>
            </div>

            <Button>Submit</Button>

            </div>
          </Form>
      </Center>
    );
  }
}
export default Nodes