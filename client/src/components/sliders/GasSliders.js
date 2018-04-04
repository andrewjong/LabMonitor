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

const carbon = {
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

const Hydrogen = {
    0: '0% Hydrogen/Oxygen Ratio',
    2: '2% Hydrogen/Oxygen Ratio',
    4: {

        style: {
            color: '#f50',
        },
        label: <strong>4% Hydrogen/Oxygen Ratio</strong>,
    },
    6: {

        style: {
            color: '#f50',
        },
        label: <strong>6% Hydrogen/Oxygen Ratio</strong>,
    },
}

const Methane = {
    0: '0%',
    2.5: '2%',
    3.5: {

        style: {
            color: '#f50',
        },
        label: <strong>3.5%</strong>,
    },
    5: {
        style: {
            color: '#f50',
        },
        label: <strong>5%</strong>,
    },
    7: {

        style: {
            color: '#f50',
        },
        label: <strong>7%</strong>,
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
                                <h4>Carbon Monoxide</h4>
                                <Slider vertical range marks={carbon} defaultValue={[0, 5]} min={0} max={10} step={0.01} />
                            </div>
                        </Grid.Column>

                        <Grid.Column>
                            <div style={style}>
                                <h4>Hydrogen</h4>
                                <Slider vertical range marks={Hydrogen} defaultValue={[0, 2]} min={0} max={6} step={0.01} />
                            </div>
                        </Grid.Column>

                        <Grid.Column>
                            <div style={style}>
                                <h4>Methane</h4>
                                <Slider vertical range marks={Methane} defaultValue={[0, 5]} min={0} max={7} step={0.1} />
                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        )
    }

}

export default SlidingBar;