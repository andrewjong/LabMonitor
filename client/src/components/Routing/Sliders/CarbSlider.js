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
  0: '0 PPM',
  4: '4 PPM',
  7: '7 PPM',
  8: {
    style: {
      color: '#f50',
    },
    label: <strong>8 PPM</strong>,
  },
  10: {
    style: {
      color: '#f50',
    },
    label: <strong>10 PPM</strong>,
  },
}

class SlidingBar extends React.Component {
  render() {
    //const { value } = this.state;
    return (

      <div style={{ height: 500 }}>
        <div style={style}>

          <Slider vertical range marks={marks} defaultValue={[0, 5]} min={0} max={10} step={0.01}/>


        </div>
      </div>
    )
  }

}

export default SlidingBar;
