import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Grid, Table, Icon, Header } from 'semantic-ui-react';

const style = {
    float: 'left',
    height: 300,
    marginLeft: 70,
};

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
                <Grid centered>
                    <div style={style}>
                        <h4>Methane</h4>
                        <Slider vertical range marks={Methane} defaultValue={[0,2.5,5]} min={0} max={7} step={0.1} />
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
                                > 2.5%
                    </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="exclamation triangle" color="yellow" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                2.51-3.75%
                  </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="window close" color="red" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                5%+
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