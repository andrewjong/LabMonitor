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
   0: '0°C/32°F',
   18: '18°C/65°F',
   32: '32°C/90°F',
   38: {
     style: {
       color: '#f50',
     },
     label: <strong>38°C/100°F</strong>,
   },
   45:  {
    style: {
      color: '#f50',
    },
    label: <strong>45°C/113°F</strong>,
  },
}

class SlidingBar extends React.Component {
  render() {
    return (

      <div style={{ height: 500 }}>
        <div style={style}>
        <Slider vertical range marks={marks} defaultValue={[0, 32]} min={0} max={45} />
        </div>
      </div>
    )
  }

}

export default SlidingBar;
