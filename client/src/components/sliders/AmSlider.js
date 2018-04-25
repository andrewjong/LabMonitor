import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Grid, Icon, Table, Header } from 'semantic-ui-react';

/*
 * Padding for slider
 */
const style = {
    float: 'left',
    height: 300,
    marginLeft: 70,
};

/*
 * Set text color of slider
 */
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

/*
 * Renders slider for Temperature Ambient and its legend
 */
class SlidingBar extends React.Component {
    render() {
        return (
            <div style={{ height: 500 }}>

                <Grid centered>

                    <div style={style}>
                        <h4>Temperature Ambient</h4>
                        <Slider vertical range marks={Ambient} defaultValue={[0,18,32]} min={0} max={45} />
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
                                    18-32°C (65-90°F)
                    </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="exclamation triangle" color="yellow" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    32.1-38°C (90-100°F)
                  </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="window close" color="red" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    38.1°C+ (100°F+)
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