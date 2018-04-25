import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Grid, Header, Icon, Table } from 'semantic-ui-react';

/**
 * Paadding for slider 
 */
const style = {
    float: 'left',
    height: 300,
    marginLeft: 70,
};

/**
 * Sets the slider's text color
 */
const Sound = {
    0: '0 dB',
    60: '60 dB',
    75: '70 dB',
    95: {
        style: {
            color: '#f50',
        },
        label: <strong>90 dB</strong>,
    },
    120: {
        style: {
            color: '#f50',
        },
        label: <strong>120 dB</strong>,
    },
}

/**
 * Renders slider for sound and its threshold legend 
 */
class SlidingBar extends React.Component {
    render() {
        return (

            <div style={{ height: 500 }}>
                <Grid centered>

                    <div style={style}>
                        <h4>Sound</h4>
                        <Slider vertical range marks={Sound} defaultValue={[0, 60, 75]} min={0} max={120} step={1} />
                    </div>

                    <Table basic='very' celled collapsing>
                        <Table.Body>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="check circle" color="green" size="big" />
                                    </Header.Content>
                                </Table.Cell>

                                <Table.Cell>
                                    60 decibels (Talking/Machinery)
                    </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="exclamation triangle" color="yellow" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    75 decibels (Constant Sound)
                  </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="window close" color="red" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    95+ decibels
                    </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid>
            </div>
        )
    }

}

export default SlidingBar;
