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
  class Nodes extends Component {
  // return (
  render() {
    return (
      <Center>
                  <Row>
                  <Col sm="6">
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                      </FormGroup>
    
                      <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                          This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
              </FormText>
                      </FormGroup>
                      <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
                </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Option two can be something else and selecting it will deselect option one
                </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                          <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
                            Option three is disabled
                </Label>
                        </FormGroup>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />{' '}
                          Check me out
              </Label>
                      </FormGroup>
                      <Button>Submit</Button>
                    </Form>
                  </Col>
    
                </Row>
            </Center>
    );
  }
}
export default Nodes