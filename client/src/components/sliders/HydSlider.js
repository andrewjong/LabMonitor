import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Slider1 from 'react-rangeslider'

const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: '0% Hydrogen/Oxygen Ratio',
  2: '2% Hydrogen/Oxygen Ratio',
  4: {

    style: {
      color: '#f50',
    },
    label: <strong>4% Hydrogen/Oxygen Ratio</strong>,
  },
  6: {

    style: {
      color: '#f50',
    },
    label: <strong>6% Hydrogen/Oxygen Ratio</strong>,
  },
}

class SlidingBar extends React.Component {
  render() {
    //const { value } = this.state;
    return (

      <div style={{ height: 500 }}>
        <div style={style}>

          <Slider vertical range marks={marks} defaultValue={[0, 2]} min={0} max={6} step={0.01} />
        </div>
      </div>
    )
  }

}

export default SlidingBar;
