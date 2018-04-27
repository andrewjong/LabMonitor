import React from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import { Grid, Header, Icon, Table } from 'semantic-ui-react';

/*
 * Padding for slider 
 */
const style = {
    float: 'left',
    height: 300,
    marginLeft: 70,
};

/*
 * Colors the vibration slider text
 */
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

/**
 * Creates the slider for vibration and its legend
 */
class SlidingBar extends React.Component {
    render() {
        return (

            <div style={{ height: 500 }}>
                <Grid centered>
                    <div style={style}>
                        <h4>Vibration</h4>
                        <Slider vertical range marks={Vibrations} defaultValue={[0, 50, 75]} min={0} max={100} step={1} />
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
                                    0-50%
                    </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="exclamation triangle" color="yellow" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    51-75%
                  </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="window close" color="red" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                    76-100%
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
