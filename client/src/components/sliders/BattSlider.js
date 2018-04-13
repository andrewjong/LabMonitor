import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Grid, Table, Header, Icon } from 'semantic-ui-react';



const style = {
  float: 'left',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: {

    style: {
      color: '#f50',
    },
    label: <strong>0 Volts</strong>,
  },
  2: {

    style: {
      color: 'red',
    },
    label: <strong>2 Volts</strong>,
  },
  3: '3 Volts',
  4: '4 Volts',
}

class SlidingBar extends React.Component {
  render() {
    return (
      <div style={{ height: 500 }}>
        <Grid centered>
          <div style={style}>
            <h4>Battery</h4>
            <Slider vertical range min={0} max={4} step={0.01} defaultValue={[2, 3, 5]} marks={marks} />
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
                      3.2 Volts+
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    <Header.Content>
                      <Icon name="exclamation triangle" color="yellow" size="big" />
                    </Header.Content>
                  </Table.Cell>
                  <Table.Cell>
                   3.0-3.19 Volts
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>
                        <Header.Content>
                          <Icon name="window close" color="red" size="big" />
                        </Header.Content>
                    </Table.Cell>
                    <Table.Cell>
                      > 2.99 Volts
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