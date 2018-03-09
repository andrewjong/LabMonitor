import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';

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

class SlidingBar extends React.Component {
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