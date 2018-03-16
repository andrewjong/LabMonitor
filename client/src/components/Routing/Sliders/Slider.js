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
const mark1 = {
  //65: '0 Volts °C',
  18: '18°C/65°F',
  32: '32°C/90°F',
  38: {

    style: {
      color: '#f50',
    },
    label: <strong>38°C/100°F</strong>,
  },
  149: '149°C/300°F'
};

class SlidingBar extends React.Component {
  /*
  state = {
    inputValue: 1,
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      value: 12.5
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }
*/
  render() {
    //const { value } = this.state;
    return (

      <div style={{ height: 500 }}>
        <div style={style}>

              <Slider vertical min={0} max={1} step={0.01} />
        </div>
        <div style={style}>
          <Slider vertical range marks={marks} defaultValue={[0, 50]} min={0} max={120} />
        </div>
        <div style={style}>
          <Slider vertical range marks={mark1} defaultValue={[0, 50]} min={0} max={149} />
        </div>
      </div>
    )
  }

}

export default SlidingBar;


/*
class IntegerStep extends React.Component {
    state = {
      inputValue: 1,
    }
    onChange = (value) => {
      this.setState({
        inputValue: value,
      });
    }
    render() {
      return (
        <Row>
          <Col span={12}>
            <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={20}
              style={{ marginLeft: 16 }}
              value={this.state.inputValue}
              onChange={this.onChange}
            />
          </Col>
        </Row>
      );
    }
  }
  

  let app;
ReactDOM.render(
  <IntegerStep ref={inst => {
    app = inst;
  }} />,
);

/*
  ReactDOM.render(
    <div>
      <IntegerStep />
    </div>
  , document.getElementById('root'));
   */``
/*
class IntegerStep extends React.Component {
    state = {
      inputValue: 1,
    }
    onChange = (value) => {
      this.setState({
        inputValue: value,
      });
    }
    render() {
      return (
        <Row>
          <Col span={12}>
            <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={20}
              style={{ marginLeft: 16 }}
              value={this.state.inputValue}
              onChange={this.onChange}
            />
          </Col>
        </Row>
      );
    }
  }
  
  export default IntegerStep;



/*
const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

//ReactDOM.render(
 class Sliding extends Component {
      render() {
          return (
  <div style={{ height: 300 }}>
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider vertical range step={10} defaultValue={[20, 50]} />
    </div>
    <div style={style}>
      <Slider vertical range marks={marks} defaultValue={[26, 37]} />
    </div>
  </div>
          )
      }
  //document.getElementById('root')
    }

  export default Sliding; 

/*
const style = {
    float: 'left',
    height: 300,
    marginLeft: 70,
  };
  
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };
  
  ReactDOM.render(
    <div style={{ height: 300 }}>
      <div style={style}>
        <Slider vertical defaultValue={30} />
      </div>
      <div style={style}>
        <Slider vertical range step={10} defaultValue={[20, 50]} />
      </div>
      <div style={style}>
        <Slider vertical range marks={marks} defaultValue={[26, 37]} />
      </div>
    </div>
  );

  export default Sliding; 
  */