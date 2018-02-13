import React, { Component, PropTypes } from 'react';
import '../App.css'
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

class Tabs extends Component {
    render() {
        // State variables for lab header
        var LAB_NAME = this.state.value;
        var MANAGER_NAME = this.state.manager;
        var EMAIL = this.state.email;
    
        return (
          <div className="App">
            <header className="App-header">
              <Jumbotron>
                <font color="black">
                  <h1 align="center"><font size="30">{LAB_NAME} Lab</font></h1>
                  <center>
                    <font size="20"><b>Manager: {MANAGER_NAME}<br /></b></font>
                    <font size="20"><b>{EMAIL}@nasa.gov</b></font>
                  </center>
                </font>
              </Jumbotron>
          </header>
</div>
        );
    }
}
export default Tabs;