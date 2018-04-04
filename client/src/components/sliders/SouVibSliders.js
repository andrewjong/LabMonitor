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

const Sound = {
    0: '38°C/100°F',
    60: '60 decibels',
    75: '60 decibels',
    95: {
        style: {
            color: '#f50',
        },
        label: <strong>90 decibels</strong>,
    },
    120: {
        style: {
            color: '#f50',
        },
        label: <strong>120 decibels</strong>,
    },
}

const Vibrations = {
    0: '0%',
    50: '50%',
    75: {

        style: {
            color: '#f50',
        },
        label: <strong>75%</strong>,
    },
    100: {

        style: {
            color: '#f50',
        },
        label: <strong>100%</strong>,
    },
}

class SlidingBar extends React.Component {
    render() {
        return (

            <div style={{ height: 500 }}>
                <Grid centered columns={2}>
                    <Grid.Row centered columns={4}>
                        <Grid.Column>
                            <div style={style}>
                            <h4>Sound</h4>
                                <Slider vertical range marks={Sound} defaultValue={[0, 60]} min={0} max={120} step={1} />
                            </div>
                        </Grid.Column>

                        <Grid.Column>
                            <div style={style}>
                            <h4>Vibration</h4>
                                <Slider vertical range marks={Vibrations} defaultValue={[0, 50]} min={0} max={100} step={1} />
                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}

export default SlidingBar;
