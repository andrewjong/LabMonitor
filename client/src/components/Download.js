import React, { Component, PropTypes } from 'react';
import NodeCard from './NodeCard';

import greenstatus from '../greenstatus.png';
import ReactSpeedometer from "react-d3-speedometer";
import 'bootstrap/dist/css/bootstrap.css';

import {
  Jumbotron, Button, TabContent, TabPane,
  Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, InputGroup,
  InputGroupAddon, Form, FormGroup, Label, Input, FormText, Badge, Container
} from 'reactstrap';
import classnames from 'classnames';
import Center from 'react-center';

import ReactDOM from 'react-dom';
//const Overview = (props) => {
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