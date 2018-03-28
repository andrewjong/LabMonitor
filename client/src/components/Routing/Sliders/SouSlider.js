import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../../../index.css';
import Slider1 from 'react-rangeslider'

const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const marks = {
  //65: '0 Volts °C',
  0: '38°C/100°F',
  60: '60 decibels',
  75: '60 decibels',
  95: {
    style: {
      color: '#f50',
    },
    label: <strong>90 decibels</strong>,
  },
  120: {
    style: {
      color: '#f50',
    },
    label: <strong>120 decibels</strong>,
  },
}

class SlidingBar extends React.Component {
  render() {
    return (

      <div style={{ height: 500 }}>
        <div style={style}>
          <Slider vertical range marks={marks} defaultValue={[0, 60]} min={0} max={120} step={1} />
        </div>
      </div>
    )
  }

}

export default SlidingBar;
