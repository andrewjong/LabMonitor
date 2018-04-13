import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';

import 'antd/dist/antd.css';
import { Grid, Table, Header, Icon } from 'semantic-ui-react';
class SlidingBar extends React.Component {
  
      render() {
        return (
          <div className="am-slider-example">
           
              <Slider
                style={{ marginLeft: 30, marginRight: 30 }}
                defaultValue={26}
                min={0}
                max={30}
                trackStyle={{
                  backgroundColor: 'red',
                  height: '5px',
                }}
                railStyle={{
                  backgroundColor: 'blue',
                  height: '5px',
                }}
                handleStyle={{
                  borderColor: 'blue',
                  height: '14px',
                  width: '14px',
                  marginLeft: '-7px',
                  marginTop: '-4.5px',
                  backgroundColor: 'blue',
                }}
              />
             </div>
        );
      }
}

export default SlidingBar;