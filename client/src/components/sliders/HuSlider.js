import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Grid, Header, Table, Icon } from 'semantic-ui-react';

/*
 * Add padding between sliders
 */
const style = {
    float: 'left',
    height: 300,
    marginLeft: 70,
};

/*
 * Colors the text of the slider
 */
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

/*
 * Slider for the humidity and its legend 
 */
class SlidingBar extends React.Component {
    render() {
        return (

            <div style={{ height: 500 }}>

                <Grid centered>

                    <div style={style}>
                        <h4>Humidity</h4>
                        <Slider vertical range marks={Humidity} defaultValue={[0, 40, 60]} min={0} max={100} step={1} />
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
                                    20% RH
                    </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="exclamation triangle" color="yellow" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    30% RH
                  </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="window close" color="red" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    40% RH
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
