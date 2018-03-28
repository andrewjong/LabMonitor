import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../../../index.css';

const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const marks = {
  38: '38°C/100°F',
  66: '66°C/150°F',
  93: {

    style: {
      color: '#f50',
    },
    label: <strong>93°C/200°F</strong>,
  },
  120: '120°C/248°F'
};

class SlidingBar extends React.Component {

  render() {
    return (
      <div style={{ height: 500 }}>
        <div style={style}>
          <Slider vertical range marks={marks} defaultValue={[0, 50]} min={0} max={120} />
        </div>
      </div>

    )
  }

}

export default SlidingBar;
