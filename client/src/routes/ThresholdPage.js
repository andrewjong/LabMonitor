import React, { Component } from 'react';
import { Dropdown, Button, Segment, Checkbox, Icon, Grid, Table, Accordion } from 'semantic-ui-react'
import { Slider } from 'antd';
import SlidingBar from '../components/sliders/Slider'
import SlidingBatt from '../components/sliders/BattSlider'
import SlidingSouVib from '../components/sliders/SouVibSliders'
import SlidingHumTemp from '../components/sliders/HumTempSliders'
import SlidingGas from '../components/sliders/GasSliders'
import SlidingCM from '../components/sliders/CMSlider'
import SlidingM from '../components/sliders/MSlider'
import SlidingHy from '../components/sliders/HySlider'
import SlidingHu from '../components/sliders/HuSlider'
import SlidingSou from '../components/sliders/SoundSlider'
import SlidingAm from '../components/sliders/AmSlider'
import SlidingVib from '../components/sliders/VibSlider'
import SlidingIR from '../components/sliders/IRSlider'
import Tables from '../components/Tables'
import Test from '../components/sliders/Test'

export default class AccordionExampleStyled extends Component {
  render() {

    return (
      <Grid centered >

        <Grid.Column>
          <Tables />
        </Grid.Column>

        <Grid.Row centered columns={3}>
          <Grid.Column>
            <SlidingBatt />
          </Grid.Column>

          <Grid.Column>
            <SlidingCM />
          </Grid.Column>

          <Grid.Column>
            <SlidingHu />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <SlidingHy />
          </Grid.Column>
          <Grid.Column>
            <SlidingM />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <SlidingSou />
          </Grid.Column>
          <Grid.Column>
            <SlidingAm />
          </Grid.Column>
        </Grid.Row>


        <Grid.Row centered columns={2}>
          <Grid.Column>
            <SlidingIR />
          </Grid.Column>
          <Grid.Column>
            <SlidingVib />
          </Grid.Column>
        </Grid.Row>

<Test/>
      </Grid>
     
    )
  }
}