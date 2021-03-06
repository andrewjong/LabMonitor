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

class SlidingBar extends React.Component {
    render() {
        return (

            <div style={{ height: 500 }}>
                <Grid centered>


                    <Grid.Column>
                        <div style={style}>
                            <h4>Carbon Monoxide</h4>
                            <Slider vertical range marks={carbon} defaultValue={[0, 5, 7]} min={0} max={10} step={0.01} />
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
                                        0-4 PPM
                    </Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>
                                        <Header.Content>
                                            <Icon name="exclamation triangle" color="yellow" size="big" />
                                        </Header.Content>
                                    </Table.Cell>
                                    <Table.Cell>
                                        5-7 PPM
                  </Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>
                                        <Header.Content>
                                            <Icon name="window close" color="red" size="big" />
                                        </Header.Content>
                                    </Table.Cell>
                                    <Table.Cell>
                                        8+ PPM
                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>



                </Grid>
            </div>
        )
    }

}

export default SlidingBar;