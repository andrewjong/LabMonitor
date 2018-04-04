import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Grid } from 'semantic-ui-react';


const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const marks = {
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
    return (
      <div style={{ height: 500 }}>
        <Grid centered>
            <div style={style}>
            <h4>Battery</h4>
              <Slider vertical range min={0} max={4} step={0.01} defaultValue={[2, 5]} marks={marks} />
            </div>
        </Grid>
      </div>
    )
  }

}

export default SlidingBar;
