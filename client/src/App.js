import React, { Component } from 'react';
import './App.css'
import NodeCard from './components/NodeCard';

import greenstatus from './greenstatus.png';
import ReactSpeedometer from "react-d3-speedometer";
import 'bootstrap/dist/css/bootstrap.css';

import {
  Jumbotron, Button, TabContent, TabPane,
  Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, InputGroup,
  InputGroupAddon, Form, FormGroup, Label, Input, FormText, Badge, Container
} from 'reactstrap';
import classnames from 'classnames';
import {Text} from 'react-native';

const INTERVAL_SECONDS = 2;
const MAX_DATA = 10;

/*
state = {
  nodes: {
    1: [{}, {}, {}],
    2: [{}, {}, {}],
    3: [{}, {}, {}]
  }
}
*/
class App extends Component {
  // initialize state as an object with an empty array
  // state = { nodes: {} };

  constructor(props) {
    super(props);

    // form
    // this.state = { value: '', manager: '', email: ''};
    this.handleChange = this.handleChange.bind(this);

    // tabs
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      nodes: []
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  //handles form events
  handleChange(event) {
    this.setState(Object.apply(this.state, { [event.target.name]: event.target.value }));
  }


  componentDidMount() {
    setInterval(() => {
      fetch('/live-data')
        .then(res => {
          if (res.ok) return res.json();
          else throw new Error('Could not connect');
        })
        .catch(err => {
          console.log(err);
        })
        .then(latestData => {
          if (!latestData) throw new Error('No data');
          latestData.map(node => {
            // clone the original state
            const newState = Object.assign({}, this.state);
            // init the array of datapoints if necessary
            if (typeof newState.nodes[node.id] === 'undefined') newState.nodes[node.id] = [];
            const dataPoints = newState.nodes[node.id];
            const lastPoint = dataPoints[dataPoints.length - 1];
            if (!(JSON.stringify(node) === JSON.stringify(lastPoint))) {
              console.log('New data detected. Updating state...')
              // add the new data
              newState.nodes[node.id].push(node);
              // don't store in the state more than max amount of datapoints
              if (newState.nodes[node.id].length > MAX_DATA) newState.nodes[node.id].shift();
              return this.setState({ newState });
            } else {
              console.log(`No new data for node id ${node.id}`)
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }, INTERVAL_SECONDS * 1000);
  }
  /**
   * Hardcode the color for each sensor
   * @param {string} label 
   */
  chooseBorderColor(label) {
    if (label === "humidity") return 'rgba(80,120,230,1)';
    if (label === "temp_ambient") return 'rgba(255,99,132,1)';
    if (label === "temp_ir") return 'rgba(255,99,132,1)';
    if (label === "carbon_monoxide") return 'rgba(220,220,80,1)';
    if (label === "methane") return 'rgba(180,255,132,1)';
    if (label === "hydrogen") return 'rgba(80,200,180,1)';
    if (label === "sound") return 'rgba(180,180,255,1)';
    if (label === "vibration") return 'rgba(100,50,132,1)';
    if (label === "battery") return 'rgba(80,80,80,1)';
    return 'rgba(0,0,0,1)';
  }

  render() {
    var LAB_NAME = this.state.value;
    var MANAGER_NAME = this.state.manager;
    var EMAIL = this.state.email;

    return (
      <div className="App">
        <header className="App-header">
        <Jumbotron>
        <Text style={{color: 'black'}}>
            <h1 align="center"><font size="30">{LAB_NAME} Lab</font></h1>
            <center>
              <font size="20"><b>Manager: {MANAGER_NAME}<br /></b></font>
              <font size="20"><b>{EMAIL}@nasa.gov</b></font>
            </center>
            </Text>
          </Jumbotron>
        </header>
        <div class="row">
          <div class="col-md-4 col-md-offset-3"></div>

          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Overview
            </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Download Data Set
            </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                Add/Remove Nodes
            </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '4' })}
                onClick={() => { this.toggle('4'); }}
              >
                Start
            </NavLink>
            </NavItem>
          </Nav>
        </div>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <center>
                  <h1>Curent Lab Status: Good</h1>
                  <img src={greenstatus} alt="Shows a green check mark, which means status is good" />
                  <header className="MeterSubTitle">
                    <h1 align="center">Meter</h1>
                  </header>
                  <ReactSpeedometer
                    //Values of speedometer
                    maxValue={100}
                    value={50}

                    //Size of speedometer
                    width="500"
                    height="500"

                    //Colors of speedometer
                    startColor="green"
                    endColor="red"
                    needleColor="black"
                    needleTransitionDuration={4000}
                    needleTransition="easeElastic"
                  />
                </center>
              </Col>
            </Row>


            {/*
            <input type="text" onChange={this.onChange.bind(this)}/>
        You typed: <code>{this.state.typed}</code>
            */}
          </TabPane>



          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>





          <TabPane tabId="3">
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
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
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
          </TabPane>

          <TabPane tabId="4">
            <Col sm={{ size: 6, order: 10, offset: 3 }}>
              <row>
                <Form onSubmit={this.handleSubmit}>

                  <FormGroup>
                    <Label for="Lab Title">Lab Name</Label>
                    <InputGroup>
                      <Input input type="value" name="value" onChange={this.handleChange.bind(this)} value={this.state.value} placeholder="Lab Name" />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <Label for="Lab Title">Lab Manager's Name</Label>
                    <InputGroup>
                      <Input input type="manager" name="manager" value={this.state.manager} onChange={this.handleChange.bind(this)} placeholder="First and Last Name" />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <Label for="Email">Email</Label>
                    <InputGroup>
                      <Input input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="username" />
                      <h3><Badge color="primary">@nasa.gov</Badge></h3>
                    </InputGroup>
                  </FormGroup>
                </Form>
                <Button color="primary" size="lg" block>Submit</Button>
              </row>
            </Col>
          </TabPane>
        </TabContent>
        <div className="container">
          {
            // map over each of the nodes
            Object.keys(this.state.nodes).map(idKey => {
              const values = this.state.nodes[idKey];
              const lastValue = values[values.length - 1];
              const owner = lastValue.owner || '';
              const sensorLabels = ["humidity", "temp_ambient", "temp_ir", "carbon_monoxide", "methane", "hydrogen", "sound", "vibration", "battery"];
              const sensorData = sensorLabels.map(label => {
                return {
                  status: "Good",
                  chartData: {
                    labels: values.map(timePoint => timePoint.time),
                    datasets: [{
                      label: label,
                      data: values.map(timePoint => timePoint[label]),
                      backgroundColor: this.chooseBorderColor(label).replace(',1)', ',.5)'),
                      borderColor: this.chooseBorderColor(label),
                      borderWidth: 1
                    }],
                  },
                  chartOptions: {
                    legend: {
                      display: true,
                      position: 'top'
                    },
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true
                        }
                      }]
                    },
                  }
                }
              });

              return (
                <NodeCard title={`Node ${idKey}`}
                  ownerInfo={{
                    name: owner,
                    email: `${owner.split(' ').join('.')}@nasa.gov`
                  }}
                  description={lastValue.description}
                  sensorData={sensorData}
                />);
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
