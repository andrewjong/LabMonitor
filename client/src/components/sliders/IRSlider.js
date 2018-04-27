import React from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import { Grid, Table, Header, Icon} from 'semantic-ui-react';

/*
 * Padding for slider
 */
const style = {
    float: 'left',
    height: 300,
    marginLeft: 70,
};

/*
 * Colors the text of slider red
 */
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
    120: {
        style: {
            color: '#f50',
        },
        label: <strong>120°C/248°F</strong>,
    }
}

/*
 * Renders slider for temperature IR and legend 
 */
class SlidingBar extends React.Component {
    render() {
        return (

            <div style={{ height: 500 }}>

                <Grid centered>
                   

                            <div style={style}>
                                <h4>Temperature IR</h4>
                                <Slider vertical range marks={IR} defaultValue={[0, 38, 66]} min={0} max={120} step={1} />
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
                       38-66°C (100-150°F)
                    </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="exclamation triangle" color="yellow" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                 66.1-93°C (151-200°F)
                 
                  </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>
                                    <Header.Content>
                                        <Icon name="window close" color="red" size="big" />
                                    </Header.Content>
                                </Table.Cell>
                                <Table.Cell>
                                  93.1°C+
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
