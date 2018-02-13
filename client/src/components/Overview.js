import React, { Component } from 'react';
import greenstatus from '../greenstatus.png';
import ReactSpeedometer from "react-d3-speedometer";
import 'bootstrap/dist/css/bootstrap.css';

class Overview extends Component {
  // return (
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export default Overview;