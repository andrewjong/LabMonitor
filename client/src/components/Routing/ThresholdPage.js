import React, { Component } from 'react';
import { Dropdown, Button, Segment, Checkbox, Icon, Grid, Table } from 'semantic-ui-react'
import { Slider } from 'antd';
import SlidingBar from './Slider'


    
    const TableExampleFixed = () => (

      <div>
        <SlidingBar/>
      <p>Default values set in the nodes</p>
      <Table padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Nominal</Table.HeaderCell>
            <Table.HeaderCell>Warning</Table.HeaderCell>
            <Table.HeaderCell>Critical</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>

          <Table.Row>
            <Table.Cell>Battery</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>
                130-170
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Carbon Monoxide</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>
                Jamie is a k
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Humidity</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>
                Jill is an alri
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Hydrogen</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>
                Jill is an alri
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Methane</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>
                Jill is an alri
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Sound</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>
                Jill is an alri
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Temperature Ambient</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>
                Jill is an alri
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.Cell>Temperature IR</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>
                Jill is an alri
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.Cell>Vibration</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>
                Jill is an alri
            </Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
      </div>
    )
    
    export default TableExampleFixed


//export default ThresholdPage