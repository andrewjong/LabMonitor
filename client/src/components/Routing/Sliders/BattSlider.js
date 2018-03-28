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

  0: {

    style: {
      color: '#f50',
    },
    label: <strong>0 Volts</strong>,
  },
  2: {

    style: {
      color: 'red',
    },
    label: <strong>2 Volts</strong>,
  },
  3: '3 Volts',
  4: '4 Volts',
}

class SlidingBar extends React.Component {
  render() {
    //const { value } = this.state;
    return (

      <div style={{ height: 500 }}>
        <div style={style}>

          <Slider vertical range min={0} max={4} step={0.01} defaultValue={[2, 5]} marks={marks}/>
        </div>
      </div>
    )
  }

}

export default SlidingBar;
