import React, { Component } from 'react';
import { Dropdown, Button, Segment, Checkbox, Icon, Grid, Table, Accordion } from 'semantic-ui-react'
import { Slider } from 'antd';
import SlidingBar from '../components/sliders/Slider'
import SlidingBatt from '../components/sliders/BattSlider'
import SlidingSouVib from '../components/sliders/SouVibSliders'
import SlidingHumTemp from '../components/sliders/HumTempSliders'
import SlidingGas from '../components/sliders/GasSliders'

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Default Values set in the Nodes
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>

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
                <Table.Cell>3.2 Volts+</Table.Cell>
                <Table.Cell>
                  3.0-3.19 Volts
            </Table.Cell>
                <Table.Cell>2.99 Volts Below</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Carbon Monoxide</Table.Cell>
                <Table.Cell>0-4 PPM</Table.Cell>
                <Table.Cell>
                  5-7 PPM
            </Table.Cell>
                <Table.Cell>8+ PPM (Danger levels)</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Humidity</Table.Cell>
                <Table.Cell>20% RH</Table.Cell>
                <Table.Cell>
                  30% RH
            </Table.Cell>
                <Table.Cell>40% RH+</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Hydrogen</Table.Cell>
                <Table.Cell>Less than 2% Hydrogen/Oxygen Ratio</Table.Cell>
                <Table.Cell>
                  2.01-4% Hydrogen/Oxygen Ratio
            </Table.Cell>
                <Table.Cell>4.01%+ Hydrogen/Oxygen Ratio </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Methane</Table.Cell>
                <Table.Cell>2.5%</Table.Cell>
                <Table.Cell>
                  3.75%
            </Table.Cell>
                <Table.Cell>5% (Lower Explosive Limit)</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Sound</Table.Cell>
                <Table.Cell>60 decibels (Talking/Machinery)</Table.Cell>
                <Table.Cell>
                  75 decibels (Constant Sound)
            </Table.Cell>
                <Table.Cell>95 decibels+ (Unpleasent)</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Temperature Ambient</Table.Cell>
                <Table.Cell>18-32°C (65-90°F)</Table.Cell>
                <Table.Cell>
                  32.1-38°C (90-100°F)
            </Table.Cell>
                <Table.Cell>38.1°C+ (100°F+)</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Temperature IR</Table.Cell>
                <Table.Cell>38-66°C (100-150°F)</Table.Cell>
                <Table.Cell>
                  66.1-93°C (151-200°F)
            </Table.Cell>
                <Table.Cell>93.1°C+ (201°F)</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Vibration</Table.Cell>
                <Table.Cell>50%</Table.Cell>
                <Table.Cell>
                  51-75%
            </Table.Cell>
                <Table.Cell>76-100%</Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Battery Slider
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <SlidingBatt />
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Gases Sliders
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <SlidingGas />
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Sound and Vibration Slider
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <SlidingSouVib />
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Temperature and Humidity Sliders
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <SlidingHumTemp />
        </Accordion.Content>

      </Accordion>
    )
  }
}