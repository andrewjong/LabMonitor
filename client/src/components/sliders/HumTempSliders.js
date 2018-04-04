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

const Humidity = {
    0: '0% RH',
    40: '40% RH',
    60: '60 RH',
    70: {
        style: {
            color: '#f50',
        },
        label: <strong>70% RH</strong>,
    },
    100: {
        style: {
            color: '#f50',
        },
        label: <strong>100% RH</strong>,
    }
}

const Ambient = {
    0: '0°C/32°F',
    18: '18°C/65°F',
    32: '32°C/90°F',
    38: {
        style: {
            color: '#f50',
        },
        label: <strong>38°C/100°F</strong>,
    },
    45: {
        style: {
            color: '#f50',
        },
        label: <strong>45°C/113°F</strong>,
    },
}

const IR = {
    0: '0°C/32°F',
    38: '38°C/100°F',
    66: '66°C/150°F',
    93: {

        style: {
            color: '#f50',
        },
        label: <strong>93°C/200°F</strong>,
    },
    120: '120°C/248°F'
}

class SlidingBar extends React.Component {
    render() {
        return (

            <div style={{ height: 500 }}>

                <Grid centered columns={2}>
                    <Grid.Row centered columns={4}>

                        <Grid.Column>
                            <div style={style}>
                                <h4>Humidity</h4>
                                <Slider vertical range marks={Humidity} defaultValue={[0, 50]} min={0} max={100} step={1} />
                            </div>
                        </Grid.Column>

                        <Grid.Column>
                            <div style={style}>
                                <h4>Temperature Ambient</h4>
                                <Slider vertical range marks={Ambient} defaultValue={[0, 32]} min={0} max={45} />
                            </div>
                        </Grid.Column>

                        <Grid.Column>
                            <div style={style}>
                                <h4>Temperature IR</h4>
                                <Slider vertical range marks={IR} defaultValue={[0, 38]} min={0} max={120} step={1} />
                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}

export default SlidingBar;
