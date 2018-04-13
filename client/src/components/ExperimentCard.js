import React from 'react'
import { Button, Card, Grid, Dropdown, Item } from 'semantic-ui-react'
import SensorCard from '../components/SensorCard'
import { toCapitalCase } from '../utilityFunctions'

class ExperimentCard extends React.Component {
    constructor(props) {
        super(props);
        // TODO: these sensor labels should be made into constants, so that they're unified with the constants in LiveChartsjs
        this.state = {
            shownSensors: {
                'humidity': true,
                'temperature': true,
                'gas': true,
                'sound': true,
                'vibration': true,
                'battery': true
            }
        }
        this.makeToggleHiddenCallback = this.makeToggleHiddenCallback.bind(this); // bind the 'this' context for the callback
    }

    makeToggleHiddenCallback = sensorGroup => {
        return () => {
            const newState = Object.assign({}, this.state)
            // toggle
            newState.shownSensors[sensorGroup] = !newState.shownSensors[sensorGroup];
            this.setState(newState);
        }
    }


    render() {
        // filter to show only the shown sensor groups
        const shownData = this.props.sensorData.filter(data => this.state.shownSensors[data.title]);
        const hiddenData = this.props.sensorData.filter(data => !this.state.shownSensors[data.title]);
        return (
            <Card fluid centered>
                <Card.Content>
                    <Card.Header>
                        {`Experiment by ${this.props.owner}`}
                    </Card.Header>
                    <Card.Description>
                        {this.props.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Grid divided container>
                        {
                            shownData.map(data =>
                                <SensorCard sensorData={data} toggleHidden={this.makeToggleHiddenCallback(data.title)} />
                            )
                        }
                    </Grid>
                </Card.Content>
                <Card.Content>
                    <Grid centered>
                        {
                            hiddenData.map(data => (
                                <Item>
                                    <Item.Content>
                                        <Item.Header content={toCapitalCase(data.title)} />
                                        <Button floated='right' icon='unhide' size='tiny'
                                            onClick={() => this.makeToggleHiddenCallback(data.title)()} />

                                    </Item.Content>
                                </Item>
                            ))
                        }
                    </Grid>

                </Card.Content>
            </Card>
        );
    }

}

export default ExperimentCard