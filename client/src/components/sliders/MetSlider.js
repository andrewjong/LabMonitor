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
  0: '0%',
  5: '5%',
  10: '10%',
  15: {

    style: {
      color: '#f50',
    },
    label: <strong>15%</strong>,
  },
  20: {
    style: {
      color: '#f50',
    },
    label: <strong>20%</strong>,
  },
}

class SlidingBar extends React.Component {
  render() {
    //const { value } = this.state;
    return (

      <div style={{ height: 500 }}>
        <div style={style}>

          <Slider vertical range marks={marks} defaultValue={[0, 5]} min={0} max={20} step={0.1}/>
        </div>
      </div>
    )
  }

}

export default SlidingBar;
