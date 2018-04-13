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


const Hydrogen = {
    0: '0% H/O',
    2: '2% H/O Ratio',
    4: {

        style: {
            color: '#f50',
        },
        label: <strong>4% H/O Ratio</strong>,
    },
    6: {

        style: {
            color: '#f50',
        },
        label: <strong>6% H/O Ratio</strong>,
    },
}


class SlidingBar extends React.Component {
    render() {
        return (

            <div style={{ height: 500 }}>
                <Grid centered >
                    <div style={style}>
                        <h4>Hydrogen</h4>
                        <Slider vertical range marks={Hydrogen} defaultValue={[0, 2, 4]} min={0} max={6} step={0.01} />
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
                                    >2% Hydrogen/Oxygen Ratio
                    </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="exclamation triangle" color="yellow" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    2.01-4% Hydrogen/Oxygen Ratio
                  </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="window close" color="red" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    4.01%+ Hydrogen/Oxygen Ratio
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